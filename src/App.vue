<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './../src/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  created() {
    const language = localStorage.getItem('language')
    this.$store.commit('setLanguage', language)
  }
}
</script>

<style>
  #app {
    max-width: 100vw;
    height: 100vh;
    position: relative;
  }
</style>
