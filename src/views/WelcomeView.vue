<script setup lang="ts">
</script>

<template>
  <div class="home-container">
    <div class="bubbles-container">
    <span v-for="i in 50" :key="i" class="bubbles-span" :style="{ '--i': i }"></span>
    </div>
    <div class="text-description">
      <div class="image-container">
        <img class="image-profile" src="@/assets/image/profile.jpg" alt="Perfil de Henrique Medeiros" />  
      </div> 
      <div class="title">
        <span class="first-text">Olá, sou Henrique Medeiros!</span>
        <span>Sou um <strong>Desenvolvedor FullStack</strong> apaixonado por criar soluções inovadoras e eficientes. Com experiência em <strong>Vue.js</strong>, <strong>Flutter</strong>, <strong>Node.js</strong> e outras tecnologias, me dedico a transformar ideias em produtos digitais funcionais e de alto desempenho. Vamos construir o futuro juntos?</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-profile {
  width: 100%;
  box-shadow: #e4e8ef;
  border-radius: 24px;
}

.image-container {
  z-index: 1000;
  width: 15%;
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

 /* bubbles efect */
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
</style>
