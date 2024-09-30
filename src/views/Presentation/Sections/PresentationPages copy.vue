<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import ExampleCard from '../Components/ExampleCard.vue';

// GitHub username 및 README 첫 줄 필터 텍스트
const GITHUB_USERNAME = '596428';
const README_START_TEXT = '[This project was created for portfolio purposes]';

// 리포지토리 및 ExampleCard 관련 데이터 상태
const state = reactive({
  repositories: [] // 필터링된 리포지토리 데이터 저장
});

// 리포지토리 데이터를 가져오고 README 첫 번째 줄을 필터링
const fetchRepositories = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    const repos = response.data;

    for (let repo of repos) {
      const readmeUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/README.md`;
      try {
        const readmeResponse = await axios.get(readmeUrl);
        // README의 첫 번째 줄이 README_START_TEXT로 시작하면 추가
        if (readmeResponse.data && readmeResponse.data.startsWith(README_START_TEXT)) {
          state.repositories.push({
            name: repo.name,
            image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/${repo.name}_demo.png`,
            route: `https://github.com/${GITHUB_USERNAME}/${repo.name}`,
            pushed_at: repo.pushed_at // 프로젝트의 마지막 업데이트 날짜 추가
          });
        }
      } catch (error) {
        console.warn(`Error fetching README.md for ${repo.name}:`, error);
      }
    }
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
};

onMounted(fetchRepositories);
</script>

<template>
  <section class="projects py-5">
    <div class="container">
      <h2>Projects</h2>
      <div class="row">
        <div v-for="repo in state.repositories" :key="repo.name" class="col-md-6">
          <ExampleCard :repo="repo" :image="repo.image !== 'null' ? repo.image : null" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 40px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-6 {
  padding: 15px;
}
</style>
