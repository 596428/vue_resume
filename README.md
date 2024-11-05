[This project was created for portfolio purposes]

# Portfolio Projects on GitHub Pages

## 개요
Vue 프레임워크 실습과 이력서 프로젝트의 일환으로 **폴리텍 교육 기간 동안 작업한 프로젝트**들을 한곳에 모아 업로드한 포트폴리오 공간입니다. 이 프로젝트는 **Vue Material Kit 2**를 기반으로 컴포넌트 단위로 재작업되었으며, 조건에 따라 GitHub 리포지토리를 자동으로 갱신하여 추가적인 수정을 최소화하였습니다.

## 주요 기능
- **인적사항, 기술스택, 프로젝트 목록, 댓글 관리**: 개인 정보를 포함한 기술스택과 프로젝트 정보를 보여주며, Utterances를 사용해 댓글을 관리합니다.
- **프로젝트 자동화**: GitHub의 특정 조건을 만족하는 리포지토리를 자동으로 추가 및 정렬합니다.
  - README.md의 최상단에 `[This project was created for portfolio purposes]` 문구가 있는 public 리포지토리를 추가 대상으로 설정합니다.
  - 각 리포지토리의 `ProjectSummary.json` 데이터를 카드 형식으로 표시하며, `{리포지토리명}_demo.png` 이미지를 프로젝트의 demo 이미지로 사용합니다.
  - README.md 내용을 모달 창에서 확인할 수 있도록 처리하였습니다.
  - 최종 수정일(최종 push 기준)로 프로젝트 목록이 자동 정렬됩니다.

## 프로젝트 구조 및 기술 스택
- **프레임워크**: Vue.js
- **디자인**: Vue Material Kit 2
- **댓글 관리**: Utterances를 통한 GitHub 기반 댓글 관리
