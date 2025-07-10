var store = [{
        "title": "Bio-informatics Background",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/informatics/background/",
        "teaser": null
      },{
        "title": "Bio-informatics Microbiome Analysis",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/informatics/microbiome/",
        "teaser": null
      },{
        "title": "Bio-informatics Multi-omics Integration",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/informatics/multiomics/",
        "teaser": null
      },{
        "title": "01. Ubuntu 설치",
        "excerpt":"#Ubuntu 개요 Kernel이란? 흔히 접하는 Windows, IOS 등에 해당 공식적인 정의는 “컴퓨터 운영체제에서 핵심이 되는 컴퓨터 프로그램” Linux UNIX 기반 오픈소스 운영체제 커널 다양한 distribution을 통해 서버, 데스크탑, 임베디드 시스템 등에서 널리 사용 안정성, 유연성, 보안성이 뛰어나고 커맨드라인 기반의 운영 환경을 중심 활용이 특징 상세 특징 커널 중심 구조: 하드웨어와...","categories": ["server","setup"],
        "tags": [],
        "url": "/mi/server/setup/Ubuntu/",
        "teaser": null
      },{
        "title": "02. Conda 설치",
        "excerpt":"Conda 소프트웨어 패키지와 환경을 효율적으로 관리할 수 있도록 도와주는 오픈소스 툴 많은 분석 툴이 서로 다른 의존성을 요구하는 경우가 많기 때문에 독립적인 가상 환경을 생성할 수 있는 Conda가 분석 재현성과 환경 격리를 위한 필수 도구 Conda 사용 예시 QIIME2 분석 환경 구성 (특정 Python 버전 및 패키지 종속성) HUMAnN, MetaPhlAn...","categories": ["server","setup"],
        "tags": [],
        "url": "/mi/server/setup/conda_installation/",
        "teaser": null
      },{
        "title": "03. 포트 설정 방법",
        "excerpt":"Port 네트워크 통신에서 특정 서비스를 식별하기 위한 논리적 번호 하나의 IP 주소(서버)가 여러 네트워크 서비스를 동시에 제공할 수 있도록 해주며, 각 서비스는 고유한 포트 번호를 통해 식별 서버에서 여러 서비스가 실행 중일 때 동일 포트 사용시 충돌 발생 가능 기본 설정 포트들의 경우 무차별적인 외부 침입 대상으로 특히 SSH 22번은...","categories": ["server","setup"],
        "tags": [],
        "url": "/mi/server/setup/port_setting/",
        "teaser": null
      },{
        "title": "04. SSH 설치",
        "excerpt":"SSH (Secure Shell) 서버에 원격으로 안전하게 접속할 수 있게 해주는 프로토콜 터미널 환경에서 다른 컴퓨터로 접속하여 명령어를 실행할 수 있음 설치 방법 Ubuntu는 기본적으로 SSH 클라이언트가 설치되어 있으며, 서버로 접근받기 위해서는 ‘openssh-server` 패키지가 필요 sudo apt update sudo apt install openssh-server 설치 확인 systemctl status ssh 상태가 active (running)이면 SSH...","categories": ["server","setup"],
        "tags": [],
        "url": "/mi/server/setup/SSH_installation/",
        "teaser": null
      },{
        "title": "05. 계정 생성부터 제한까지",
        "excerpt":"계정 생성 및 자원 제한 + 디렉토리 보호 전체 절차 1. 계정 생성 및 권한 제한 sudo adduser new_user 새 사용자 new_user 계정을 생성합니다. 패스워드 입력 시 0000 등을 설정할 수 있습니다. sudo deluser new_user sudo new_user 계정이 관리자(sudoers) 권한을 갖고 있지 않도록 제거합니다. 2. CPU 사용 제한 설정 (systemd...","categories": ["server","setup"],
        "tags": [],
        "url": "/mi/server/setup/Ubuntu/",
        "teaser": null
      },{
        "title": "Server Setup",
        "excerpt":"                01. Ubuntu 설치                    02. Conda 설치                    03. 포트 설정 방법                    04. SSH 설치                    05. 계정 생성부터 제한까지          ","categories": [],
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
        "excerpt":"                네트워크 오류                    명령어 작동 문제                    본체 부팅 오류                    외부에서 서버 접근 불가                    파일 접근 권한 문제                    프로세스 중단 문제          ","categories": [],
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
        "title": "01. 사용자 추가",
        "excerpt":"사용자를 분리/추가 하는 이유 보안성 확보 각 사용자는 권한 범위 내에서만 시스템에 접근 가능 시스템 파일이나 다른 사용자 데이터에 무단으로 접근하는 것을 방지 root 제한 등으로 권한 오용 사고 예방 시스템 점유 통제 사용자마다 디스크 사용량, 프로세스 개수, 네트워크 사용량 등 분리해 관리 가능 로그 및 audit 기능 로그인, 명령어...","categories": ["server","user"],
        "tags": [],
        "url": "/mi/server/user/useradd/",
        "teaser": null
      },{
        "title": "02. User 설정 변경",
        "excerpt":"usermod와 userdel 사용자 계정을 수정하거나 삭제할 때 사용하는 명령어 useradd나 adduser로 사용자를 생성한 이후 필요한 설정을 변경하거나 계정을 정리하는 데 활용 usermod: 기존 사용자 계정의 속성(셸, 그룹, 홈 디렉토리 등)을 변경할 때 사용 userdel: 특정 사용자 계정을 시스템에서 완전히 삭제할 때 사용 usermod 사용자 기본 셸을 /bin/zsh로 변경 sudo usermod...","categories": ["server","user"],
        "tags": [],
        "url": "/mi/server/user/usermod_userdel/",
        "teaser": null
      },{
        "title": "03. User Group 설정 및 변경",
        "excerpt":"Group 시스템 보안 유지 및 작업 환경 분리를 위한 최소 단위 개별 사용자에게 그룹을 부여해 특정 디렉터리/파일 접근, 소프트웨어 실행 권한 등을 그룹 단위로 제어 개별 그룹 권한 설정 그룹 리스트 확인 cut -d: -f1 /etc/group 현재 유저student의 그룹 확인 groups student #또는 id student 그룹 리스트에 researcher 추가 sudo...","categories": ["server","user"],
        "tags": [],
        "url": "/mi/server/user/user_group/",
        "teaser": null
      },{
        "title": "04. 파일 접속 권한 설정",
        "excerpt":"chmod 파일이나 디렉토리의 권한을 설정하거나 변경할 때 사용하는 명령어 리눅스 시스템에서 각 사용자(user), 그룹(group), 기타(other)에게 읽기(read), 쓰기(write), 실행(execute) 권한을 부여하거나 제한 기본적인 사용 방식은 기호 모드(문자 방식)와 숫자 모드(옥텟 방식)으로 나뉨 chmod 사용 기호 모드로 실행 권한 추가 (+x) chmod +x script.sh 숫자 모드로 권한 일괄 설정 (744: 소유자 읽기/쓰기/실행,...","categories": ["server","user"],
        "tags": [],
        "url": "/mi/server/user/chmod_permission/",
        "teaser": null
      },{
        "title": "Server User Management",
        "excerpt":"                01. 사용자 추가                    02. User 설정 변경                    03. User Group 설정 및 변경                    04. 파일 접속 권한 설정          ","categories": [],
        "tags": [],
        "url": "/mi/server/user/",
        "teaser": null
      },{
        "title": "Statistical Background",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/statistics/background/",
        "teaser": null
      },{
        "title": "Statistics Basic R",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/statistics/basicR/",
        "teaser": null
      },{
        "title": "Statistics etc",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/statistics/etc/",
        "teaser": null
      },{
        "title": "Statistics Metabolites R",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/statistics/metabolitesR/",
        "teaser": null
      },{
        "title": "Statistics Microbiome R",
        "excerpt":"      ","categories": [],
        "tags": [],
        "url": "/mi/statistics/microbiomeR/",
        "teaser": null
      },,{
    "title": "About",
    "excerpt":"이 블로그는 마이크로바이옴 분석을 중심으로 운영됩니다.  ","url": "/about/"
  },{
    "title": "All Categories",
    "excerpt":" ","url": "/categories/"
  },{
    "title": "Category",
    "excerpt":" Server Configuration           💻Server Setup💻        🙋‍♂️User Management🙋‍♂️        🤬Troubleshooting🤬      Bio-informatics           📖Background📖        🩺Microbiome Analysis🩺        🔗Multi-omics Integration🔗      Statistical Analysis           📖Background📖        📕Basic R📕        📘Microbiome R📘        📙Metabolites R📙        📚etc📚      SUN           ✈️Travel✈️      ","url": "/category_list/"
  },{
    "title": "travel",
    "excerpt":"travel   my own page  ","url": "/SUN/travel/"
  },{
    "title": "SUN 글 모음",
    "excerpt":" ","url": "/SUN/"
  },{
    "title": "SUN_mucosal_immunology",
    "excerpt":"SUN PARK   Mucosal Immunology  ","url": "/"
  },{
    "title": "Tags",
    "excerpt":"","url": "/tags/"
  }]
