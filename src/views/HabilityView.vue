<script setup>
import { Contansts } from '@/constants';

</script>

<template>
  <div class="hability-container">
    <h1 class="page-title">Minhas habilidades</h1>
    <div class="hability">
      <div v-for="(skill, index) in Contansts.skills" :key="index" class="hability-item">
        <img :src="require(`@/assets/image/${skill.icon}`)" :alt="skill.name" class="skill-icon" />
        <span>{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hability-container {
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

.hability {
  display: flex;
  gap: 40px; 
  animation: scrollhability 10s linear infinite;
}

.hability-item {
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

@keyframes scrollhability {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
