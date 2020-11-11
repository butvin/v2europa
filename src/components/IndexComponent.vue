<template>
  <div class="index-component">
    <b-container>
      <b-row>
        <p class="display-4 mt-4">Index Component</p>
      </b-row>
      <b-row>
        <div class="mt-2 mb-2">
          <p class="lead">Connected users:</p>
          <b-button
            @click="showAllUsers"
            class="font-weight-lighter"
            variant="primary"
            size="lg"
            block
            pill
          >
            <span class="text-uppercase m-2">{{ 'show' }}</span>
          </b-button>
        </div>
        <div v-if="users">
          <b-table
            head-variant="light"
            bordered
            small
            hover
            caption-top
            :items="users"
            :fields="columns"
          >
            <b-thead></b-thead>
            <b-tbody></b-tbody>
            <b-tfoot></b-tfoot>
          </b-table>
        </div>
      </b-row>
    </b-container>
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
        { key: 'created_at', label: 'Created', sortable: true, variant: 'success' },
        { key: 'verified_at', label: 'Verified', sortable: true, variant: 'dark' }
      ]
    }
  },
  methods: {
    showAllUsers () {
      httpService.$getAll().then(response => {
        console.log(response.status)
        console.log(response.statusCode)
        console.log(response.statusText)
        console.log(response.data)
        this.users = response.data
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        console.log('finally->getAll()')
      })
    }
  }
}
</script>

<style scoped>
</style>
