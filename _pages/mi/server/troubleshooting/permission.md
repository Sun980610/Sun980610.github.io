---
title: "파일 접근 권한 문제"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/server/troubleshooting/
categories:
  - server-troubleshooting
---


서버 사용 중 특정 파일이나 폴더에 접근할 수 없는 경우, 대부분 파일 권한 설정이 원인입니다.

## 원인

- 사용자가 해당 파일에 대한 읽기, 쓰기, 실행 권한을 가지고 있지 않음
- 그룹 설정이 잘못되어 있음
- 루트 계정 소유 파일을 일반 사용자가 접근하려는 경우

## 확인 방법

```bash
ls -l [파일명]
```

- `rwx` 권한 표시와 함께 소유자, 그룹 정보를 확인할 수 있습니다.

## 해결 방법

1. **권한 변경**

```bash
chmod 770 [파일명]
```

- 파일 소유자가 `mi` 그룹 사용자들에게 읽기/쓰기/실행 권한을 부여

2. **소유자 변경 (root 계정에서 실행)**

```bash
sudo chown 사용자:mi [파일명]
```

- 파일 소유자를 해당 사용자로 변경하고, 그룹을 `mi`로 설정

## 주의

- `chmod 777` 등 과도하게 넓은 권한 설정은 보안상 위험할 수 있습니다.
