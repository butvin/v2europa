<template>
  <div class="header-component">
    <b-container>
      <b-nav>
        <b-nav-item>
          <router-link to="/" class="nav-link">home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/login" class="nav-link">login</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/register" class="nav-link">registration</router-link>
        </b-nav-item>
      </b-nav>
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
.header-component a {
  color: #fffff3;
}
</style>
