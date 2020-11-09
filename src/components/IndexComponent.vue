<template>
  <div class="index-component">
    <h1>{{ componentName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexComponent',
  props: {
    componentName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
