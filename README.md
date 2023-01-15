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

         - __1.물리(Physical Layer)__ : 데이터를 전기적인 신호로 변환해서 주고받는 기능을 진행하는 공간. 장비로는 통신 케이블,허브가 존재한다.
         - __2.데이터 링크(Data Link Layer)__ : 물리계층으로 송/수신되는 정보 확인하고 오류없는 통신을 위해 여러 역할을 수행한다. MAC주소를 통해 통신함. 장빌로는 브릿지와 스위치가 존재한다. 
         - __3.네트워크(Network)__ : 데이터를 목적지까지 가장 안전하고 빠르게 전달하는 기능. 라우터를 통해 경로를 선택하여 IP주소를 지정하고 경로에 따라 패킷을 전달해준다. 장비로는 라우터가 존재한다.
         - __4.전송(Transport)__ : 두 호스트 시스템으로부터 발생하는 데이터의 흐름을 제공한다.
         - __5.세션(Session)__ : 통신 시스템 사용자 간의 연결을 유지 및 설정한다.
         - __6.표현(Presentation)__ : 세션 계층 간의 주고받는 인터페이스를 일관성 있게 제공한다. 
         - __7.응용(Application)__ : 사용자가 네트워크에 접근할 수 있도록 서비스를 제공한다    
      
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
- 물리 계층 = 주로 전기적, 기계적, 기능적인 특성을 이용해서 통신 케이블로 데이터를 전송
- 특징

 + 단위는 BIT
 + BIT는 1과0으로 나타내어지는 ON/OFF 상태 의미
 + 대표적인 장비 = 통신 케이블,리퍼터,허브 등
 + __물리 계층에선 단지 데이터를 전달할 뿐 전송하려는(또는 받으려는)데이터가 무엇인지, 어떤 에러가 있는지 등에는 신경 쓰지 않는다.__ 
 
###제 2 계층,데이터 링크(Data Link Layer)
-

