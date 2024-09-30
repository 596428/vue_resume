<script setup>
import { onMounted, onUnmounted } from "vue";
//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";

import Header from "../../examples/Header.vue";
import myMkHeader from "@/assets/img/myMkHeader.jpeg";
import Footer from "../../examples/Footer.vue";

import aboutMe from "./Components/aboutMe.vue";
import TechStack from "./Components/TechStack.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import Contact from "./Components/AuthorContact.vue";
import Utterances from "./Components/Utterances.vue";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

</script>


<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
    class="page-header min-vh-50"
    :style="`background-image: url(${myMkHeader}); filter: grayscale(100%)`"
    loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block ' }">
              개발자 포트폴리오
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              -Jiwhan Ahn-
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    
    <div id="aboutMe">
      <aboutMe />
    </div>
    <div id="TechStack">
      <TechStack />
    </div>
    <div id="PresentationPages">
      <PresentationPages />
    </div>
    <div id="Utterances">
      <Utterances />
    </div>
  </div>
  <Footer />
</template>



<css>
  html {
  scroll-behavior: smooth;
}
</css>
