<template>
  <div id="app">
    <IndexComponent componentName="IndexComponent"/>
  </div>
</template>

<script>
import IndexComponent from './components/IndexComponent.vue'

export default {
  name: 'App',
  components: {
    IndexComponent
  }
}
</script>

<style>
#app {
  color: #272625;
  background: #fff1b9;
}
</style>
