---
title: "03. User Group 설정 및 변경"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/server/user/user_group/
categories:
  - server
  - user
---


## Group

  - 시스템 보안 유지 및 작업 환경 분리를 위한 최소 단위
  - 개별 사용자에게 그룹을 부여해 특정 디렉터리/파일 접근, 소프트웨어 실행 권한 등을 그룹 단위로 제어
  

## 개별 그룹 권한 설정

  - 그룹 리스트 확인
  ```bash
   cut -d: -f1 /etc/group
   ```
  - 현재 유저`student`의 그룹 확인
  ```bash
   groups student
   #또는
   id student
   ```
  - 그룹 리스트에 `researcher` 추가
   ```bash
   sudo groupadd researcher
   ```
  - 기존 사용자 `student`를 `researcher` 그룹에 보조그룹으로 추가
   ```bash
   sudo usermod -aG researcher student
   ```
  - 사용자 `student`의 기본 그룹을 `newgroup`으로 변경
   ```bash
   sudo usermod -g newgroup student
   ```
  - 사용자 `student`의 `sudo` 권한 제거
   ```bash
   sudo deluser student sudo
   ```
