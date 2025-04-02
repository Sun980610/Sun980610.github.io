---
title: "본체 부팅 오류"
layout: single
sidebar:
  nav: "category-nav"
permalink: _pages/mi/server/troubleshooting/
categories: server-troubleshooting
nav_order: 6
---


서버 전원을 켰을 때 운영체제가 정상적으로 부팅되지 않거나, 부팅 도중 멈추는 경우가 발생할 수 있습니다. 

## 원인

- 커널 업데이트 후 충돌 발생
- 부팅 로더(GRUB) 설정 오류
- 파일 시스템 손상
- 하드웨어 문제 (디스크, 메모리 등)
- 바이러스 또는 악성 코드 감염

## 증상 유형

- GRUB 화면에서 멈춤 또는 부팅 항목 없음
- "kernel panic" 메시지 출력
- 무한 로딩 상태
- 전원은 켜지나 운영체제가 시작되지 않음

## 조치 방법

### 1. GRUB 화면 진입

- 부팅 시 F2 또는 Shift 키 연타 → GRUB 메뉴로 진입
- "Advanced options" 선택 → 이전 커널 버전으로 부팅 시도

### 2. 커널 복구

- 이전 커널로 부팅이 성공하면, 문제가 된 커널 삭제:

```bash
uname -r  # 현재 실행 중인 커널 버전 확인
dpkg --list | grep linux-image
sudo apt-get remove linux-image-[문제 커널 버전]
sudo update-grub
```

### 3. 복구 모드 진입

- GRUB 메뉴에서 "(recovery mode)" 선택
- "root" 또는 "fsck" 모드로 진입하여 다음 명령 실행:

```bash
fsck -y /dev/sdX
```

- 부트 파티션이나 루트 파일 시스템 오류를 자동 복구

### 4. Live USB 사용

- 위 방식으로도 부팅이 불가능할 경우, Ubuntu Live USB로 부팅
- `/mnt` 등에 루트 디렉토리를 마운트하고 데이터 백업 수행
- 백업 후 시스템 재설치를 고려

```bash
sudo mount /dev/sdX1 /mnt
cp -r /mnt/home/사용자명 /media/usb/
```

## 예방 및 권장 조치

- 커널 또는 시스템 업데이트 전, 반드시 백업 수행
- `/boot`, `/home` 등 주요 파티션 분리 구성 권장
- 중요한 설정 파일은 별도 저장 (`/etc/fstab`, `/etc/netplan/*` 등)

## 참고

- 부팅 관련 로그는 `/var/log/boot.log`, `dmesg`, `/var/log/syslog` 등에 저장됩니다.
- EFI/BIOS 설정 변경이 영향을 줄 수 있으므로 주의하여 확인해야 합니다.
