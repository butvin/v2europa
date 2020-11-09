<template>
  <div id="app">
  <HeaderComponent></HeaderComponent>
    <b-container fluid="true" class="p-2">
      <b-row>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderComponent from '@/components/layouts/HeaderComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  color: #272625;
  background: #fffff3;
}
</style>
