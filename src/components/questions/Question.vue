<template>
  <div class="modal" v-if="showModal && !loading">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Engenharia de Software</h5>
        </div>
        <form>
        <div class="modal-body">
          <p :questao="questao">{{ questao.question }}</p>
          <div>
            <input type="radio" id="a" name="answer" v-model="answer" :value="questao.answers.a">
              <label for="a" :questao="questao">&nbsp;{{ questao.answers.a }}</label>
          </div>
          <div>
            <input type="radio" id="b" name="answer" v-model="answer" :value="questao.answers.b" >
              <label for="b" :questao="questao">&nbsp;{{ questao.answers.b }}</label>
          </div>
          <div>
            <input type="radio" id="c" name="answer" v-model="answer" :value="questao.answers.c" >
              <label for="c" :questao="questao">&nbsp;{{ questao.answers.c }}</label>
          </div>
          <div>
            <input type="radio" id="d" name="answer" v-model="answer" :value="questao.answers.d" >
              <label for="d" :questao="questao">&nbsp;{{ questao.answers.d }}</label>
          </div>
          <div>
            <input type="radio" id="e" name="answer" v-model="answer" :value="questao.answers.e" >
              <label for="e" :questao="questao">&nbsp;{{ questao.answers.e }}</label>
          </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Não sei
            </button>
            <button type="button" class="btn btn-primary" @click="confirmarResposta">
              Confirmar Resposta
            </button>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Question',
  data: () => ({
    visible: false,
    questao: {},
    loading: true,
    showModal: true,
    answer: '',
  }),
  
  mounted () {
      this.fetchData()
      console.log(this.answer)
  },
  
  methods: {
    fetchData() {
      try {
        fetch('http://localhost:3001/questoes')
          .then(response => response.json())
          .then(data => {
            this.questao = data[Math.floor((Math.random()*data.length))]
            this.loading = false
          })
      } catch (error) {
        console.log(error)
      }
    },

    confirmarResposta () {
      if(this.answer === this.questao.correct) {
        this.close()
      } else {
        this.close()
      }
      console.log(this.answer)
    },

    // switchPlayer() {
    //   console.log(vezDe)
    //   vezDe = 'O'
    //   console.log(vezDe)
    // },

    close() {
      this.showModal = false
    }
}
}
</script>

<style>
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

.answers {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
