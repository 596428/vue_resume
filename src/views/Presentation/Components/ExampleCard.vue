<script setup>
import { computed, ref, onMounted } from 'vue';
import axios from 'axios';
// import { marked } from 'marked';
import MarkdownIt from 'markdown-it';


// GitHub username을 상수로 정의
const GITHUB_USERNAME = '596428';

const props = defineProps({
  repo: {
    type: Object,
    required: true
  },
  image: {
    type: String,
    default: null
  }
});

const selectedRepo = ref(null);
const projectSummary = ref(null);
const readmeContent = ref('');
const showModal = ref(false);
const modalContent = ref('');
const isReadmeModal = ref(false); // README 모달과 이미지 모달을 구분하기 위한 변수

// 이미지가 있는지 여부를 확인하는 computed property
const hasImage = computed(() => {
  return props.image !== null && props.image !== ''; // 이미지가 null 또는 빈 문자열이 아닐 경우만 true
});

// Modal 관련
const openModal = (content, isReadme = false) => {
  modalContent.value = content;
  showModal.value = true;
  isReadmeModal.value = isReadme; // README 모달인지 여부 설정
  document.body.style.overflow = 'hidden'; // 모달이 열릴 때 배경 스크롤 금지
};

const closeModal = () => {
  showModal.value = false;
  modalContent.value = '';
  isReadmeModal.value = false; // 모달을 닫으면 초기화
  document.body.style.overflow = ''; // 모달이 닫히면 배경 스크롤 다시 허용
};

const md = new MarkdownIt();
// Markdown 변환 함수
const renderMarkdown = (markdownText) => {
  return md.render(markdownText);
};

// 데이터 가져오기
onMounted(async () => {
  try {
    // GITHUB_USERNAME과 repo.name을 사용해 올바른 URL로 요청
    const response = await axios.get(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${props.repo.name}/main/ProjectSummary.json`);
    projectSummary.value = response.data;

    const readmeResponse = await axios.get(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${props.repo.name}/main/README.md`);
    readmeContent.value = readmeResponse.data;
  } catch (error) {
    console.error('Error fetching project data:', error);
  }
});
</script>

<template>
  <div class="card-container">
    <div class="header">
      <span class="badge bg-danger text-white">{{ props.repo.name }}</span>
      <span class="date">{{ props.repo.pushed_at.split('T')[0] }}</span>
    </div><br>
    <h4>{{ projectSummary?.subheading }}</h4>
    <ul>
      <li v-for="(item, index) in projectSummary?.content" :key="index">{{ item }}</li>
    </ul>

    <a :href="projectSummary?.link" target="_blank">{{ projectSummary?.link }}</a>
    
    <div class="tech-stack">
      <span v-for="tech in projectSummary?.techStack" :key="tech" class="badge bg-warning text-dark">{{ tech }}</span>
    </div>

    <div class="button-group mt-3">
      <button v-if="hasImage" @click="openModal(props.image)" class="btn btn-primary">Demo Image</button>
      <button @click="openModal(readmeContent, true)" class="btn btn-secondary">README</button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-wrap" @click.self="closeModal">
      <div :class="isReadmeModal ? 'modal-container-readme' : 'modal-container-image'">
        <!-- README 내용을 Markdown으로 렌더링 -->
        <div v-if="modalContent === readmeContent" v-html="renderMarkdown(modalContent)" class="markdown-content"></div>
        <!-- 이미지 모달일 경우 이미지 출력 -->
        <img v-else :src="modalContent" alt="Demo Image" class="img-fluid" />
        <button @click="closeModal" class="btn btn-outline-primary mt-3">닫기</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  font-size: 0.9rem;
  color: gray;
}

.tech-stack {
  margin-top: 10px;
}

.tech-stack span {
  margin-right: 5px;
}

/* Modal 관련 스타일 */
.modal-wrap {
  position: fixed; /* 모달을 화면 중앙에 고정 */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* 배경 어둡게 */
  z-index: 999; /* 모달이 다른 요소 위에 표시되도록 */
}

/* 이미지 모달 스타일 */
.modal-container-image {
  position: relative;
  margin: 0 auto;
  top: 1600px; /* 원하는 위치에 맞게 조정 */
  width: 700px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  max-height: 80vh; /* 화면의 80% 높이로 제한 */
}

/* README 모달 스타일 */
.modal-container-readme {
  position: relative;
  margin: 0 auto;
  top: 50%; /* 모달을 중앙에 배치 */
  width: 1000px; /* 화면의 80% 넓이 */
  max-height: 80vh; /* 화면의 80% 높이로 제한 */
  overflow-y: auto; /* 모달 내부 스크롤 가능 */
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}

/* Markdown 스타일 */
.markdown-content {
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #24292e;
}

button {
  margin-top: 10px;
}
</style>
