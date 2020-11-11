<template>
  <div class="register-component">
    <b-container>
      <ValidationObserver v-slot="{ passes }">
        <b-form
          @submit.prevent="passes(onFormSubmit)"
          v-if="showForm"
          class="registration-form shadow p-2 mb-4 mt-4 bg-white rounded"
        >
          <!-- Title -->
          <b-form-row class="m-2">
            <b-col>
              <p class="text-center text-uppercase font-weight-lighter display-4">sign up</p>
            </b-col>
          </b-form-row>
          <!-- Email field -->
          <b-form-row class="mt-2">
            <b-col sm="1"></b-col>
            <b-col sm="11">
              <b-form-text class="text-uppercase">Email address</b-form-text>
            </b-col>
            <b-col sm="1">
              <b-icon icon="envelope-fill" font-scale="1.75" class="float-right"></b-icon>
            </b-col>
            <b-col sm="11">
              <ValidationProvider rules="email" v-slot="{ errors }">
                <b-form-input
                  class="w-full leading-normal bg-transparent"
                  type="text"
                  name="email"
                  v-model="form.email"
                  size="sm"
                ></b-form-input>
                <b-form-invalid-feedback>
                  <span>{{ errors[0] }}</span>
                </b-form-invalid-feedback>
              </ValidationProvider>
            </b-col>
          </b-form-row>
          <!-- Phone field -->
          <b-form-row class="mt-4">
            <b-col sm="1"></b-col>
            <b-col sm="11">
              <b-form-text class="text-uppercase">Phone number</b-form-text>
            </b-col>
            <b-col sm="1">
              <b-icon icon="phone-fill" font-scale="1.75" class="float-right"></b-icon>
            </b-col>
            <b-col sm="11">
              <ValidationProvider rules="email" v-slot="{ errors }">
                <b-form-input type="text" name="phone" v-model="form.phone" size="sm"></b-form-input>
                <b-form-invalid-feedback>
                  <span>{{ errors[0] }}</span>
                </b-form-invalid-feedback>
              </ValidationProvider>
            </b-col>
          </b-form-row>
          <!-- User name field -->
          <b-form-row class="mt-4">
            <b-col sm="1"></b-col>
            <b-col sm="11">
              <b-form-text class="text-uppercase">Full name</b-form-text>
            </b-col>
            <b-col sm="1">
              <b-icon icon="person-fill" font-scale="1.75" class="float-right"></b-icon>
            </b-col>
            <b-col sm="11">
              <b-form-input name="name" type="text" v-model="form.name" size="sm"></b-form-input>
            </b-col>
          </b-form-row>
          <!-- Password field -->
          <b-form-row class="mt-4">
            <b-col sm="1"></b-col>
            <b-col sm="11">
              <b-form-text class="text-uppercase">Password</b-form-text>
            </b-col>
            <b-col sm="1">
              <b-icon icon="lock-fill" font-scale="1.75" class="float-right"></b-icon>
            </b-col>
            <b-col sm="11">
              <b-form-input type="password" name="password" v-model="form.password" size="sm"></b-form-input>
            </b-col>
          </b-form-row>
          <!-- Password confirmation field -->
          <b-form-row class="mt-4">
            <b-col sm="1"></b-col>
            <b-col sm="11">
              <b-form-text class="text-uppercase">Confirm password</b-form-text>
            </b-col>
            <b-col sm="1">
              <b-icon icon="lock-fill" font-scale="1.75" class="float-right"></b-icon>
            </b-col>
            <b-col sm="11">
              <b-form-input type="password" id="rePassword" v-model="form.rePassword" size="sm"></b-form-input>
            </b-col>
          </b-form-row>
          <!-- Terms checkbox field -->
          <b-form-row class="mt-4">
            <b-col class="text-center">
              <b-form-checkbox
                value="done"
                unchecked-value="undone"
                v-model="form.terms"
              >
                <p class="text-muted">I accept the terms and use</p>
              </b-form-checkbox>
            </b-col>
          </b-form-row>
          <!-- Sign up button -->
          <b-form-row class="mt-4">
            <b-col>
              <b-button
                @click="onFormSubmit"
                variant="success"
                class="w-50 m-auto"
                size="lg"
                block
                pill
              >
                <span class="text-uppercase">sing up</span>
              </b-button>
            </b-col>
          </b-form-row>
          <!-- Reset button -->
          <b-form-row class="mt-4">
            <b-col>
              <b-button
                @click="onFormReset"
                variant="outline-danger"
                class="btn w-50 m-auto"
                size="lg"
                block
                pill
              >
                <span class="text-uppercase">clear</span>
              </b-button>
            </b-col>
          </b-form-row>
          <!-- Register via social networks -->
          <b-form-row class="mt-4">
            <b-col sm="6" md="6" lg="6">
              <p class="text-center">Facebook</p>
            </b-col>
            <b-col sm="6" md="6" lg="6">
              <p class="text-center">Google</p>
            </b-col>
          </b-form-row>
        </b-form>
      </ValidationObserver>
    </b-container>
  </div>
</template>

<script>
import httpService from '@/services/HttpService'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'RegisterComponent',
  components: {
    ValidationProvider, ValidationObserver
  },
  data () {
    return {
      showForm: true,
      form: {
        name: '',
        email: '',
        phone: '',
        password: '',
        rePassword: '',
        terms: 'undone'
      }
    }
  },
  methods: {
    onFormSubmit (event) {
      event.preventDefault()
      const data = {
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        password: this.form.password
      }
      httpService.$create(data).then(response => {
        console.log(response)
      }).catch(error => {
        console.log('error->', error)
      }).finally(() => {
        console.log('finally->create')
      })
    },
    onFormReset (event) {
      event.preventDefault()
      this.form.email = ''
      this.form.phone = ''
      this.form.name = ''
      this.form.password = ''
      this.form.rePassword = ''
      this.form.terms = 'undone'
      this.showForm = false
      this.$nextTick(() => {
        this.showForm = true
      })
    }
  }
}
</script>

<style scoped>
.register-component {
  background: #FFFFF3;
  height: 100%;
}
.registration-form {
  border: 1px solid #CED4DA;
}
</style>
