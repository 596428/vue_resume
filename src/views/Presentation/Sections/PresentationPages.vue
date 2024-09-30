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
    let repos = response.data;

    repos = repos.sort((a, b) => new Date(a.pushed_at) - new Date(b.pushed_at));

    for (let repo of repos) {
      const readmeUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/README.md`;
      const imageUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/${repo.name}_demo.png`;

      let imageExists = false;
      try {
        // 이미지가 실제로 존재하는지 확인
        await axios.head(imageUrl);
        imageExists = true;
      } catch (error) {
        imageExists = false;
      }

      const readmeResponse = await axios.get(readmeUrl).catch(error => {
        if (error.response && error.response.status === 404) {
          return null;
        } else {
          console.warn(`Error fetching README.md for ${repo.name}:`, error);
          return null;
        }
      });

      if (readmeResponse && readmeResponse.data.startsWith(README_START_TEXT)) {
        state.repositories.push({
          name: repo.name,
          image: imageExists ? imageUrl : null, // 이미지가 존재할 때만 imageUrl 전달
          route: `https://github.com/${GITHUB_USERNAME}/${repo.name}`,
          pushed_at: repo.pushed_at
        });
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
