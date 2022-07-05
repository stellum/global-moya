# cityfalconGlobalMoya

MGS / TEAM 6 with Sysmetic

## Team Collaborator

#### Front-end

- 지영배: [@youngcodej22](https://github.com/youngcodej22)
- 박철연: [@oaat9309](https://github.com/oaat9309)
- 오영재: [@sacultang](https://github.com/sacultang)
- 노효정: [@stellum](https://github.com/stellum)
- 차유나: [@sarasata3131](https://github.com/sarasata3131)
- 조성일: [@Seong1-Jo](https://github.com/Seong1-Jo)

#### UX/UI

- 이양석
- 목문정
- 박세희

## Notion: 회의록 및 주요사항

- [6팀 핫식스](https://www.notion.so/6-61dcc51a7e5c42b9a02ff7066c53edaa)

## 사용 기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Front-end
#### Main Skill

- Vite
- redux-toolkit
- styled-component

#### libraries

- react
  - react-redux
- redux
  - redux-persist
  - redux-logger
- axios

### Back-end

- Python
- Flask (python framework)
- AWS 
- Docker 
- Mysql (DataBase)

## API

- ENDPOINT
  - http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002

### GET
1. /master
  - [ENDPOINT]/master/all
2. 대분류
  - [ENDPOINT]/master/lv-1
3. 대분류의 소분류
  - [ENDPOINT]/master/lv-2/{대분류 1개}
  - http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002/master/lv-2/index
4. /search?
  - [ENDPOINT]/search?
  - Header
    - Authorization / Bearer ${token}
  - timeFilter
    - m5, m15, h1, d1, w1, mth1
  - mediaType
    - mp, op, r, mp,op, mp,op,r
  - language
    - en, ko, ja, zh, da, el, et, fi, ga, hu, it, lt, no, pt, ro (상세 내용 추후 제공)
  - orderBy
    - latest, popular
  - keyType
    - [“index”, “macrotopic”, “fx”, “events”, “topics”, “commodities”, “tickers”]
  - paramValue
    - /master/all의 paramValue를 keyType에 맞게 binding하여 요청
5. /search/
  - [ENDPOINT]/search/{main}/{sub}
  - Header
    - Authorization / Bearer {token}
  - main: category, sectors, startup
  - paramValue of main

### POST
1. /auth/register
  - [ENDPOINT]/auth/register
  - Body(Form-data)
    - email: string
    - password: string
  - 성공시 {"mgs": "Registered Success"}

2. /auth/login
  - [ENDPOINT]/auth/login
  - Body(Form-data)
    - email: string
    - password: string
  - 성공시 {"access_token": 토큰}

### DELETE
1. /auth/logout
  - [ENDPOINT]/auth/logout
  - Header
    - Authorization: Bearer token
  - 성공시 {"mgs": "Access token revoked}

## Convention

1. Issue/PR template에 맞춰서 작성
2. Commit message를 convention에 맞게 작성
3. ErrorReport 작성

### ISSUE Menu

- New Issue: issue 생성
- Assignees: 작업 책임자
- labels: issue에 관련된 label을 설정하여 팀원들이 알아 보기 편하게 한다.
- milestone: 프로젝트의 전반적인 진행을 지정 및 진행율을 확인 가능하다.
- Projects: 현재 프로젝트의 전체적인 흐름을 파악, 단계별로 진행 상황을 설정.

### Commit Convention (prefix)

- prefix: 파일명
  - (줄바꿈 아래) 아래 코드 수정한 부분 설명
- feat: 기능 개발 관련
- fix: 오류 개선 / 버그 패치
- refactor: feat에 코드 수정
- docs: 문서화 작업
  - ex) docs: UPDATE README.md
- style: css style 작업
- test: test 관련 (테스트코드, 리펙토링 테스트 코드 추가)
- conf: 환경설정 관련, 빌드 업무 수정, 패키지 매니저, 폴더트리, 파일이름 변경
- build: 빌드 관련
- ci: Continuous Integration 관련

### Label (주요)

- 기능과 관련된 것은 모두 (add/update)
  - feature
  - deprecated (delete 시)
- 버그 수정
  - fix
- 자기가 생각한 코드 구현을 끝내고 새로 검토하면서 코드 수정할 때
  - refactoring
- CSS 코드 추가
  - style
- [Label 상세확인](https://github.com/Seoul-Sysmetic/cityfalconGlobalMoya/labels)

### PR 시간 협의 규칙

- 시간: 오후 1시
- pull 받기 전에 issue 작성
