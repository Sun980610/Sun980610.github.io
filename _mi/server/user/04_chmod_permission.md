---
title: "04. 파일 접속 권한 설정"
layout: single
sidebar:
  nav: "custom-sidebar"
permalink: /mi/server/user/chmod_permission/
categories:
  - server
  - user
---

## chmod

- 파일이나 디렉토리의 권한을 설정하거나 변경할 때 사용하는 명령어
- 리눅스 시스템에서 각 사용자(user), 그룹(group), 기타(other)에게 읽기(read), 쓰기(write), 실행(execute) 권한을 부여하거나 제한
- 기본적인 사용 방식은 기호 모드(문자 방식)와 숫자 모드(옥텟 방식)으로 나뉨

## chmod 사용

1. 기호 모드로 실행 권한 추가 (`+x`)
```bash
chmod +x script.sh
```

2. 숫자 모드로 권한 일괄 설정 (744: 소유자 읽기/쓰기/실행, 그룹과 기타는 읽기만)
```bash
chmod 744 file.txt
```

3. 특정 사용자 유형에게만 권한 변경 (기호 모드)
```bash
chmod u+x file.sh     # 소유자에게 실행 권한 추가
chmod g-w file.txt    # 그룹의 쓰기 권한 제거
chmod o=r file.log    # 기타 사용자에게 읽기 권한만 부여
```

4. 디렉토리 및 그 하위 전체에 권한 일괄 적용
```bash
chmod -R 755 /path/to/dir
```

## 숫자 모드 설명

- 각 권한은 숫자로 표현됨 (r=4, w=2, x=1)
- 세 자리 숫자: 소유자 / 그룹 / 기타 순서
  - `7`: 4+2+1 (rwx)
  - `6`: 4+2   (rw-)
  - `5`: 4+1   (r-x)
  - `0`:       (---)
- 예: `chmod 755 file`  
  → 소유자: rwx / 그룹: r-x / 기타: r-x

## 확장 가능한 범위

- `chown`이나 `chgrp`와 함께 사용하여 파일의 소유자 및 그룹 변경까지 연계 가능
- `umask` 설정과 병행하여 기본 생성 파일의 권한 패턴 제어
- 접근 제어 목록(ACL)을 통해 더 세분화된 권한 설정도 가능

### 출처
