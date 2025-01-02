<script setup>

const skills = [
  { name: 'JavaScript', icon: 'js.png' },
  { name: 'TypeScript', icon: 'ts.png' },
  { name: 'Nest.js', icon: 'nest.png' },
  { name: 'Vue.js', icon: 'vue.png' },
  { name: 'Flutter', icon: 'flutter.png' },
  { name: 'Node.js', icon: 'node.png' },
  { name: 'HTML', icon: 'html.png' },
  { name: 'CSS', icon: 'css.png' },
];
</script>

<template>
  <div class="carousel-container">
    <h1 class="page-title">Minhas habilidades</h1>
    <div class="carousel">
      <div v-for="(skill, index) in skills" :key="index" class="carousel-item">
        <img :src="require(`@/assets/image/${skill.icon}`)" :alt="skill.name" class="skill-icon" />
        <span>{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #2b3467; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.page-title {
  font-size: 40px; 
  color: #fff;
  margin-bottom: 48px; 
}

.carousel {
  display: flex;
  gap: 40px; 
  animation: scrollCarousel 10s linear infinite;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

.skill-icon {
  width: 60px; 
  height: 60px;
  margin-bottom: 8px;
}

.skill-icon + span {
  font-size: 28px; 
  color: #fff; 
}

@keyframes scrollCarousel {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
