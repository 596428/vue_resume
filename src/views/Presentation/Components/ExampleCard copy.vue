<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import axios from 'axios';

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

// 이미지가 있는지 여부를 확인하는 computed property
const hasImage = computed(() => {
  return props.image !== null;
});

// Modal 관련
const openModal = (content) => {
  modalContent.value = content;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  modalContent.value = '';
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
      <span class="badge bg-danger text-white">{{ projectSummary?.title }}</span>
      <span class="date">{{ props.repo.pushed_at.split('T')[0] }}</span>
    </div>
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
      <button @click="openModal(readmeContent)" class="btn btn-secondary">README</button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-wrap" @click.self="closeModal">
      <div class="modal-container">
        <pre v-if="modalContent === readmeContent">{{ modalContent }}</pre>
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

.modal-wrap {
  position: absolute; /* 모달을 부모 요소에 맞추어 위치시키기 위해 absolute 사용 */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* 배경을 어둡게 */
  z-index: 999; /* 모달이 다른 요소 위에 표시되도록 */
}

.modal-container {
  position: relative;
  margin: 0 auto;
  top: 1600px; /* 원하는 위치에 맞게 조정 */
  width: 550px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 80vh; /* 화면의 80% 높이로 제한 */
}

button {
  margin-top: 10px;
}
</style>