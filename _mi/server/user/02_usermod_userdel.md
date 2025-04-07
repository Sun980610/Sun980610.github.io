---
title: "02. User 설정 변경"
layout: single
sidebar:
  nav: "custom-sidebar"
permalink: /mi/server/user/usermod_userdel/
categories:
  - server
  - user
---

## usermod와 userdel

`usermod`와 `userdel`은 리눅스 시스템에서 사용자 계정을 수정하거나 삭제할 때 사용하는 명령어
`useradd`나 `adduser`로 사용자를 생성한 이후 필요한 설정을 변경하거나 계정을 정리하는 데 활용

- `usermod`: 기존 사용자 계정의 속성(셸, 그룹, 홈 디렉토리 등)을 변경할 때 사용
- `userdel`: 특정 사용자 계정을 시스템에서 완전히 삭제할 때 사용


## usermod

1. 사용자 기본 셸을 /bin/zsh로 변경
```bash
sudo usermod -s /bin/zsh username
```
2. 사용자 이름 변경
```bash
sudo usermod -l newname oldname
```
3. 사용자 홈 디렉토리 이동 및 내용도 함께 이동
```bash
sudo usermod -d /home/newdir -m username
```
4. 그룹 추가
```bash
sudo usermod -aG docker username
```

## userdel
  - 사용자 계정만 삭제 (홈 디렉토리는 유지)
```bash
sudo userdel username
```

  - 사용자 계정과 홈 디렉토리 모두 삭제
```bash
sudo userdel -r username
```


## 주의사항
- `usermod`로 사용자 이름을 변경하면 홈 디렉토리 이름은 자동으로 변경되지 않음. 수동으로 이동 필요
- `userdel -r`은 사용자의 홈 디렉토리, 메일 스풀 등을 영구적으로 삭제하므로 신중히 사용


### 출처
