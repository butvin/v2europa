<template>
  <div class="header-component shadow-sm">
    <b-container>
      <b-row>
        <b-nav>
          <b-nav-item style="background: tomato;">
            <router-link to="/" class="nav-link">
              <span class="text-uppercase">home</span>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/login" class="nav-link">login</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/register" class="nav-link">registration</router-link>
          </b-nav-item>
        </b-nav>
      </b-row>
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
  color: #fffff3;
}
.header-component a {
  color: #fffff3;
}
</style>
