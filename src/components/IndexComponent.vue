<template>
  <div class="index-component">
    <h2>Index Component</h2>
    <div class="m-4">
      <b-button
        variant="outline-dark"
        size="sm"
        squared
        @click="showAllUsers"
      >
        <span class="text-uppercase">show all users</span>
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
import HttpService from '@/services/HttpService'

export default {
  name: 'IndexComponent',
  data () {
    return {
      users: null,
      columns: [
        {
          key: 'id',
          sortable: true,
          label: '#'
        },
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'email',
          sortable: true
        },
        {
          key: 'phone',
          sortable: false
        },
        {
          key: 'status',
          sortable: true
        },
        {
          key: 'role_id',
          sortable: true,
          label: 'Role',
          variant: 'secondary',
          formatter: (value, key, item) => {
            return value === 1 ? '' : 'user'
          }
        },
        {
          key: 'password',
          sortable: false
        },
        {
          key: 'created_at',
          label: 'Created',
          sortable: true,
          variant: 'primary'
        },
        {
          key: 'verified_at',
          label: 'Verified',
          sortable: true,
          variant: 'primary'
        }
      ]
    }
  },
  methods: {
    showAllUsers () {
      HttpService.getAllUsers().then(response => {
        console.log(response.data)
        this.users = response.data
      }).catch(error => {
        console.log(error)
      }).finally(
        () => console.log('finally')
      )
    }
  }
}
</script>

<style scoped>
</style>
