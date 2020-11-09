<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <router-link to="/" class="nav-link">home</router-link>
          <router-link to="/login" class="nav-link">login</router-link>
          <router-link to="/register" class="nav-link">registration</router-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid="true" class="p-4">
      <b-row>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import IndexComponent from './components/IndexComponent.vue'

export default {
  name: 'App',
  components: {
    // IndexComponent
  }
}
</script>

<style>
#app {
  color: #272625;
  background: #fffff3;
}
</style>
