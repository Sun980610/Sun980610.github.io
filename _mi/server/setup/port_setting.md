---
title: "03. 포트 설정 방법"
layout: single
sidebar:
  nav: "custom-sidebar"
permalink: /mi/server/setup/port_setting/
categories:
  - server
  - setup
order: 3
---


## Port

  - 네트워크 통신에서 특정 서비스를 식별하기 위한 논리적 번호
  - 하나의 IP 주소(서버)가 여러 네트워크 서비스를 동시에 제공할 수 있도록 해주며, 각 서비스는 고유한 포트 번호를 통해 식별
  - 서버에서 여러 서비스가 실행 중일 때 동일 포트 사용시 충돌 발생 가능
  - 기본 설정 포트들의 경우 무차별적인 외부 침입 대상으로 특히 SSH 22번은 자동화 스캔 도구로 탐색 가능하므로 서버 공개시 변경 필수


## 가장 기본적으로 설정되어 있는 포트 정보들  

  - 리눅스 서버나 우분투 설치 시, 다음과 같은 포트가 기본적으로 사용

| 서비스        | 기본 포트 | 설명                           |
|---------------|-----------|--------------------------------|
| SSH           | 22        | 원격 접속용 서비스              |
| HTTP          | 80        | 일반 웹 서버                   |
| HTTPS         | 443       | 보안 웹 서버 (SSL/TLS)         |
| MySQL         | 3306      | 데이터베이스                    |



## SSH 포트 변경 방법

1. 설정 파일 열기
   ```bash
   sudo vim /etc/ssh/sshd_config
   ```

2. `Port` 항목 수정
  - 기존 22포트 주석처리 후 새 포트 입력
   ```bash
   #Port 22
   Port 2025
   ```

3. 설정 적용을 위해 SSH 재시작
   ```bash
   sudo systemctl restart ssh
   ```

4. 방화벽(UFW 등)에서 새 포트 허용  


## UFW 변경  

  - 포트 변경 이후 다음 명령어를 통해 새 포트를 허용

1. 현재 상태 확인
   ```bash
   sudo ufw status
   ```

2. 기존 SSH 포트 허용 삭제 
   ```bash
   sudo ufw delete allow 22
   ```

3. 새 포트 허용
   ```bash
   sudo ufw allow 2025/tcp
   ```

4. UFW 적용
   ```bash
   sudo ufw reload
   ```

  - UFW가 비활성화 상태라면 활성화도 필요
   ```bash
   sudo ufw enable
   ```
  - SSH 이외의 외부 접속 포트를 추가 설정하고자 한다면 allow 추가 시행



### 출처
