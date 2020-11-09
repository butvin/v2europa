<template>
  <div id="app">
<!--    <b-container>-->
<!--      <b-row>-->
<!--        <b-col>-->
          <IndexComponent />
<!--        </b-col>-->
<!--      </b-row>-->
<!--    </b-container>-->
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
