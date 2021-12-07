<template>
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
      <question v-if="showQuestion"/>
    </div>
  </div>
</template>

<script>
import JvBoard from '../components/jogo-da-velha/JvBoard.vue'
import Question from '../components/questions/Question.vue'
import ganhador from '../services/ganhador'

export let vezDe = 'X'


export default {
  name: 'JvGame',

  components: {
    JvBoard,
    Question
  },

  data() {
    return {
      vezDe,
      alguemGanhou: false,
      game: true,
      showQuestion: true,
      posicoes: {
        A1: {
          exibir: null,
          ganhou: false
        },
        A2: {
          exibir: null,
          ganhou: false
        },
        A3: {
          exibir: null,
          ganhou: false
        },
        B1: {
          exibir: null,
          ganhou: false
        },
        B2: {
          exibir: null,
          ganhou: false
        },
        B3: {
          exibir: null,
          ganhou: false
        },
        C1: {
          exibir: null,
          ganhou: false
        },
        C2: {
          exibir: null,
          ganhou: false
        },
        C3: {
          exibir: null,
          ganhou: false
        }
      }
    }
  },

  computed: {
    jogada() {
      const getExibir = i => i.exibir
      const getValues = value => Object.values(value).map(getExibir)
      return getValues(this.posicoes)
    }
  },

  methods: {
    jogarPartida(posicao) {
      this.game = true
      let vezDeJogar = this.vezDe
      let ninguemGanhou = !this.alguemGanhou
      if (ninguemGanhou) {
        let self = this
        posicao.exibir = vezDeJogar
        const result = ganhador(self.jogada)
        self.alguemGanhou = result.ganhou == vezDeJogar
        if (self.alguemGanhou) {
          result.posicaoVitoria.forEach(a => {
            a.forEach(i => (self.posicoes[i].ganhou = true))
          })
        }
        ninguemGanhou = !self.alguemGanhou
        if (ninguemGanhou) {
          self.vezDe = vezDeJogar === 'X' ? 'O' : 'X'
        }
      }
    },

    reiniciar() {
      const self = this
      for (const item in self.posicoes) {
        let posicao = self.posicoes[item]
        posicao.exibir = null
        posicao.ganhou = false
      }
      self.alguemGanhou = false
      self.game = true
    },

    switchPlayer() {
      vezDe = vezDe === 'X' ? 'O' : 'X'
    }
  }
}
</script>

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
</style>
