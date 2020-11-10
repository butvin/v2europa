<template>
  <div id="app">
  <header-component></header-component>
  <router-view></router-view>
  <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/layouts/HeaderComponent'
import FooterComponent from '@/components/layouts/FooterComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  color: #272625;
  background: #fffff3;
}
</style>
