<script setup lang="ts">
import { Github, Linkedin } from '@iconoir/vue';

const redirectToLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="social-media">
    <p class="title">Vamos trabalhar juntos?</p>
    <div class="carousel-container">
      <div class="social-media-row" @click="redirectToLink('https://github.com/HenriqueMedeiros93')">
        <Github color="white" height="60" width="60" />
        <div class="social-media-content">    
          <span class="social-media-title">GitHub</span>
        </div>
      </div>
      <div class="social-media-row" @click="redirectToLink('https://www.linkedin.com/in/henrique-medeiros-204753219/')">
        <Linkedin color="white" height="60" width="60" />
        <div class="social-media-content">
          <span class="social-media-title">LinkedIn</span>       
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social-media {
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  background: #2b3467;
  padding: 36px 0px;
}

.social-media-title {
  font-size: 28px;
  font-weight: 700;
  color: white;
}

.carousel-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-evenly;
}

.social-media-time {
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
}

.social-media-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.social-media-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  gap: 8px;
}

.title {
  font-size: 40px;
  font-weight: 900;
  color: white;
}

.image-social-media {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.image-social-media:hover {
  transform: scale(1.05);
}
</style>
