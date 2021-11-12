<template>
  <div class="game">
    <jv-board v-model="posicoes" @jogar="jogarPartida" />
    <div class="restart">
      <button class="reset" @click="reiniciar()">Reiniciar</button>
    </div>
    <div>
      <h1>
        JOGADOR {{ vezDe }}
        <h1 v-show="alguemGanhou">GANHOU</h1>
      </h1>
    </div>
  </div>
</template>

<script>
import JvBoard from '../components/jogo-da-velha/JvBoard.vue'
import ganhador from '../services/ganhador'
export default {
  name: 'JvGame',

  components: {
    JvBoard
  },

  data() {
    return {
      vezDe: 'X',
      alguemGanhou: false,
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
    }
  }
}
</script>

<style>
h1 {
  margin-bottom: 0px;
  margin-top: 0px;
  color: #2c3e50;
}

.game {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.reset {
  cursor: pointer;
  border: 1px solid #42b983;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px;
  font-weight: bold;
  color: #2c3e50;
  font-size: 12pt;
  transition: 0.2s;
}

.reset:hover {
  background-color: #42b983;
}

.restart {
  clear: left;
  margin: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
