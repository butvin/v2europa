<template>
  <div class="index-component">
    <h2>Index Component</h2>
    <div class="m-4">
      <b-button @click="showAllUsers" variant="outline-dark" size="sm" squared>
        <span class="text-uppercase m-2 p-2">show all users</span>
      </b-button>
    </div>
    <div v-if="users">
      <b-table
        head-variant="dark"
        bordered
        small
        hover
        responsive="sm"
        :items="users"
        :fields="columns"
      >
      </b-table>
    </div>
  </div>
</template>

<script>
import httpService from '@/services/HttpService'

export default {
  name: 'IndexComponent',
  data () {
    return {
      users: null,
      columns: [
        { key: 'id', sortable: true, label: 'ID' },
        { key: 'name', sortable: true },
        { key: 'email', sortable: false },
        { key: 'phone', sortable: false },
        { key: 'password', sortable: false },
        { key: 'status', sortable: true },
        {
          key: 'role_id',
          sortable: true,
          label: 'Role',
          variant: 'secondary',
          formatter: (value, key, item) => {
            return (value === 1) ? 'admin' : 'user'
          }
        },
        { key: 'created_at', label: 'Created', sortable: true, variant: 'warning' },
        { key: 'verified_at', label: 'Verified', sortable: true, variant: 'warning' }
      ]
    }
  },
  methods: {
    showAllUsers () {
      httpService.$getAll().then(response => {
        console.log(response)
        console.log(response.data)
        this.users = response.data
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        console.log('finally')
      })
    }
  }
}
</script>

<style scoped>
</style>
