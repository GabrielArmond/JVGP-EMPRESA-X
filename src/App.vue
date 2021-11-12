<template>
  <div id="app">
    <layout-navigation></layout-navigation>
    <router-view />
  </div>
</template>

<script>
import LayoutNavigation from './components/layout/LayoutNavigation.vue'

export default {
  name: 'App',
  components: {
    LayoutNavigation
  }
  // data: () => ({ isLogged: false }),
  // mounted () {
  //   // toda vez que o usuario logar ou deslogar, este comando vai ser chamado
  //   this.$firebase.auth().onAuthStateChanged(user => {
  //     // se user for verdadeiro user = uid, senao user = null
  //     window.uid = user ? user.uid : null
  //     this.isLogged = !!user

  //     // se usuario existir, vai para o home, senao volta para o login
  //     this.$router.push({ name: window.uid ? 'home' : 'login' })

  //     setTimeout(() => {
  //       this.$root.$emit('Spinner::hide')
  //     }, 300)
  //   })
  // }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-title {
  margin-bottom: 5px;
}

.app-subtitle {
  margin-top: 5px;
}

.container {
  width: 370px;
  height: 100%;
}
</style>
