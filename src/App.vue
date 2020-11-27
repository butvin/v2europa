<template>
  <div id="app">
<!--    <font-awesome-icon icon="user-secret" />-->
    <header-component></header-component>
    <section id="app-content">
      <router-view></router-view>
    </section>
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

#app-content {
  margin: 0;
  padding: 0;
}
</style>
