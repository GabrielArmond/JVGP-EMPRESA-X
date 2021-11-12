<template>
  <nav class="navigation">
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/JV">Jogo da Velha</a></li>
    </ul>
    <layout-logout />
  </nav>
</template>

<script>
import LayoutLogout from './LayoutLogout.vue'
export default {
  components: {
    LayoutLogout
  }

  // computed: {
  //   routerLinks() {
  //     return this.$router.options.routes.filter(route => r.name !== 'login')
  //   }
  // }
}
</script>

<style>
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #ededed;
}
.navigation ul {
  padding: 0px;
  margin: 0px;
  background-color: #ededed;
  list-style: none;
}
.navigation ul li {
  display: inline;
}

.navigation ul li a {
  padding: 2px 10px;

  /* visual do link */
  background-color: #ededed;
  color: #333;
  text-decoration: none;
  border-bottom: 3px solid #ededed;
}

.navigation ul li a:hover {
  color: #6d6d6d;
  border-bottom: 3px solid #ea0000;
}
</style>
