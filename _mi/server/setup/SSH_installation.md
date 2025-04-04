---
title: "04. SSH 설치"
layout: single
sidebar:
  nav: "custom-sidebar"
permalink: /mi/server/setup/SSH_installation/
categories:
  - server
  - setup
---


## SSH (Secure Shell)
  - 서버에 원격으로 안전하게 접속할 수 있게 해주는 프로토콜
  - 터미널 환경에서 다른 컴퓨터로 접속하여 명령어를 실행할 수 있음


## 설치 방법  

  - Ubuntu는 기본적으로 SSH 클라이언트가 설치되어 있으며, 서버로 접근받기 위해서는 'openssh-server` 패키지가 필요
   ```bash
   sudo apt update
   sudo apt install openssh-server
   ```
 - 설치 확인
   ```bash
   systemctl status ssh
   ```
  - 상태가 `active (running)`이면 SSH 서버가 정상 작동 중
  - 비활성화된 경우 다음 명령으로 시작
   ```bash
   sudo systemctl start ssh
   ```


## SSH 기본 포트 개방  

이전 포스트에서 포트 2025로 변경. 설정을 이미 변경했을 시 해당 부분은 넘어감

   ```bash
   sudo ufw delete allow 22
   sudo ufw allow 2025/tcp
   sudo ufw reload
   ```


## SSH 접속 방법  

  - 클라이언트 컴퓨터에서 아래와 같이 입력하여 서버에 접속 가능

   ```bash
   ssh 사용자이름@서버_IP -p 2025
   ```

  - 처음 접속 시에는 "Are you sure you want to continue connecting?" 메시지가 출력. Y 입력


## 접속 확인 및 서비스 자동 시작 설정  

  - 시스템 부팅 시 자동으로 시작되도록 설정

   ```bash
   sudo systemctl enable ssh
   ```


## 접속 어플리케이션

  - Termius, PuTTY, MobaXterm 추천


### 출처  
