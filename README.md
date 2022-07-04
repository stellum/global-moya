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

### Main Skill

- Vite
- redux-toolkit
- styled-component

### libraries

- react
  - react-redux
- redux
  - redux-persist
  - redux-logger
- axios

## API

1. GET

- http://54.180.136.0:3002/master
- http://54.180.136.0:3002/search?
  - Header
    - Authorization / Bearer ${token}
  - timeFilter
  - mediaType
  - language
  - orderBy
  - keyType
  - paramValue
- http://54.180.136.0:3002/search/${main}/${sub}
  - main: category, sectors, startup
  - paramValue of main

2. POST

- http://54.180.136.0:3002/auth/register
- http://54.180.136.0:3002/auth/login
  - 성공시 token 발급

3. DELETE

- http://54.180.136.0:3002/auth/logout

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

- feat: 기능 개발 관련
  - ex) feat: ADD searchInput (새로운 기능 추가)
  - ex) feat: UPDATE searchInput ( searchInput에서 새로운 동작을 추가해서 update)
- fix: feat했던 기능에서 코드수정 / 오류 개선 / 버그 패치
  - ex) fix: ADD searchInput ( 기존 코드를 처음! 고칠 때 )
  - ex) fix: UPDATE searchInput ( 그 고친 코드를 다시 update할 때 )
  - ex) fix: UPDATE code formatting (코드 변경 없이 누락된 것을 추가)
  - ex) fix: UPDATE refactoring 변경한 코드요약 (코드 변경 없이 누락된 것을 추가)
- docs: 문서화 작업
- style: css style 작업
- test: test 관련 (테스트코드, 리펙토링 테스트 코드 추가)
- conf: 환경설정 관련, 빌드 업무 수정, 패키지 매니저, 폴더트리, 파일이름 변경
- build: 빌드 관련
- ci: Continuous Integration 관련

### Label

- 새로운 기능 추가 시 및 컴포넌트 변경은 모두 컴포넌트
  - component
- 기능 추가는 아니지만 component 분리 시
  - component
- 처음 feature하고 PR review 받고 코드 구현 더 진행 시
  - developing
- 자기가 생각한 코드 구현을 끝내고 새로 검토하면서 코드 수정할 때
  - refactoring
- CSS 코드 추가
  - style
- 기타
  - answer needed / in review 등 필요 하면 사용

### PR 시간 협의 규칙

- 시간: 오후 1시
- pull 받기 전에 issue 작성
