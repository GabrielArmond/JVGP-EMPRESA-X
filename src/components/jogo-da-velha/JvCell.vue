<template>
  <button
    class="cell"
    :class="{ ganhou: value.ganhou }"
    :disabled="value.exibir"
    @click="jogar()"
  >
    {{ value.exibir }}
  </button>
</template>

<script>
export default {
  name: 'JvCell',
  props: ['value'],
  methods: {
    jogar() {
      this.$emit('jogar', this.value)
    }
  }
}
</script>

<style>
.cell {
  cursor: pointer;
  float: right;
  border: solid 1px var(--dark);
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 60px;
  border-radius: 10px;

  transition: 0.2s;
}
.cell:hover {
  background-color: var(--hover);
}

.ganhou {
  background-color: var(--hover-win);
}
</style>
