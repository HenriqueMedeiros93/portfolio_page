<template>
  <div class="education">
    <p class="title">Formações</p>
    <div class="education-container">
      <div class="education-row">
        <img class="image-education" :src="require(`@/assets/image/uenp.png`)" />
        <div class="education-content">    
          <span class="education-title">Ciência da computação</span>
          <span>Universidade Estadual do Norte do Paraná - Bandeirantes, PR</span>
          <div class="education-time">
            <span>Início: 2019</span>
            <span>Término: 2021</span>
          </div>
          <span>Status: Trancado</span>   
        </div>
      </div>
      <div class="education-row">
        <img class="image-education" :src="require(`@/assets/image/unicesumar.png`)" />
        <div class="education-content">
          <span class="education-title">Análise e desenvolvimento de sistemas</span>
          <span>Unicesumar - Educação a Distância (EAD)</span>
          <div class="education-time">
            <span>Início: 2024</span>
            <span>Término: 2026</span> 
          </div>      
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education {
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  background: white;
}

.education-title {
  font-size: 28px;
  font-weight: 700;
}

.education-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-evenly;
}

.education-time {
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
}

.education-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
}

.education-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  gap: 8px;
}

.title {
  font-size: 40px;
  font-weight: 900;
  color: #333;
}

.image-education {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.image-education:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 900px) {
  .education-container {
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {

  .education-row {
    flex-direction: column;
  }
}
</style>
