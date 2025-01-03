<script setup lang="ts">
import Education from './EducationView.vue';
import WelcomeView from './WelcomeView.vue';
import Hability from './HabilityView.vue';
import ProfissionalExperience from './ProfissionalExperience.vue';
import SocialMedia from './SocialMedia.vue';
import VueScrollTo from 'vue-scrollto';
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Icons } from '@/font-awesome';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const scrollToSection = (sectionId: string) => {
  VueScrollTo.scrollTo(`#${sectionId}`, 500); 
  menuOpen.value = false; 
};

</script>

<template>
  <main class="main-container">
    <section id="welcome">
      <div class="icon-container">
        <FontAwesomeIcon class="icon-hamburguer" :icon="Icons.imported.faHamburger" @click="toggleMenu"></FontAwesomeIcon>
      </div>
    <div v-show="menuOpen" class="hamburguer-menu">
      <ul>
        <li @click="scrollToSection('welcome')">Bem-vindo</li>
        <li @click="scrollToSection('academy')">Formações</li>
        <li @click="scrollToSection('hability')">Habilidades</li>
        <li @click="scrollToSection('experience')">Experiência Profissional</li>
        <li @click="scrollToSection('socialMedia')">Mídias Sociais</li>
      </ul>
    </div>
      <WelcomeView></WelcomeView>
      <img class="image-profile-down" src="@/assets/image/separator.svg" alt="Perfil de Henrique Medeiros" />  
    </section>
    <section id="academy">
    <Education></Education>
   </section>
   <section id="hability" class="section-background">
    <img class="image-profile-up" src="@/assets/image/separator.svg" alt="Perfil de Henrique Medeiros" /> 
    <Hability></Hability>
    <img class="image-profile-down" src="@/assets/image/separator.svg" alt="Perfil de Henrique Medeiros" /> 
   </section>
   <section id="experience">
    <ProfissionalExperience></ProfissionalExperience>
   </section>
   <section id="socialMedia" class="section-background">
    <img class="image-profile-up" src="@/assets/image/separator.svg" alt="Perfil de Henrique Medeiros" /> 
    <SocialMedia></SocialMedia>
    <img class="image-profile-down" src="@/assets/image/separator.svg" alt="Perfil de Henrique Medeiros" /> 
   </section>
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100vw;
  height: 100vh;
  gap: 18px;
  margin: 0 auto;
  background: transparent;
  color: #272b27;
  box-sizing: border-box;
}

.icon-hamburguer:hover{
  cursor: pointer;
}

.section-background{
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,0.47102591036414565) 48%, rgba(43,52,103,1) 55%);
}


.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.icon-hamburguer {
  width: 30px;
  height: 30px;
  color: white;
}

.icon-container {
  background: #2b3467;
  padding: 30px 0px 0px 30px;
}

.image-profile-down {
  rotate: 180deg;
  background: white;
}

.image-profile-up {
  background: white;
}

.hamburguer-menu {
  position: fixed;
  top: 10;
  left: 0;
  background-color: transparent;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding: 0px 24px;
  font-size: 24px;
}

.hamburguer-menu ul {
  list-style: none;
  padding: 0;
}

.hamburguer-menu li {
  margin: 1rem 0;
  cursor: pointer;
}

.menu-hamburguer {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 101;
  cursor: pointer;
}
</style>
