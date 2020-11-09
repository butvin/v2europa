<template>
  <div class="index-component">
    <h2>Index Component</h2>
    <p>Greeting with connect us</p>
    <b-button @click="showAllUsers">show all users</b-button>
    <div v-if="users">
      <b-container>
        <div v-for="user in users" :key="user.id">
          <b-table hover :users="users">
            <b-col>{{ user.id }}</b-col>
            <b-col>{{ user.name }}</b-col>
            <b-col>{{ user.email }}</b-col>
            <b-col>{{ user.phone }}</b-col>
            <b-col>{{ user.password }}</b-col>
            <b-col>{{ user.status }}</b-col>
            <b-col>{{ user.fb_token }}</b-col>
            <b-col>{{ user.api_token }}</b-col>
            <b-col>{{ user.gl_token }}</b-col>
            <b-col>{{ user.created_at }}</b-col>
            <b-col>{{ user.verified_at }}</b-col>
            <b-col>{{ user.role_id }}</b-col>
          </b-table>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import HttpService from '@/services/HttpService'

export default {
  name: 'IndexComponent',
  data () {
    return {
      users: null
    }
  },
  methods: {
    showAllUsers () {
      HttpService.getAllUsers().then(response => {
        console.log(response.data)
        this.users = response.data
      }).catch(
        error => console.log(error)
      ).finally(
        () => console.log('finally')
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
