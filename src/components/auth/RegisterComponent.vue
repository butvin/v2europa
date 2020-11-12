<template>
  <div class="register-component">
    <b-container>
      <b-row>
        <b-col>
          <div class="registration-form">
            <ValidationObserver v-slot="{ passes }">
              <b-form
                @submit.prevent="passes(onFormSubmit)"
                v-if="showForm"
                class="p-2 mb-4 mt-4"
              >
                <!-- Title -->
                <b-form-row class="mt-4">
                  <b-col>
                    <h3 class="text-center">Sign up</h3>
                  </b-col>
                </b-form-row>
                <!-- Email field -->
                <b-form-row class="mt-4">
                  <b-col sm="1"></b-col>
                  <b-col sm="11">
                    <b-form-text class="text-uppercase">email address</b-form-text>
                  </b-col>
                  <b-col sm="1">
                    <div class="float-right">
                      <b-icon icon="envelope-fill" font-scale="1.75"></b-icon>
                    </div>
                  </b-col>
                  <b-col sm="11">
                    <ValidationProvider
                      name="email"
                      rules="min:3|email|max:320"
                      v-slot="{
                        errors,
                        ariaMsg,
                        ariaInput
                      }"
                    >
                      <b-form-input
                        v-model="form.email"
                        v-bind="ariaInput"
                        class="w-full leading-normal bg-transparent"
                        :class="{'input': true, 'is-invalid': errors[0] }"
                        autocomplete="off"
                        type="text"
                        name="email"
                        lazy-formatter
                        trim
                      ></b-form-input>
                        <b-form-invalid-feedback v-bind="ariaMsg">
                          <b-icon icon="exclamation-circle-fill"></b-icon>
                          {{ errors[0] }}
                          <pre>{{ errors }}</pre>
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
                    <b-form-input type="text" name="phone" v-model="form.phone"></b-form-input>
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
                    <b-form-input name="name" type="text" v-model="form.name"></b-form-input>
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
                    <b-form-input type="password" name="password" v-model="form.password"></b-form-input>
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
                    <b-form-input type="password" id="rePassword" v-model="form.rePassword"></b-form-input>
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
                  <b-col class="text-center">
                    <b-button
                      @click="onFormSubmit"
                      class="w-25"
                      variant="success"
                      pill
                    >
                      <span class="text-uppercase">sing up</span>
                    </b-button>
                  </b-col>
                </b-form-row>
                <!-- Reset button -->
                <b-form-row class="mt-4">
                  <b-col class="text-center">
                    <b-button
                      @click="onFormReset"
                      class="w-25"
                      variant="outline-danger"
                      pill
                    >
                      <span class="text-uppercase">clear</span>
                    </b-button>
                  </b-col>
                </b-form-row>
                <!-- Register via social networks -->
                <b-form-row class="mt-4">
                  <b-col>
                    <div class="text-center">
                      <b-button variant="primary" disabled>
                        <b-icon icon="grid-fill"></b-icon>
                        <span>Facebook</span>
                      </b-button>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="text-center">
                      <b-button variant="warning" disabled>
                        <b-icon icon="grid-fill"></b-icon>
                        <span>Google</span>
                      </b-button>
                    </div>
                  </b-col>
                </b-form-row>
              </b-form>
            </ValidationObserver>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import httpService from '@/services/HttpService'
// import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  ValidationProvider,
  ValidationObserver
} from 'vee-validate/dist/vee-validate.full'
// toDo: import rules!!!
// import { required, email } from 'vee-validate/dist/rules'

export default {
  name: 'RegisterComponent',
  components: {
    ValidationProvider,
    ValidationObserver
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
      const userData = {
        name: this.form.name,
        email: this.form.email ? this.form.email : null,
        phone: this.form.phone ? this.form.phone : null,
        password: this.form.password
      }
      httpService.$create(userData).then(response => {
        console.log(response.data)
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
  background: yellow;
  /*background: #FFFFF3;*/
}
.registration-form {
  margin: 20px auto;
  width: 50%;
  background: #fffff3;
  min-width: 375px;
  border: 1px solid #CED4DA;
}
</style>
