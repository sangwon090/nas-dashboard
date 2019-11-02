module.exports = (app, fs, os, isRaspberryPi) => {
    app.get('/sysinfo/info', (req, res) => {
        res.json({
            cpu: {
                arch: os.arch(),
                model: os.cpus()[0].model
            },
            os: {
                hostname: os.hostname(),
                platform: os.platform(),
                version: os.release()
            }
        });
    });

    app.get('/sysinfo/load', (req, res) => {
        let temp = 0;

        if(isRaspberryPi) {
            temp = parseInt(fs.readFileSync('/sys/class/thermal/thermal_zone0/temp'));
            temp /= 1000;
        }
        
        const uptime  = os.uptime();
        const seconds = uptime % 60;
        const minutes = ((uptime - seconds) / 60) % 60;
        const hours   = ((uptime - seconds - (minutes * 60)) / 3600) % 24;
        const days    = (uptime - (uptime % 86400)) / 86400

        res.json({
            memory: {
                free: os.freemem(),
                used: os.totalmem() - os.freemem(),
                total: os.totalmem()
            },
            cpu: {
                load: os.loadavg()[0],
                temperature: temp
            },
            uptime: {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        });
    });
}