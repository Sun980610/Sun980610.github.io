---
title: "외부에서 서버 접근 불가"
layout: single
sidebar:
  nav: "category-nav"
  contents: |
    {% include custom-mi-sidebar.html %}
categories:
  - server
  - troubleshooting
---


다른 컴퓨터에서 서버에 접속(RStudio Server, SSH 등)할 수 없는 경우, 네트워크 설정이나 서비스 상태, 포트 개방 여부 등을 확인해야 합니다.

## 원인

- SSH 서비스가 실행되고 있지 않음
- 포트 설정이 올바르지 않거나 변경됨
- 방화벽 설정에 의해 포트가 차단됨
- 교내 또는 외부망 포트 개방 기한이 만료됨
- 서버 IP 또는 도메인 변경

## 점검 방법

1. SSH 서비스 상태 확인

```bash
sudo systemctl status ssh
```

- `active (running)` 상태인지 확인합니다.
- 비활성화되어 있다면 다음 명령어로 재시작합니다:

```bash
sudo systemctl restart ssh
```

2. SSH 포트 설정 확인

```bash
sudo vim /etc/ssh/sshd_config
```

- `Port` 항목이 정상적으로 설정되어 있는지 확인합니다.
- 포트 번호가 [mi_port1] 값이 아닌 경우 외부 접속 시 해당 포트를 지정해야 합니다.

3. 방화벽 상태 확인

```bash
sudo ufw status
```

- SSH 포트 ([mi_port1]) 또는 RStudio 포트([mi_port2])가 `ALLOW` 상태인지 확인합니다.
- 차단되어 있는 경우 다음 명령어로 허용합니다:

```bash
sudo ufw allow [mi_port1]/tcp
sudo ufw allow [mi_port2]/tcp
```

4. 서버 주소 확인

- 현재 서버의 IP 주소를 확인합니다:

```bash
ip a
```

- 공지된 아이피와 다를시 변경이 필요합니다.

5. 포트 개방 기한 확인

- 교내 네트워크 사용 시, 전산원에 요청한 포트 개방 기간이 만료되었을 수 있습니다.
- 개방 기한을 확인하고 필요한 경우 연장 요청을 합니다.

## 접속 예시

1. SSH 접속

```bash
ssh -p [mi_port1] 사용자명@서버주소
```

2. RStudio 접속

- 브라우저에서 다음 주소로 접속

```
http://서버주소:[mi_port2]
```

## 주의 사항

- 포트가 열려 있더라도 외부 방화벽이나 네트워크 정책에 따라 접근이 제한될 수 있습니다.
