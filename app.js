const express = require('express');
const config  = require('./config');
const fs      = require('fs');
const os      = require('os');

const app = express();

let isRPI = false;

if(os.platform() == 'linux') {
    if(fs.readFileSync('/proc/cpuinfo').includes('Raspberry Pi')) {
        isRPI = true;
    }
}

const mainRouter    = require('./routers/main')(app, config);
const sysinfoRouter = require('./routers/sysinfo')(app, fs, os, isRPI);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(config.port, () => {
    console.log(`nas-dashboard listening on port ${config.port}`);
});