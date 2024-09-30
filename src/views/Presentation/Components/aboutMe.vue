<script setup>
import logoGithub from "@/assets/img/logos/Github.svg";
import profilePhoto from "@/assets/img/logos/unnamed.jpg"; // Import the profile photo
</script>

<template>
  <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundImage:
          'url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg)'
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ms-lg-5">            
            <h2 class="text-white">ABOUT ME</h2><br>
            <div class="row text-white">
              <!-- First row with Name, Birthday, Address -->
              <div class="col-md-4 text-center info-item">
                <i class="fas fa-user"></i>
                <div class="info-text">
                  <p>이름</p>
                  <p class="info-value">Jiwhan Ahn</p>
                </div>
              </div>
              <div class="col-md-4 text-center info-item">
                <i class="fas fa-calendar-alt"></i>
                <div class="info-text">
                  <p>생년월일</p>
                  <p class="info-value">91.12.07</p>
                </div>
              </div>
              <div class="col-md-4 text-center info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div class="info-text">
                  <p>주소지</p>
                  <p class="info-value">서울특별시</p>
                </div>
              </div>

              <!-- Second row with Contact, Email, Education -->
              <div class="col-md-4 text-center info-item">
                <i class="fas fa-phone"></i>
                <div class="info-text">
                  <p>연락처</p>
                  <p class="info-value">010-2359-9650</p>
                </div>
              </div>
              <div class="col-md-4 text-center info-item">
                <i class="fas fa-envelope"></i>
                <div class="info-text">
                  <p>이메일</p>
                  <p class="info-value">ttyr6592@gmail.com</p>
                </div>
              </div>
              <div class="col-md-4 text-center info-item">
                <i class="fas fa-pencil-alt"></i>
                <div class="info-text">
                  <p>학력</p>
                  <p class="info-value">한국폴리텍대학 서울강서</p>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/596428"
              class="text-white icon-move-right d-inline-flex align-items-center mt-4"
            >
              GitHub
              <img :src="logoGithub" alt="GitHub Logo" class="ms-2" style="width: 24px; height: 24px;">
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>

          <!-- Right column with profile photo -->
          <div class="col-lg-4 ms-auto d-flex justify-content-center align-items-center">
            <img :src="profilePhoto" alt="Profile Photo" class="img-fluid rounded-circle" style="max-width: 200px;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  position: relative;
  background-size: cover;
  background-position: center;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;
}

.info-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.info-item i {
  font-size: 1.5rem;
  margin-right: 15px; /* 아이콘과 텍스트 사이에 간격 추가 */
}

.info-text {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.info-text p {
  margin: 0;
}

@media (max-width: 768px) {
  .info-item {
    justify-content: flex-start;
    margin-bottom: 15px;
  }

  .info-item i {
    margin-right: 10px;
  }

  .info-text p {
    margin: 0;
  }
}
</style>
