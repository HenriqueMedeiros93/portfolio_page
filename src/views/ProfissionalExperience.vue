<script setup lang="ts">

</script>

<template>
  <div class="academy">
    <p class="title">Experiência profissional</p>
    <div class="carousel-container">
      <div class="academy-row">
        <div class="academy-content">
          <div class="exp-title-image">
            <img class="image-academy" :src="require(`@/assets/image/superopa.jpg`)" />
            <div class="exp-container">
              <span class="academy-title">SuperOpa</span>
              <span class="role">Desenvolvedor FullStack</span>
              <div class="academy-time">
                <span>Duração: 1 ano e 11 meses</span>
              </div>
            </div>
          </div>
          <p class="description">
            <strong>Backend</strong><br>
            ⋆ Implementação de micro serviços no backend com Node.js, Typescript e NestJS.<br>
            ⋆ Uso do padrão BFF (Backend for Frontend) para melhorar a integração entre frontend e backend.<br>
            ⋆ Trabalhou com serviços de nuvem como AWS e Google Cloud para infraestrutura e escalabilidade.<br>

            <strong>Frontend</strong><br>
            ⋆ Criação de aplicações web e mobile utilizando VueJS no frontend e Flutter com Dart no mobile.<br>

            <strong>Domain-Driven Design (DDD)</strong><br>
            ⋆ Aplicação de práticas de DDD para garantir a escalabilidade e manutenção eficiente das aplicações.<br>
            ⋆ Injeção de dependências e uso de inversão de controle para arquitetura modular e sustentável.<br>

            <strong>Banco de Dados</strong><br>
            ⋆ Trabalhou com PostgreSQL e DynamoDB para gerenciar dados de clientes e transações.<br>

            <strong>Correção de Bugs e Novas Funcionalidades</strong><br>
            ⋆ Participação na correção de tasks e implementação de melhorias contínuas no sistema.<br>
            ⋆ Desenvolvimento de novas funcionalidades, com foco em performance e experiência do usuário.<br>

            <strong>Escalabilidade e Arquitetura</strong><br>
            ⋆ Aplicação de boas práticas de segurança e performance em soluções escaláveis.<br>

            <strong>Versionamento</strong><br>
            ⋆ Uso do GitHub para versionamento de código e integração com CI/CD.<br>
          </p>
        </div>
      </div>
      <div class="academy-row">
        <div class="academy-content">
          <div class="exp-title-image">
            <img class="image-academy" :src="require(`@/assets/image/foodpass.jpg`)" />
            <div class="exp-container">
              <span class="academy-title">FoodPass</span>
              <span class="role">Desenvolvedor FullStack</span>
              <div class="academy-time">
                <span>Atualmente, no cargo há 6 meses</span>
              </div>
            </div>
          </div>
          <p class="description">
            <strong>Backend</strong><br>
            ⋆ Desenvolvimento de micro serviços com Node.js, TypeScript e NestJS no backend.<br>
            ⋆ Utilização de Kubernetes para orquestração e escalabilidade de aplicações.<br>
            ⋆ Trabalhou com Google Cloud para infraestrutura de nuvem.<br>

            <strong>Frontend</strong><br>
            ⋆ Atuação no desenvolvimento de soluções para uma fintech de benefícios, utilizando VueJS no frontend e Flutter com Dart no mobile.<br>

            <strong>Domain-Driven Design (DDD)</strong><br>
            ⋆ Aplicação de DDD e padrões de injeção de dependências para garantir flexibilidade e manutenção.<br>

            <strong>Banco de Dados</strong><br>
            ⋆ Uso do Google Cloud DataStore para gerenciamento de dados de benefícios e informações financeiras.<br>

            <strong>Melhorias e Novas Funcionalidades</strong><br>
            ⋆ Desenvolvimento de novas funcionalidades para otimizar a plataforma de benefícios.<br>
            ⋆ Participação ativa na correção de bugs e melhorias contínuas no sistema.<br>

            <strong>Escalabilidade e Performance</strong><br>
            ⋆ Aplicação de boas práticas de escalabilidade e performance no backend e infraestrutura.<br>

            <strong>Versionamento</strong><br>
            ⋆ Uso do GitHub para versionamento de código e integração com CI/CD.<br>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.academy {
  display: flex;
  text-align: center;
  padding: 0px 48px;
  flex-direction: column;
  width: 100%;
  background: white;
}

.exp-title-image {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.exp-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.academy-title {
  font-size: 28px;
  font-weight: 700;
}

.role {
  font-size: 18px;
  font-weight: 600;
  color: #666;
}

.carousel-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 32px;
  padding-right: 96px;
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
  gap: 12px;
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
  width: 200px;
  height: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.image-academy:hover {
  transform: scale(1.05);
}

.description {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
  text-align: justify;
  margin-top: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;
}

@media screen and (max-width: 900px) {
  .carousel-container {
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

