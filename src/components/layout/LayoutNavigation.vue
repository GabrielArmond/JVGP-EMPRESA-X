<template>
  <nav class="navigation">
    <ul>
      <li>
        <a href="/">Home</a>
        <i class="fas fa-home"></i>
      </li>
      &nbsp; |
      <li><a href="/JV">Jogo da Velha</a> <i class="fas fa-gamepad"></i></li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--light);
  font-size: 12pt !important;
  font-weight: bold;
  border-bottom: 1px solid var(--dark);
  padding: 10px;
}
.navigation ul {
  padding: 0px;
  margin: 0px;
  list-style: none;
}

.navigation ul li {
  display: inline;
}

.navigation ul li:hover {
  color: var(--hover);
}

.navigation ul li a {
  padding: 2px 5px;
  /* visual do link */
  text-decoration: none;
  color: var(--dark);
}

.navigation ul li a:hover {
  color: var(--hover);
  background-color: var(--light);
}
</style>
