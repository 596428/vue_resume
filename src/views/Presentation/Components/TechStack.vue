<script setup>
import logoHTML from "@/assets/img/logos/HTML.svg";
import logoCSS from "@/assets/img/logos/CSS.svg";
import logoJavaScript from "@/assets/img/logos/JavaScript.svg";
import logoVue from "@/assets/img/logos/Vue.svg";
import logoJQuery from "@/assets/img/logos/JQuery.svg";
import logoJava from "@/assets/img/logos/Java.svg";
import logoPython from "@/assets/img/logos/Python.svg";
import logoSpring from "@/assets/img/logos/Spring.svg";
import logoMySQL from "@/assets/img/logos/MySQL.svg";
import logoSQLite from "@/assets/img/logos/SQLite.svg";
import logoGit from "@/assets/img/logos/Git.svg";
import logoGithub from "@/assets/img/logos/Github.svg";
import logoAWS from "@/assets/img/logos/AWS.svg";


</script>

<template>
  <br>
  <div class="container">
    <div class="tech-stack-box">
      <h2 class="text-center mb-2">Skills</h2> <!-- margin-bottom 값을 2로 줄여 세로 간격 50% 감소 -->

      <!-- Frontend Section -->
      <div class="section-box">
        <h4 class="section-title">
         Frontend
        </h4>
        <div class="d-flex flex-wrap justify-content-center">
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="HTML">
              <img :src="logoHTML" alt="HTML" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">familiar</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="CSS">
              <img :src="logoCSS" alt="CSS" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">Learning</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="JavaScript">
              <img :src="logoJavaScript" alt="JavaScript" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">familiar</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Vue">
              <img :src="logoVue" alt="Vue" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">Learning</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="JQuery">
              <img :src="logoJQuery" alt="JQuery" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">Learning</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Backend Section -->
      <div class="section-box">
        <h4 class="section-title">
          Backend
        </h4>
        <div class="d-flex flex-wrap justify-content-center">
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Java">
              <img :src="logoJava" alt="Java" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">familiar</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Python">
              <img :src="logoPython" alt="Python" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">familiar</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Spring">
              <img :src="logoSpring" alt="Spring" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">Learning</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="MySQL">
              <img :src="logoMySQL" alt="MySQL" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">familiar</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="SQLite">
              <img :src="logoSQLite" alt="SQLite" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">familiar</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Deployment & Version Control Section -->
      <div class="section-box">
        <h4 class="section-title">
          Deployment & Version Control
        </h4>
        <div class="d-flex flex-wrap justify-content-center">
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Git">
              <img :src="logoGit" alt="Git" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">Learning</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="Github">
              <img :src="logoGithub" alt="Github" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">familiar</span>
              </div>
            </a>
          </div>
          <div class="tech-logo">
            <a data-bs-toggle="tooltip" data-bs-placement="bottom" title="AWS">
              <img :src="logoAWS" alt="AWS" loading="lazy" />
              <div class="overlay">
                <span class="overlay-text">familiar</span>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* 박스 스타일 추가 */
.tech-stack-box {
  border: 2px solid #d3d3d3;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
}

.section-box {
  margin-bottom: 15px; /* 세로 간격을 50%로 줄임 */
  padding: 20px;
}

.section-title {
  margin-bottom: 10px; /* 세로 간격을 50%로 줄임 */
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  margin: 10px;
  height: 80px;
  width: 80px;
}

.tech-logo {
  position: relative;
  display: inline-block;
  margin: 10px;
}

.tech-logo img {
  transition: 0.3s ease-in-out;
  width: 100%;
  height: auto;
  max-width: 96px; /* 기존의 80% 크기로 조정 */
}

.tech-logo:hover img {
  filter: brightness(0.3);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.tech-logo:hover .overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-size: 18px;
  font-weight: bold;
}

/* 반응형 디자인 추가 */
@media (max-width: 768px) {
  .tech-logo img {
    max-width: 60px;
  }
}

@media (max-width: 576px) {
  .tech-logo img {
    max-width: 40px;
  }
}
</style>
