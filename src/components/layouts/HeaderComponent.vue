<template>
  <div class="header-component">
    <b-container>
      <router-link to="/" class="nav-link">home</router-link>
      <router-link to="/login" class="nav-link">login</router-link>
      <router-link to="/register" class="nav-link">registration</router-link>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header-component {
  background: #A593E0;
}
</style>
