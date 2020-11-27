<template>
  <div class="register-component">
    <b-container fluid="sm">
      <b-row no-gutters>
        <b-col>
          <div class="registration-form" v-if="showForm">
            <ValidationObserver v-slot="{ passes }" ref="form">
              <b-form @submit.prevent="passes(onFormSubmit)" novalidate>
                <!-- Title -->
                <b-form-row class="mt-4">
                  <b-col>
                    <p class="lead text-center">Sign&nbsp;up</p>
                  </b-col>
                </b-form-row>
                <!-- Email -->
                <b-form-row class="mt-2">
                  <b-col>
                    <InputField
                      v-model="form.email"
                      vv-field-name="email"
                      label="Email"
                      rules="email|max:320"
                      placeholder="Email address"
                      icon="envelope-fill"
                      icon-size="2"
                      size="lg"
                      group-description="groupDescription groupDescription groupDescription groupDescription groupDescription groupDescription groupDescription"
                      top-description="top-description"
                      bottom-description="bottom-description"
                      autocomplete="off"
                      description="MAIN INPUT FIELD COMPONENT"
                    />
                  </b-col>
                </b-form-row>
                <!-- Phone -->
                <b-form-row class="mt-2">
                  <b-col>
                    <InputField v-model="form.phone" rules="numeric|min:12" label="Phone" />
                  </b-col>
                </b-form-row>
                <!-- Name -->
                <b-form-row class="mt-2">
                  <b-col>
                    <InputField v-model="form.name" rules="required|min:2" label="Name" placeholder="Name" />
                  </b-col>
                </b-form-row>
                <!-- Password -->
                <b-form-row class="mt-2">
                  <b-col>
                    <InputField
                      v-model="form.password"
                      type="password"
                      label="Fill password"
                      placeholder="Your password"
                      rules="required|min:6|max:32|confirmed:confirmRef"
                    />
                  </b-col>
                </b-form-row>
                <!-- Confirm password -->
                <b-form-row class="mt-2">
                  <b-col>
                    <InputField
                      v-model="form.rePassword"
                      type="password"
                      label="Confirm password"
                      placeholder="Your password"
                      rules="required"
                      description="Repeat your password you entered before"
                      vid="confirmRef"
                    />
                  </b-col>
                </b-form-row>
                <!-- Terms checkbox field -->
                <b-form-row class="mt-2">
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
                <b-form-row class="mt-2">
                  <b-col class="text-center">
                    <b-button
                      class="w-100"
                      @click="onFormSubmit"
                      variant="success"
                      squared
                    >
                      <span>sing&nbsp;up</span>
                    </b-button>
                  </b-col>
                </b-form-row>
                <!-- Reset button -->
                <b-form-row class="mt-2">
                  <b-col class="text-center">
                    <b-button
                      class="w-100"
                      @click="onFormReset"
                      variant="outline-danger"
                      squared
                    >
                      <span class="">clear</span>
                    </b-button>
                  </b-col>
                </b-form-row>
                <!-- Register via social networks -->
                <b-form-row class="mt-2">
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
import { ValidationObserver } from 'vee-validate/dist/vee-validate.full'

// toDo: import rules!!!
// import { required, email } from 'vee-validate/dist/rules'
// import { ValidationProvider, ValidationObserver } from 'vee-validate'

import InputField from '@/components/auth/elements/InputField'

export default {
  name: 'RegisterComponent',
  components: {
    // ValidationProvider,
    ValidationObserver,
    InputField
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
        this.$refs.observer.reset()
      })
    }
  }
}
</script>

<style scoped>
.register-component {
  background: #E0E3DA;
}
.registration-form {
  margin: 0 auto;
  background: #fffff3;
  border: 1px solid #CED4DA;
}
</style>
