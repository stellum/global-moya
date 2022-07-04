# cityfalconGlobalMoya

MGS / TEAM 6 with Sysmetic

## Team Collaborator

- 지영배: [@youngcodej22](https://github.com/youngcodej22)
- 박철연: [@oaat9309](https://github.com/oaat9309)
- 오영재: [@sacultang](https://github.com/sacultang)
- 노효정: [@stellum](https://github.com/stellum)
- 차유나: [@sarasata3131](https://github.com/sarasata3131)
- 조성일: [@Seong1-Jo](https://github.com/Seong1-Jo)

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

### API

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

### Convention

1. Issue/PR template에 맞춰서 작성
2. Commit message를 convention에 맞게 작성
3. ErrorReport 작성

#### ISSUE Menu

- New Issue: issue 생성
- Assignees: 작업 책임자
- labels: issue에 관련된 label을 설정하여 팀원들이 알아 보기 편하게 한다.
- milestone: 프로젝트의 전반적인 진행을 지정 및 진행율을 확인 가능하다.
- Projects: 현재 프로젝트의 전체적인 흐름을 파악, 단계별로 진행 상황을 설정.

#### Config

프로젝트를 시작하기 이전에 Terminal에서 자신의 Git configuration(환경설정)이 제대로 되어 있는지 확인하자.

1. config list

- `git config --list`

2. config list editor 형태로 보기

- `git config --global -e`

3. **중요** autocrlf

- 운영체제(OS) 마다 editor에서 새로운 줄바꿈을 할 때 들어가는 문자열이 다르다. Windows는 carriage-return(`\r`)과 line feed(`\n`) 형태 Mac에서는 line feed(`\n`)만 삽입이 된다. **Git사용 시에** 팀원 마다 다른 OS라면 문제가 된다. 그래서 `autocrlf`를 설정하게 되면 각 OS에서 `\r`를 삭제하고 처리가 되기 때문에 git 사용 시 문제를 해결 할 수 있다.
  - windows: `git config --global core.autocrlf true`
  - mac: `git config --global core.autocrlf input`

#### Commit Convention (prefix)

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

#### Label

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

#### PR 시간 협의 규칙

- 시간: 오후 1시
- pull 받기 전에 issue 작성
