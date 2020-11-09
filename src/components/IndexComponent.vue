<template>
  <div class="index-component">
    <h2>Index Component</h2>
    <div>
      <b-button
        variant="outline-danger"
        size="lg"
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
    <b-container fluid="true">
      <div
        v-for="user in users"
        :key="user.id"
      >
        <b-row >
          <b-col>
            <pre>{{ user }}</pre>
          </b-col>
        </b-row>
      </div>
    </b-container>
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
          label: '#ID'
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
            // return { value, key, item }
          }
        },
        {
          key: 'password',
          sortable: false
        },
        {
          key: 'api_token',
          sortable: false,
          variant: 'warning'
        },
        {
          key: 'gl_token',
          sortable: false,
          variant: 'warning'
        },
        {
          key: 'fb_token',
          sortable: false,
          variant: 'warning'
        },
        {
          key: 'created_at',
          label: 'Created',
          sortable: true,
          variant: 'info'
        },
        {
          key: 'verified_at',
          label: 'Verified',
          sortable: true,
          variant: 'info'
        },
        {
          key: 'updated_at',
          label: 'Updated',
          sortable: true,
          variant: 'info'
        }
      ]
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
<template>
  <div class="index-component">
    <h2>Index Component</h2>
    <div>
      <b-button
        class="mb-4"
        variant="outline-danger"
        size="lg"
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
      <b-skeleton-table
        :rows="5"
        :columns="4"
        :table-props="{ bordered: true, striped: true, small }"
      ></b-skeleton-table>
    </div>
    <b-container fluid="true">
      <div
        v-for="user in users"
        :key="user.id"
      >
        <b-row >
          <b-col>
            <pre>{{ user }}</pre>
          </b-col>
        </b-row>
      </div>
    </b-container>
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
          label: '#ID'
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
          formatter: (value, key, user) => {
            return value === 1 ? [ value, key, user ] : 'client'
          }
        },
        {
          key: 'password',
          sortable: false
        },
        {
          key: 'api_token',
          sortable: false,
          variant: 'warning'
        },
        {
          key: 'gl_token',
          sortable: false,
          variant: 'warning'
        },
        {
          key: 'fb_token',
          sortable: false,
          variant: 'warning'
        },
        {
          key: 'created_at',
          label: 'Created',
          sortable: true,
          variant: 'info'
        },
        {
          key: 'verified_at',
          label: 'Verified',
          sortable: true,
          variant: 'info'
        },
        {
          key: 'updated_at',
          label: 'Updated',
          sortable: true,
          variant: 'info'
        }
      ]
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
