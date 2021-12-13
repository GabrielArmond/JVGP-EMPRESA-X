<script>
import JvBoard from "../components/jogo-da-velha/JvBoard.vue";
import ganhador from "../services/ganhador";

export default {
  name: "JvGame",

  components: {
    JvBoard,
  },

  data() {
    return {
      visible: false,
      questao: {},
      questoes: [],
      answer: "",
      vezDe: "X",
      alguemGanhou: false,
      game: true,
      showQuestion: false,
      loading: true,
      posicoes: {
        A1: {
          exibir: null,
          ganhou: false,
        },
        A2: {
          exibir: null,
          ganhou: false,
        },
        A3: {
          exibir: null,
          ganhou: false,
        },
        B1: {
          exibir: null,
          ganhou: false,
        },
        B2: {
          exibir: null,
          ganhou: false,
        },
        B3: {
          exibir: null,
          ganhou: false,
        },
        C1: {
          exibir: null,
          ganhou: false,
        },
        C2: {
          exibir: null,
          ganhou: false,
        },
        C3: {
          exibir: null,
          ganhou: false,
        },
      },
    };
  },

  mounted() {
    this.fetchData();
    console.log(this.answer);
  },

  computed: {
    jogada() {
      const getExibir = (i) => i.exibir;
      const getValues = (value) => Object.values(value).map(getExibir);
      return getValues(this.posicoes);
    },
  },

  methods: {
    jogarPartida(posicao) {
      this.game = true;
      let vezDeJogar = this.vezDe;
      let ninguemGanhou = !this.alguemGanhou;
      if (ninguemGanhou) {
        let self = this;
        posicao.exibir = vezDeJogar;
        const result = ganhador(self.jogada);
        self.alguemGanhou = result.ganhou == vezDeJogar;
        if (self.alguemGanhou) {
          result.posicaoVitoria.forEach((a) => {
            a.forEach((i) => (self.posicoes[i].ganhou = true));
          });
        }
        ninguemGanhou = !self.alguemGanhou;
        if (ninguemGanhou) {
          this.showQuestion = true;
          this.newMove();
        }
      }
    },

    reiniciar() {
      const self = this;
      for (const item in self.posicoes) {
        let posicao = self.posicoes[item];
        posicao.exibir = null;
        posicao.ganhou = false;
      }
      self.alguemGanhou = false;
      self.game = true;

      this.showQuestion = true;
      this.answer = "";
    },

    newMove() {
      this.switchPlayer();
      this.answer = "";
      this.questao =
        this.questoes[Math.floor(Math.random() * this.questoes.length)];
    },

    fetchData() {
      try {
        fetch("http://localhost:3001/questoes")
          .then((response) => response.json())
          .then((data) => {
            this.questoes = data;
            this.questao = data[Math.floor(Math.random() * data.length)];
            this.loading = false;
            this.showQuestion = true;
          });
      } catch (error) {
        console.log(error);
      }
    },

    confirmarResposta() {
      if (this.answer === this.questao.correct) {
        this.showQuestion = false;
      } else {
        this.newMove();
      }
    },

    switchPlayer() {
      const self = this;
      self.vezDe = self.vezDe === "X" ? "O" : "X";
      console.log(self.vezDe);
    },

    handleDontKnow() {
      this.newMove();
    },

    handleModalClose() {
      this.showQuestion = false;
      this.switchPlayer();
    },
  },
};
</script>

<template>
  <div>
    <div>
      <div class="game">
        <div class="title-home">
          <h1 class="app-title">Jogo da Velha Gaming Project</h1>
          <h3 class="app-subtitle">made by Empresa X</h3>
        </div>
        <jv-board v-model="posicoes" @jogar="jogarPartida" />
        <div class="restart">
          <button class="btn reset" @click="reiniciar()">
            Reiniciar &nbsp; <i class="fas fa-sync reset-icon"></i>
          </button>
        </div>
        <div>
          <h1 v-show="game">
            JOGADOR "{{ vezDe }}"
            <h1 v-show="alguemGanhou">GANHOU</h1>
          </h1>
        </div>
      </div>
    </div>
    <div class="modal" v-if="showQuestion && !loading">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Engenharia de Software</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="handleModalClose"
            >
              X
            </button>
          </div>
          <form>
            <div class="modal-body">
              <p :questao="questao">{{ questao.question }}</p>
              <div class="answers">
                <input
                  type="radio"
                  id="a"
                  name="answer"
                  v-model="answer"
                  :value="questao.answers.a"
                />
                <label for="a" :questao="questao"
                  >&nbsp;{{ questao.answers.a }}</label
                >
              </div>
              <div class="answers">
                <input
                  class="p-1"
                  type="radio"
                  id="b"
                  name="answer"
                  v-model="answer"
                  :value="questao.answers.b"
                />
                <label for="b" :questao="questao"
                  >&nbsp;{{ questao.answers.b }}</label
                >
              </div>
              <div class="answers">
                <input
                  type="radio"
                  id="c"
                  name="answer"
                  v-model="answer"
                  :value="questao.answers.c"
                />
                <label for="c" :questao="questao"
                  >&nbsp;{{ questao.answers.c }}</label
                >
              </div>
              <div class="answers">
                <input
                  type="radio"
                  id="d"
                  name="answer"
                  v-model="answer"
                  :value="questao.answers.d"
                />
                <label for="d" :questao="questao"
                  >&nbsp;{{ questao.answers.d }}</label
                >
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click="handleDontKnow()"
              >
                Não sei
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="confirmarResposta"
              >
                Confirmar Resposta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  margin-bottom: 0px;
  margin-top: 0px;
  color: var(--dark);
}

.game {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
}
.reset {
  cursor: pointer;
  border: 1px solid var(--dark);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px;
  font-weight: bold;
  font-size: 12pt;
  color: var(--dark);
  transition: 0.2s;
  background-color: var(--light);
}

.reset-icon:hover {
  color: var(--light);
  transform: rotate(360deg);
  transition: all 0.3s ease-in-out 0s;
}

.reset:hover {
  background-color: var(--hover);
  color: var(--light);
}

.restart {
  clear: left;
  margin: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
}

.app-title {
  margin-bottom: 0px;
  font-weight: bold;
}

.app-subtitle {
  margin-top: 0px;
}

.vezDe {
  color: var(--hover);
}

.modal {
  display: block;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

/* .answers {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
} */

.close {
  border: 0;
  background: transparent;
}
</style>
