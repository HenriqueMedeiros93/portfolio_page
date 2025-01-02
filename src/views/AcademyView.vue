<template>
  <div class="academy">
    <p class="title">Formações</p>
    <div class="carousel-container">
      <div class="academy-row">
        <img class="image-academy" :src="require(`@/assets/image/uenp.png`)" />
        <div class="academy-content">    
          <span class="academy-title">Ciência da Computação</span>
          <span>Universidade Estadual do Norte do Paraná - Bandeirantes, PR</span>
          <div class="academy-time">
            <span>Início: 2019</span>
            <span>Término: 2021</span>
          </div>
          <span>Status: Trancado</span>   
        </div>
      </div>
      <div class="academy-row">
        <img class="image-academy" :src="require(`@/assets/image/unicesumar.png`)" />
        <div class="academy-content">
          <span class="academy-title">Análise e Desenvolvimento de Sistemas</span>
          <span>Unicesumar - Educação a Distância (EAD)</span>
          <div class="academy-time">
            <span>Início: 2024</span>
            <span>Término: 2026</span> 
          </div>      
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.academy {
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  background: white;
}

.academy-title {
  font-size: 28px;
  font-weight: 700;
}

.carousel-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-evenly;
}

.academy-time {
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
}

.academy-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
}

.academy-content {
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

.image-academy {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.image-academy:hover {
  transform: scale(1.05);
}
</style>
