<template>
  <div class="estudos">
    <h2>Experiências Acadêmicas</h2>
    <ul>
      <!-- <li v-for="(estudo, index) in estudos" :key="index">
        <h3>{{ estudo.titulo }}</h3>
        <p>{{ estudo.descricao }}</p>
      </li> -->
    </ul>
  </div>
</template>

<style scoped>
.estudos {
  padding: 20px;
}

.estudos h2 {
  color: #2c3e50;
}

.estudos ul {
  list-style: none;
  padding: 0;
}

.estudos li {
  margin-bottom: 20px;
  background: #95a5a6;
  padding: 10px;
  border-radius: 5px;
}
</style>
