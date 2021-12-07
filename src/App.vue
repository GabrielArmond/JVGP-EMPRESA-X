<template>
  <div id="app">
    <layout-navigation></layout-navigation>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import LayoutNavigation from './components/layout/LayoutNavigation.vue'

export default {
  name: 'App',
  components: {
    LayoutNavigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700;900&display=swap');

:root {
  --light: #f9fafb;
  --lighter: #98a2b3;
  --dark-light: #667085;
  --dark: #1d2939;
  --hover: #32d583;
  --hover-win: #6ce9a6;
  --btn-cancel: #f97066;
}

* {
  font-family: Poppins, sans-serif;
  color: var(--dark);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

i {
  transition: all 0.3s ease-in-out 0s;
}

i:hover {
  color: var(--dark);
  transform: rotate(360deg);
  transition: all 0.3s ease-in-out 0s;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
}

.fade-enter-active {
  transition-delay: 0.4s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
