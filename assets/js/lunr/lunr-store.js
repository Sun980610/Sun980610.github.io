var store = [{
        "title": "Bio-informatics Background",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/informatics/background/",
        "teaser": null
      },{
        "title": "Microbiome Informatical Process",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/informatics/microbiome/",
        "teaser": null
      },{
        "title": "Multiomics Informatical Process",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/informatics/multiomics/",
        "teaser": null
      },{
        "title": "Server Setup",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/server/setup/",
        "teaser": null
      },{
        "title": "외부에서 서버 접근 불가",
        "excerpt":"다른 컴퓨터에서 서버에 접속(RStudio Server, SSH 등)할 수 없는 경우, 네트워크 설정이나 서비스 상태, 포트 개방 여부 등을 확인해야 합니다. 원인 SSH 서비스가 실행되고 있지 않음 포트 설정이 올바르지 않거나 변경됨 방화벽 설정에 의해 포트가 차단됨 교내 또는 외부망 포트 개방 기한이 만료됨 서버 IP 또는 도메인 변경 점검 방법...","categories": ["server","troubleshooting"],
        "tags": [],
        "url": "/mi/server/troubleshooting/SSH-error/",
        "teaser": null
      },{
        "title": "본체 부팅 오류",
        "excerpt":"서버 전원을 켰을 때 운영체제가 정상적으로 부팅되지 않거나, 부팅 도중 멈추는 경우가 발생할 수 있습니다. 원인 커널 업데이트 후 충돌 발생 부팅 로더(GRUB) 설정 오류 파일 시스템 손상 하드웨어 문제 (디스크, 메모리 등) 바이러스 또는 악성 코드 감염 증상 유형 GRUB 화면에서 멈춤 또는 부팅 항목 없음 “kernel panic” 메시지...","categories": ["server","troubleshooting"],
        "tags": [],
        "url": "/mi/server/troubleshooting/booting-error/",
        "teaser": null
      },{
        "title": "명령어 작동 문제",
        "excerpt":"서버 내에서 평소 사용하던 명령어가 갑자기 작동하지 않거나, 오류 메시지와 함께 종료되는 경우, 환경 설정 또는 패키지 문제일 가능성이 높습니다. 원인 conda 환경 또는 시스템 패키지 업데이트 누락 명령어 자체의 지원 중단 또는 변경 패키지 손상 또는 누락 버전 간 충돌 (예: Python, R, 라이브러리 간) PATH 환경 변수에 해당...","categories": ["server","troubleshooting"],
        "tags": [],
        "url": "/mi/server/troubleshooting/command-error/",
        "teaser": null
      },{
        "title": "Server Troubleshooting",
        "excerpt":"                외부에서 서버 접근 불가                    본체 부팅 오류                    명령어 작동 문제                    네트워크 오류                    파일 접근 권한 문제                    프로세스 중단 문제          ","categories": [],
        "tags": [],
        "url": "/mi/server/troubleshooting/",
        "teaser": null
      },{
        "title": "네트워크 오류",
        "excerpt":"서버 본체에서 외부 네트워크로의 접속이 불가능한 경우, 하드웨어 연결 상태 또는 네트워크 설정에 문제가 있을 수 있습니다. 원인 랜선 물리적 연결 해제 또는 손상 DHCP 설정 오류 또는 IP 충돌 DNS 서버 설정 오류 기본 게이트웨이 누락 방화벽 또는 보안 정책에 의한 차단 점검 방법 물리적 연결 상태 확인 랜선이...","categories": ["server","troubleshooting"],
        "tags": [],
        "url": "/mi/server/troubleshooting/network_error/",
        "teaser": null
      },{
        "title": "파일 접근 권한 문제",
        "excerpt":"서버 사용 중 특정 파일이나 폴더에 접근할 수 없는 경우, 대부분 파일 권한 설정이 원인입니다. 원인 사용자가 해당 파일에 대한 읽기, 쓰기, 실행 권한을 가지고 있지 않음 그룹 설정이 잘못되어 있음 루트 계정 소유 파일을 일반 사용자가 접근하려는 경우 확인 방법 ls -l [파일명] rwx 권한 표시와 함께 소유자, 그룹...","categories": ["server","troubleshooting"],
        "tags": [],
        "url": "/mi/server/troubleshooting/permission/",
        "teaser": null
      },{
        "title": "프로세스 중단 문제",
        "excerpt":"서버 사용 중 프로세스가 응답하지 않거나 작업이 멈춘 경우, 대개 시스템 자원(CPU 또는 메모리)의 과부하가 주요 원인입니다 원인 CPU 과부하 특정 프로세스 또는 다수의 병렬 프로세스가 CPU 코어를 과도하게 점유하면 전체 서버의 응답 속도가 느려지거나 정지될 수 있습니다. 메모리 부족 메모리 사용량이 시스템 전체 용량을 초과하는 경우, 프로세스가 swap 영역으로...","categories": ["server","troubleshooting"],
        "tags": [],
        "url": "/mi/server/troubleshooting/process_stop/",
        "teaser": null
      },{
        "title": "Server User Management",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/server/user/",
        "teaser": null
      },{
        "title": "Statistics Background",
        "excerpt":"                외부에서 서버 접근 불가                    본체 부팅 오류                    명령어 작동 문제                    네트워크 오류                    파일 접근 권한 문제                    프로세스 중단 문제          ","categories": [],
        "tags": [],
        "url": "/mi/statistics/background/",
        "teaser": null
      },{
        "title": "Statistics Basic R",
        "excerpt":"                외부에서 서버 접근 불가                    본체 부팅 오류                    명령어 작동 문제                    네트워크 오류                    파일 접근 권한 문제                    프로세스 중단 문제          ","categories": [],
        "tags": [],
        "url": "/mi/statistics/basicR/",
        "teaser": null
      },{
        "title": "Statistics etc",
        "excerpt":"                외부에서 서버 접근 불가                    본체 부팅 오류                    명령어 작동 문제                    네트워크 오류                    파일 접근 권한 문제                    프로세스 중단 문제          ","categories": [],
        "tags": [],
        "url": "/mi/statistics/etc/",
        "teaser": null
      },{
        "title": "Statistics Metabolites R",
        "excerpt":"                외부에서 서버 접근 불가                    본체 부팅 오류                    명령어 작동 문제                    네트워크 오류                    파일 접근 권한 문제                    프로세스 중단 문제          ","categories": [],
        "tags": [],
        "url": "/mi/statistics/metabolitesR/",
        "teaser": null
      },{
        "title": "Statistics Microbiome R",
        "excerpt":"                외부에서 서버 접근 불가                    본체 부팅 오류                    명령어 작동 문제                    네트워크 오류                    파일 접근 권한 문제                    프로세스 중단 문제          ","categories": [],
        "tags": [],
        "url": "/mi/statistics/microbiome/",
        "teaser": null
      },]
