<template>
  <div class="home">
    <div class="title-home">
      <h1 class="app-title bold">Jogo da Velha Gaming Project</h1>
      <h3 class="app-subtitle">made by Empresa X</h3>
    </div>
    <div class="body">
      <div class="row">
        <div class="about col-4">
          <p class="bold" id="sobre">Sobre o Jogo da Velha Gaming Project</p>
          <p>
            O Jogo da Velha Gaming Project é um jogo da Velha com uma mudança no
            conceito de jogar. <br />
            É um jogo da velha tradicional, mas com um quiz de perguntas e
            respostas sobre o tema Engenharia de Software. <br />
            Este site foi desenvolvido por
            <span class="bold" id="empresaX">Empresa X</span>, para fins
            educacionais.
          </p>
        </div>
        <div class="howToPlay col-4">
          <p class="bold" id="howToPlay">Como jogar?</p>
          <p>
            O jogo da velha será jogado em turnos, ambos tem como objetivo fazer
            uma sequência de três símbolos iguais
            <span class="bold">(X ou O)</span> sendo na horizontal, vertical ou
            diagonal. Cada jogador irá responder uma pergunta alternativa que
            será lançada dentro do jogo, aquele que acertar a pergunta, terá o
            direito de realizar uma jogada (colocar seu símbolo em algum espaço
            em branco) e o que errar, perderá a chance de colocar a peça no
            local selecionado.
          </p>
        </div>
        <div class="start-game">
          <span class="link-game"
            ><a href="/JV">Começar Jogo &nbsp; <i class="fas fa-gamepad"></i></a
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style>
p {
  margin-bottom: 10px;
}

.home {
  margin: 5px;
}

.row {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-top: 20px;
}

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.howToPlay,
.about {
  border: 1px solid var(--dark);
  border-radius: 20px;
  padding: 10px;
}

.start-game {
  margin-top: 90px;
}

.start-game a {
  cursor: pointer;
  text-decoration: none;
  border: 1px solid var(--dark);

  border-radius: 10px;
  padding: 15px;

  font-weight: bold;
  font-size: 12pt;
  color: var(--dark);

  transition: 0.2s;
  background-color: var(--light);
}

a:hover {
  background-color: var(--hover);
  color: var(--light);
}

.app-title {
  margin-bottom: 0px;
  margin-top: 10px;
}

.bold {
  font-weight: bold;
}

.app-subtitle {
  margin-top: 0px;
  margin-bottom: 20px;
}
</style>
