<template>
  <div class="register-component">
    <b-form
      id="registration-form"
      v-if="showForm"
      @submit="onSubmit"
      @reset="onReset"
      class="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <!-- Title area-->
      <b-form-row>
        <b-col sm="12" class="text-center">
          <h2><span>Registration</span></h2>
        </b-col>
      </b-form-row>
      <!-- Email field -->
      <b-form-row>
        <b-col sm="1"></b-col>
        <b-col sm="11">
          <b-form-text>Email address</b-form-text>
        </b-col>
        <b-col sm="1">
          <b-icon icon="envelope-fill" font-scale="1.75" class="float-right"></b-icon>
        </b-col>
        <b-col sm="11">
          <b-form-input type="text" name="email" v-model="form.email"></b-form-input>
        </b-col>
      </b-form-row>
      <!-- Phone field -->
      <b-form-row>
        <b-col sm="1"></b-col>
        <b-col sm="11">
          <b-form-text>Phone number</b-form-text>
        </b-col>
        <b-col sm="1">
          <b-icon icon="phone-fill" font-scale="1.75" class="float-right"></b-icon>
        </b-col>
        <b-col sm="11">
          <b-form-input type="text" name="phone" v-model="form.phone"></b-form-input>
        </b-col>
      </b-form-row>
      <!-- User name field -->
      <b-form-row>
        <b-col sm="1"></b-col>
        <b-col sm="11">
          <b-form-text>Full name</b-form-text>
        </b-col>
        <b-col sm="1">
          <b-icon icon="person-fill" font-scale="1.75" class="float-right"></b-icon>
        </b-col>
        <b-col sm="11">
          <b-form-input name="name" type="text" v-model="form.name"></b-form-input>
        </b-col>
      </b-form-row>
      <!-- Password field -->
      <b-form-row>
        <b-col sm="1"></b-col>
        <b-col sm="11">
          <b-form-text>Password</b-form-text>
        </b-col>
        <b-col sm="1">
          <b-icon icon="lock-fill" font-scale="1.75" class="float-right"></b-icon>
        </b-col>
        <b-col sm="11">
          <b-form-input type="password" name="password" v-model="form.password"></b-form-input>
        </b-col>
      </b-form-row>
      <!-- Confirmation password field -->
      <b-form-row>
        <b-col sm="1"></b-col>
        <b-col sm="11">
          <b-form-text>Confirm password</b-form-text>
        </b-col>
        <b-col sm="1">
          <b-icon icon="lock-fill" font-scale="1.75" class="float-right"></b-icon>
        </b-col>
        <b-col sm="11">
          <b-form-input type="password" name="rePassword" v-model="form.rePassword"></b-form-input>
        </b-col>
      </b-form-row>
      <!-- Terms checkbox field -->
      <b-form-row class="mt-4">
        <b-col sm="12" md="12" lg="12" class="text-center">
          <b-form-checkbox aria-label="ARIA-LABEL"
            name="terms"
            value="done"
            unchecked-value="undone"
            v-model="form.terms"
          >
            <p>I accept the terms and use</p>
          </b-form-checkbox>
        </b-col>
      </b-form-row>
      <!-- Sign up button -->
      <b-form-row class="mt-4">
        <b-col sm="12" md="12" lg="12">
          <b-button type="submit" variant="outline-success" block squared>
            <span class="text-uppercase">sing&nbsp;up</span>
          </b-button>
        </b-col>
      </b-form-row>
      <!-- Reset button -->
      <b-form-row class="mt-4">
        <b-col sm="12" md="12" lg="12">
          <b-button type="reset" variant="outline-danger" block squared>
            <span class="text-uppercase">reset</span>
          </b-button>
        </b-col>
      </b-form-row>
      <b-form-row class="mt-5 mb-2">
        <b-col sm="6" md="6" lg="6">
          <p class="text-center">Facebook</p>
        </b-col>
        <b-col sm="6" md="6" lg="6">
          <p class="text-center">Google</p>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
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
    onSubmit () {
      return true
    },
    onReset () {
      return true
    }
  }
}
</script>

<style scoped>
.register-component {
  background: #FFFFF3;
  width: 50%;
  height: 100%;
}
#registration-form {
  padding: 1.5rem;
  border: 1px solid #CED4DA;
}
</style>
