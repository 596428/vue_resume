<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Utterances 스크립트 삽입
  const script = document.createElement("script");
  script.src = "https://utteranc.es/client.js";
  script.async = true;
  script.setAttribute("repo", "596428/comments-repo");
  script.setAttribute("issue-term", "pathname");
  script.setAttribute("label", "comments");
  script.setAttribute("theme", "github-light");
  script.setAttribute("crossorigin", "anonymous");
  document.querySelector("#utterances-container").appendChild(script);
});
</script>

<template>
  <div id="utterances-container" class="mt-5"></div>
</template>

<style scoped>
/* 필요하다면 스타일 추가 */
</style>
