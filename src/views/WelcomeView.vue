<script setup lang="ts">
</script>

<template>
  <div class="home-container">
    <div class="bubbles-container">
    <span v-for="i in 50" :key="i" class="bubbles-span" :style="{ '--i': i }"></span>
    </div>
    <div class="text-description">
      <div class="image-container">
        <img class="image-profile" src="@/assets/image/profile.png" alt="Perfil de Henrique Medeiros" />  
      </div> 
      <div class="title">
        <span class="first-text">Olá, sou Henrique Medeiros!</span>
        <span>&nbsp;&nbsp;&nbsp;Como desenvolvedor full-stack dedicado, com mais de dois anos de experiência prática, procurando sempre criar soluções dinâmicas e experiências de usuário imersivas. Proficiente em Dart/Flutter, Node.js, HTML, CSS, TypeScript, Vue.js e NestJS, trago um conjunto de habilidades versátil, garantindo um desenvolvimento robusto e inovador em todas as camadas.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-profile {
  width: 100%;
  object-fit: cover;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

.image-container {
  z-index: 1000;
  width: 30%;
}

.home-container {
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color:#e4e8ef;
  background: #2b3467;
  width: 100%;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 50%;
}

.first-text {
  font-size: 42px;
  font-weight: 800;
  white-space: normal;
  word-wrap: break-word;
}

.text-description {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px;
  justify-content: center;
}

.social-media {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center; 
  margin-bottom: 16px; 
}

.social-media-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}


.bubbles-container {
  position: relative;
  display: flex;
}

.bubbles-container span {
  position: relative;
  min-width: 30px;
  height: 30px;
  background: #252525;
  margin:0 4px;
  border-radius: 50%;
  animation: animate 15s linear infinite;
  animation-duration: calc(75s / var(--i));
}

.bubbles-container span:nth-child(even) {
  background: #ff2d75;
  box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d15;
}

@keyframes animate {
  0% {
    transform: translateY(100vh) scale(0); 
    opacity: 1; 
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0; 
  }
}

@media screen and (max-width: 900px) {
  .text-description {
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {
  .carousel-container {
    flex-direction: column;
  }

  .academy-row {
    flex-direction: column;
  }
}
</style>
