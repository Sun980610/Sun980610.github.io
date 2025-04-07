---
title: "01. 사용자 추가"
layout: single
sidebar:
  nav: "custom-sidebar"
permalink: /mi/server/user/useradd/
categories:
  - server
  - user
---

## 사용자를 분리/추가 하는 이유

  - 보안성 확보
      - 각 사용자는 권한 범위 내에서만 시스템에 접근 가능
      - 시스템 파일이나 다른 사용자 데이터에 무단으로 접근하는 것을 방지
      - `root` 제한 등으로 권한 오용 사고 예방
  - 시스템 점유 통제
      - 사용자마다 디스크 사용량, 프로세스 개수, 네트워크 사용량 등 분리해 관리 가능
  - 로그 및 audit 기능
      - 로그인, 명령어 실행, 파일 접근 등 이력을 사용자 기준으로 기록해 문제 발생시 추적 가능
  

## useradd vs adduser

  - 리눅스 환경에서 사용자를 추가하는 명령어
  - `adduser`는 `useradd`를 wrapping한 Perl 스크립트 형태


## useradd 예시
```bash
sudo useradd -m -s /bin/bash newuser
sudo passwd newuser
```
- `-m`: 홈 디렉토리 생성
- `-s`: 기본 쉘 지정
- `useradd`를 사용할 때 홈 디렉토리를 명시하지 않으면 `/home/username`이 생성되지 않음


## adduser 예시
```bash
sudo adduser newuser
```
- 명령어 실행 시 홈 디렉토리, UID, GID, 쉘 등을 순차적으로 설정 가능
- `adduser` 사용시 `/home/username` 자동 생성 가능


## 결론 -> adduser 추천



### 출처

