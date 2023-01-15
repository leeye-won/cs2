# cs2
네트워크
---------
### osi의 7 계층 개념
 
- OSI(Opem Systems Interconnection) : 개방형 시스템 상호 연결을 위한 기초 참조 모델
- 국제 표준화 기구(ISO)에서 만든 네트워크 통신 7단계 과정
- 실제 인터넷에서 사용되는 TCP/IP 는 OSI 참조 모델을기반으로 상업적이고 실무적으로 이용될 수 있도록 단순화한 것

![image](https://user-images.githubusercontent.com/122252060/212562417-7a331fcc-5f61-47dc-b0ee-8fedccbfc7b4.png)
    
    
### 탄생 배경
- 초기 여러 정보 통신업체 장비들은 자신의 업체 장비들끼리만 연결이 되어 호환이 없었기에
- 모든 시스템의 상호 연결에 있어 문제없도록 표준을 정한 것
- 표준(호환성)과 학습도구에 의미로 제작
  
  
### 작동원리 
+ 1.osi 7 계층은 응용,표현, 세션, 전송, 네트워크, 데이터링크, 물리계층으로 나뉨
+ 2.전송 시 7계층에서 1계층응로 각각의 층마다 인식할 수 있어야 하는 헤더를 붙음 = 캡슐화
+ 3.수신 시 1계층에서 7계층으로 헤더를 떼어냄(디캡슐화)
+ 4.출발지에서 데이터가 전송될 때 헤더가 추가되는데 2계층에서만 오류제어를 위해 꼬리부분에 추가
+ 5.물리 계층에서 1,0의 신호가 되어 전송매체(동축케이블, 광섬유 등)을 통해 전송


## 작동원리

### 네트워크 작동원리

- osi 7 계층은 응용,표현, 세션, 전송, 네트워크, 데이터링크, 물리계층으로 나뉨
- 전송 시 7계층에서 1계층응로 각각의 층마다 인식할 수 있어야 하는 헤더를 붙음 = 캡슐화
- 수신 시 1계층에서 7계층으로 헤더를 떼어냄(디캡슐화)
- 출발지에서 데이터가 전송될 때 헤더가 추가되는데 2계층에서만 오류제어를 위해 꼬리부부넹 추가됌
- 물리 계층에서 1,0의 신호가 되어 전송매체(동축케이블, 광섬유 등)을 통해 전송 

### OSI 7 계층의 특징
- 상하구조를 가진다.   상위 계층의 프로토콜이 제댈로 작동하기 위해선 하위의 모든 게층에 문제가 없어야한다.
-문제 해결을 용이하게 도와줌   상하구조를 갖는 특징을 살려 각 계층의 동작을 확인 할 수 있는 프로그램을 사용하여 계층의 동작을 확인하여 문제를 해결하 ㄹ 수 있기 때문

### 제 1 계층,물리(Physical Layer)
* 물리 계층 = 주로 전기적, 기계적, 기능적인 특성을 이용해서 통신 케이블로 데이터를 전송
 - 특징
    + 단위는 BIT
    + BIT는 1과0으로 나타내어지는 ON/OFF 상태 의미
    + 대표적인 장비 = 통신 케이블,리퍼터,허브 등
    + __물리 계층에선 단지 데이터를 전달할 뿐 전송하려는(또는 받으려는)데이터가 무엇인지, 어떤 에러가 있는지 등에는 신경 쓰지 않는다.__ 
 
 ### 제 2 계층,데이터 링크(Data Link Layer)
- 송수신되는 정보의 오류와 흐름을 관리하여 안전한 정보의 전달을 수행할 수 있도록 도와주는 역할을 한다.
- MAC주소를 이용하여 통신한다. 

 - 데이터 링크의 특징
  + FRAME 단위
  + 대표 프로토콜 
   * 포인트 투 포인트(point-to-point) 프로토콜(HDLC,ADDCP) / 근거리 네트워크용(LCC,ALOHA)가 있다.
  + 오류가 발생하면 재전송하여 오류를 해결한다.
  + 네트워크 카드가 만들어질때부터 MAC주소가 정해져 있다. 

### 제 3 계층,네트워크 계층(Network)
 + 네트워크 계층?   
  +경로를 선택하고 주소를 정하고 경로에 따라 패킷을 전달해주는 
  
 
### 제 4 계층, 전송계층(transport layer)
 + 전송 계층 개념
   - 네트워크 양 끝단에서 통신을 수행하는 당사자 간의 단대단 연결을 제공하여 1:1로 연결된 호스트 사이의 전송을 의미한다.
   
 + 전송 계층의 특징
   - 단위는 segments 
   -대표 프로토콜 : TCP,UDP,ENC,SCTP,DDCP
   
   - TCP 프로토콜(Transmission Control Protocol)
     * 신뢰성 있음
     * 연결지향적 = 같은 전송계층의 UDP가 비연결성인것과 달리 TCP는 연결지향적 
     * 혼잡 제어, 흐름 제어, 연결 설정 등 각종 오류 제어
     
   - UDP 프로토콜(User Datagram Protocol)
     * 신뢰성 없음
     * 비연결성,순서화 되지 않은 서비스 제공
     * 추가 기능이 없어 오버헤드가 작고 지연시간이 짧다는 장점이 있다. 
     * 헤더의 고정 크기는 8바이트(TCP는 20바이트)만 사용함으로 헤더 처리에 많은 시간과 노력을 요하지 않음
### 제 5 계증, 세션(Session Layer)
  - 세션 개념
  
    + 테이터가 통신하기 위한 논리적인 연결을 말함
    + 상위 계층에 제공하는 서비스로 세션 연결 설정과 해제, 세션 메세지 전송을 통해 동작한다. 
    
  - 세션의 특징
  
    + 단위는 DATA
    + 대표 프로토콜: VARIOUS APL'S,SOCKETS
    + 두 응용 프로세시의 대화를 관리하기 위해 토큰이라는 특수 메세지를 사용한다.
   
   
### 제 6 계층, 표현(Presentation Layer)
  - 표현 계층의 개념   
  
    + 하나의 통일된 구문 형식으로 변환시키는 기능을 한다. 
    + 즉 네트워크의 데이터 번역자로서의 역할을 맡고 있다. 
    
  - 표현 계층의 특징   
  
    + 단위는 DATA
    + 대표 프로토콜 : SSL, FTP, IMAP, SSF   
    + 추상 문법과 전송 문법
    

      * 추상 문법 = 각 컴퓨터에서 사용하는 데이터 표현 규칙
      * 전송 문법 = 네트워크 전체에서 일관성을 가지는 새로운 표현 규칙
      
      
### 제 7 계층, 응용(Application Layer)
  - 응용 계층 개념
  
    + 최종 목적지로 응용 프로세스와 직접 관계하여 일반적인 응용 서비스를 수행한다.
    
  - 응용 계층의 특징
  
    + 단위 DATA
    + 대표 프로토콜 : HTTP,FTP , IRS, SSH, DNS
    
    + HTTP 프로토콜 = 웹 상에서 웹 서버 및 웹브라우저 상호 간의 데이터 전송을 위한 응용계층 프로토콜/처음에는, WWW 상의 하이퍼텍스트 형태의 문서를 전달하는데 주로 이용/현재에는, 이미지,비디오,음성 등 거의 모든 형식의 데이터 전송 가능
      * 요청 및 응답의 구조 = 동작 형태가 클라이언트/ 서버 모델로 동작
      * 메세지 교환 형태의 프로토콜 
      * 트랜잭션 중심의 비연결성 프로토콜
      * HTTP 표쥰
    
