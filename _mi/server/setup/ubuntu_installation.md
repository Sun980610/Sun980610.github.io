---
title: "01. Ubuntu 설치"
layout: single
sidebar:
  nav: "custom-sidebar"
permalink: /mi/server/setup/Ubuntu/
categories:
  - server
  - setup
order: 1
---

## Linux

- UNIX 기반 오픈소스 운영체제 커널. 다양한 배포판(distribution)을 통해 서버, 데스크탑, 임베디드 시스템 등에서 널리 사용
- 안정성, 유연성, 보안성이 뛰어나고 커맨드라인 기반의 운영 환경을 중심 활용
- 상세 특징
  - 커널 중심 구조: 하드웨어와 직접적으로 소통하며, 안정성과 성능이 뛰어남
  - 오픈소스: 누구나 자유롭게 소스 코드 수정 및 배포 가능
  - 멀티유저 / 멀티태스킹 지원
  - 다양한 배포판 존재


## Ubuntu

- Debian GNU/Linux를 기반으로 한 대표적인 Linux 배포판 중 하나로, 사용자의 접근성과 편의성을 높이기 위해 개발
- 데스크탑 및 서버 환경 모두 지원하며, 장기 지원(LTS) 버전은 안정성이 검증되어 연구 환경에서 많이 활용
- 생물정보학에서 자주 사용되는 패키지 및 의존성 호환성이 우수하여 분석 환경 구축에 적합
- 상세 특징
  - APT 패키지 시스템: 소프트웨어 설치 및 관리 용이
  - 사용자 친화적 인터페이스: GUI, CLI 모두 활용 가능


## 분석을 위해 꼭 Linux를 설치해야하는가?

  - 생물정보학 도구들은 대부분 Linux 환경에서 실행되는 것을 전제로 함 --> Debian 계열 Ubuntu, Red Hat 계열(CentOS, Rocky Linux)이나 Arch 기반에서도 사용 가능
  - Linux 단일 설치 이외의 선택지
     - WSL2 기반 Ubuntu: Windows 사용자도 리눅스 환경을 병렬적으로 사용 가능
     - 컨테이너사용: Docker, Singularity 이용 
     - 클라우드 환경: 기업체 등에서 제공하는 이미지를 기반으로 분석 환경 구성 가능
  - Ubuntu 사용시 장점
     - 패키지 관리 용이: APT 기반의 `apt-get`, `dpkg` 등이 직관적이고 빠름  
     - 커뮤니티 규모: 오류 발생 시 해결 자료가 풍부함  
     - LTS 버전의 안정성: 5년 지원으로 서버 환경에 적합함  
     - 튜토리얼과 도구 호환성: 대부분의 바이오인포매틱스 공식 설치 가이드가 Ubuntu를 기준으로 설명됨


## 설치 과정  

   **(1) ISO 파일 다운로드**  
   - [https://ubuntu.com/download](https://ubuntu.com/download) 에서 LTS 버전 ISO 파일 다운로드  
   - 서버 용도: Ubuntu Server  
   - GUI 포함: Ubuntu Desktop  
   
   **(2) 부팅 USB 생성**  
   - `balenaEtcher`, `Rufus`, `UNetbootin` 등의 툴 사용  
   - ISO 파일을 USB에 기록하여 부팅 가능하도록 설정

   **(3) 부팅 및 설치**  
   - USB를 연결한 상태에서 BIOS 부팅 순서를 USB로 변경  
   - Ubuntu 설치 진행: 언어 선택 → 디스크 파티션 설정 → 사용자 계정 생성

   **(4) 설치 후 초기 설정**  
   - 필수 패키지 설치 (예: `build-essential`, `curl`, `git`, `vim`)  
   - SSH 설정 및 방화벽 설정 (서버용의 경우)  
   - `apt update && apt upgrade` 명령어로 최신 상태로 업데이트  
   - Conda, Docker, Git 등의 환경 구성



### 출처
  - Rufus: [https://rufus.ie/en/](https://rufus.ie/en/)
  - Ubuntu: [https://ubuntu.com/download](https://ubuntu.com/download)
  - Conda: [https://anaconda.org/anaconda/conda](https://anaconda.org/anaconda/conda)
