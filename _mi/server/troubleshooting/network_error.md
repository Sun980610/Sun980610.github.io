---
title: "네트워크 오류"
layout: single
sidebar:
  nav: "category-nav"
categories:
  - server
  - troubleshooting
---


서버 본체에서 외부 네트워크로의 접속이 불가능한 경우, 하드웨어 연결 상태 또는 네트워크 설정에 문제가 있을 수 있습니다.

## 원인

- 랜선 물리적 연결 해제 또는 손상
- DHCP 설정 오류 또는 IP 충돌
- DNS 서버 설정 오류
- 기본 게이트웨이 누락
- 방화벽 또는 보안 정책에 의한 차단

## 점검 방법

1. 물리적 연결 상태 확인
- 랜선이 서버에 제대로 연결되어 있는지 확인
- 허브 또는 스위치의 전원 및 동작 상태도 함께 점검

2. IP 주소 확인

```bash
ip a
```

- `inet` 항목 아래에 유효한 IP가 존재하는지 확인
- 존재하지 않거나 `169.*.*.*` 형태의 IP일 경우 DHCP 실패를 의미

3. 인터넷 연결 여부 확인

```bash
ping 8.8.8.8
```

- 응답이 없다면 외부망과의 연결이 끊어진 상태

4. DNS 서버 동작 확인

```bash
ping google.com
```

- IP는 통과되는데 도메인만 실패하는 경우 `/etc/resolv.conf`의 DNS 설정을 확인

5. 기본 게이트웨이 확인

```bash
ip route
```

- `default via` 항목이 없다면 인터넷 라우팅이 설정되지 않은 상태

## 해결 방법

1. 서버컴퓨터 설정 직접 변경

2. DNS 서버 직접 지정

```bash
sudo vim /etc/resolv.conf
```

- 아래 내용을 추가:

```
nameserver 8.8.8.8
nameserver 1.1.1.1
```

3. 방화벽 확인

```bash
sudo ufw status
```

- 외부 접속을 차단하는 규칙이 존재하는지 확인

## 주의 사항
