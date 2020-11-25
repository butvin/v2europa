<template>
  <ValidationProvider
    class="input-field-component position-relative w-100 m-0 p-0"
    tag="div"
    :vid="vid"
    :rules="rules"
    :name="fieldTitle"
    v-slot="{
      errors,
      ariaInput,
      ariaMsg,
      required
    }"
  >
    <b-form-group
      class="input-field-group m-0 p-0"
      :label="fieldTitle + (required ? ' *' : '')"
      :label-for="name+'_'+type+'_id'"
      label-cols-sm="2"
      label-cols-md="5"
      label-cols-lg="2"
    >
      <b-form-input
        v-model="innerValue"
        v-bind="ariaInput"
        class="input-field w-100 bg-transparent"
        :class="{'input': true, 'is-invalid': errors[0], 'is-valid': hasValue }"
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :id="name+'_'+type+'_id'"
        ref="inputFieldRef"
        :autocomplete="autocomplete"
        trim
      ></b-form-input>
      <b-form-text
        v-if="description"
        class="input-field-description"
      >{{ description }}</b-form-text>
      <b-form-invalid-feedback
        v-bind="ariaMsg"
        class="input-field-error-area w-100 position-absolute"
      >
        <b-icon icon="exclamation-circle-fill"></b-icon>
        {{ errors[0] }}
      </b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>

<script>
import {
  ValidationProvider,
  extend,
  localize
} from 'vee-validate/dist/vee-validate.full'

// import ru from 'vee-validate/dist/locale/en.json'

localize({
  en: {
    messages: {
      required: 'You must provide a {_field_}',
      min: 'Field "{_field_}" must have no less than {length} characters',
      max: (_, { length }) => `this field must have no more than ${length} characters`
    }
  },
  ru: {
    messages: {
      required: 'Поле {_field_} обязательное',
      min: 'Не меньше {length} символов',
      max: (_, { length }) => `это поле must have не больше чем ${length} символов`
    }
  }
})

extend('myCustom', (value) => {
  if (value !== 'butvin') {
    return true
  }

  return '>>>FATAL ERROR>>>\nNo `butvin`'
})

export default {
  name: 'InputField',
  components: { ValidationProvider },
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    formatter: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: 'on',
      validator (value) {
        return ['on', 'off'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return [
          'email',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'url'
        ].includes(value)
      }
    },
    value: {
      type: null,
      default: ''
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    fieldTitle: {
      type: String,
      default: ''
    },
    vid: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    innerValue: ''
  }),
  methods: {
    toUpperCaseFormatter (value) {
      return value.toUpperCase()
    }
  },
  computed: {
    hasValue () {
      return !!this.innerValue
    }
  },
  watch: {
    innerValue (value) {
      this.$emit('inputField', value)
    },
    value (val) {
      if (val !== this.innerValue) {
        this.innerValue = val
      }
    }
  }
}
</script>

<style scoped>
.input-field-component input {
  border-radius: 0;
  padding-bottom: 18px;
  position: relative;
  z-index: 99999;
  padding-top: 1.4rem;
}

.input-field-component input .has-value,
.input-field-component input :focus {
   outline: none;
 }

.input-field-component label {
  margin-top: 1rem;
  user-select: none;
}

.input-field-component input.has-value ~ label,
.input-field-component input:focus ~ label {
  font-size: 0.6rem;
  margin-top: 0;
  transition: all 0.2s ease-in-out;
}

</style>
