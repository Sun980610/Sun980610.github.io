---
title: "02. Conda 설치"
layout: single
sidebar:
  nav: "custom-sidebar"
permalink: /mi/server/setup/conda_installation/
categories:
  - server
  - setup
---


## Conda
- 소프트웨어 패키지와 환경을 효율적으로 관리할 수 있도록 도와주는 오픈소스 툴
- 많은 분석 툴이 서로 다른 의존성을 요구하는 경우가 많기 때문에 독립적인 가상 환경을 생성할 수 있는 Conda가 분석 재현성과 환경 격리를 위한 필수 도구


## Conda 사용 예시
- QIIME2 분석 환경 구성 (특정 Python 버전 및 패키지 종속성)
- HUMAnN, MetaPhlAn 등의 Bioconda 패키지 설치
- 실습용 가상 환경을 만들어 도구 업데이트 전 테스트 수행


## Miniconda vs Anaconda**
- **Anaconda**는 과학 계산용 패키지가 모두 포함된 대용량 배포판
- **Miniconda**는 최소한의 Conda 환경만 포함된 경량 배포판 (추천)


## Miniconda 설치 방법 (Ubuntu 기준)

```bash
# 설치 경로 생성
mkdir -p ~/miniconda3

# Miniconda 설치 스크립트 다운로드
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh

# 실행 권한 부여
chmod +x Miniconda3-latest-Linux-x86_64.sh

# 설치 실행
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3

# 안내에 따라 설치 진행 후, shell 재시작 또는 아래 명령 실행
source ~/.bashrc

# 잔여 파일 삭제
rm ~/miniconda3/miniconda.sh
```


## Conda 기본 사용법

- 환경 생성
```bash
conda create -n test-env python=3.8
conda activate test-env
```
- 패키지 설치
```bash
conda install -c numpy pandas
```
- 환경 목록 확인 / 삭제
```bash
conda env list
conda remove -n test-env --all
```


## Conda 환경 점검 항목 (주기적으로 체크)

- Conda 자체 업데이트
```bash
conda update conda
```
- 패키지 업데이트
```bash
conda update --all
```
- 캐시 파일 정리
```bash
conda clean --all
```

### 출처
- Conda: [https://docs.conda.io](https://docs.conda.io)
- Miniconda: [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)
- Bioconda: [https://bioconda.github.io](https://bioconda.github.io)
