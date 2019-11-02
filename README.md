# nas-dashboard
nas-dashboard는 NAS의 상태를 쉽게 확인할 수 있도록 도와주는 웹 앱입니다.

# 스크린샷
![macOS](https://user-images.githubusercontent.com/22251251/67620962-6b156f00-f836-11e9-8741-dc360a1ad0ff.png)
![Raspberry Pi](https://user-images.githubusercontent.com/22251251/67620982-81232f80-f836-11e9-8ec1-9861ac98dd1f.png)

## 사용법
`npm start` 또는 `yarn start`로 시작할 수 있습니다.

## 설정
config.json을 수정하여 설정을 변경할 수 있습니다.

예시
```
{
    "title": "TITLE HERE",
    "port": 80,
    "refreshInterval": 500,
    "serverList": [
        {
            "name": "SERVER NAME HERE",
            "port": 1234
        }
    ]
}
```

| Key             | 설명                                                    |
|:----------------|:--------------------------------------------------------|
| title           | 상단에 표시될 제목입니다.                               |
| port            | 요청을 받을 포트 번호입니다.                            |
| refreshInterval | Server Status 업데이트 주기입니다. 단위는 밀리초입니다. |
| serverList      | Server List에 표시될 서버 목록입니다.                   |

## 기타
- CPU 온도는 Raspberry Pi에서 구동할 경우에만 표시됩니다.
