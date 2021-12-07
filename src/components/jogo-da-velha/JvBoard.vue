<template>
  <div class="game-board">
    <div class="board">
      <div class="row">
        <jv-cell v-model="value.A1" @jogar="jogarPartida"></jv-cell>
        <jv-cell v-model="value.B1" @jogar="jogarPartida"></jv-cell>
        <jv-cell v-model="value.C1" @jogar="jogarPartida"></jv-cell>
      </div>
      <div class="row">
        <jv-cell v-model="value.A2" @jogar="jogarPartida"></jv-cell>
        <jv-cell v-model="value.B2" @jogar="jogarPartida"></jv-cell>
        <jv-cell v-model="value.C2" @jogar="jogarPartida"></jv-cell>
      </div>
      <div class="row">
        <jv-cell v-model="value.A3" @jogar="jogarPartida"></jv-cell>
        <jv-cell v-model="value.B3" @jogar="jogarPartida"></jv-cell>
        <jv-cell v-model="value.C3" @jogar="jogarPartida"></jv-cell>
      </div>
    </div>
  </div>
</template>

<script>
import JvCell from './JvCell.vue'


export default {
  name: 'JvBoard',

  data: () => ({}),

  components: {
    JvCell
  },
  props: ['value'],
  methods: {
    jogarPartida(posicao) {
      this.$emit('jogar', posicao)
    }
  }
}
</script>

<style>
.row {
  margin-right: auto;
  margin-left: auto;
  clear: right;
}

.game-board {
  height: 300px;
  width: 300px;
}
</style>
