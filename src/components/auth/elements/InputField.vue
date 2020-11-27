<template>
  <ValidationProvider
    class="input-field-component"
    tag="div"
    :vid="vid"
    :rules="rules"
    :name="vvFieldName || label"
    v-slot="{
      errors,
      ariaInput,
      ariaMsg,
      required
    }"
  >
    <b-form-text
      class="input-field-group-description"
      v-if="groupDescription"
      :group-description="groupDescription"
      text-variant="default"
      tag="div"
    >
      {{groupDescription}}
    </b-form-text>
    <b-form-group
      class="input-field-group-container"
      :label="label + (required ? ' *' : '')"
      :label-for="`_${name}_${type}_id`"
      :label-class="{
        'input-field-group-container-label': true,
        'text-danger': errors[0],
        'text-primary': hasValue
      }"
      label-cols-sm="0"
      label-cols-md="1"
      label-cols-lg="1"
      label-cols-xl="2"
      label-align-sm="left"
      label-align-md="center"
      label-align-lg="right"
      label-align-xl="right"
      :description="description"
      :state="state"
    >
      <template
        #label
        class="slot-label"
      >
        <span>{{ label }}</span>
      </template>
      <b-form-text
        v-if="topDescription"
        class="input-field-top-description"
      >
        {{topDescription}}
      </b-form-text>
      <b-input-group
        class="input-field-group"
        :append-html="appendHtml"
        :prepend-html="prependHtml"
      >
        <b-input-group-prepend
          class="input-field-prepend"
          v-if="icon"
          is-text
        >
          <b-icon
            class="input-field-prepend-icon"
            :icon="icon"
            :variant="iconVariant"
            :font-scale="iconSize"
            :class="{'text-danger': errors[0], 'text-primary': hasValue}"
          >
          </b-icon>
        </b-input-group-prepend>
        <b-form-input
          :size="size"
          v-model="innerValue"
          v-bind="ariaInput"
          :vv-field-name="vvFieldName"
          :top-description="topDescription"
          class="input-field"
          :class="{'is-invalid': errors[0], 'is-valid': hasValue}"
          :type="type"
          :placeholder="placeholder"
          :name="name"
          :id="`_${name}_${type}_id`"
          ref="inputFieldRef"
          :autocomplete="autocomplete"
          :bottom-description="bottomDescription"
          trim
        ></b-form-input>
        <template v-if="true" #append>
          <b-input-group-text class="input-field-append">
            <b-icon
              class="input-field-append-icon"
              icon="envelope-fill"
              :variant="iconVariant"
            ></b-icon>
          </b-input-group-text>
        </template>
        <b-form-invalid-feedback
          v-bind="ariaMsg"
          class="input-field-invalid-feedback"
          tag="div"
          tooltip>
          <b-icon icon="exclamation-circle-fill"></b-icon>
          {{ errors[0] }}
        </b-form-invalid-feedback>
      </b-input-group>
      <b-form-text
        class="input-field-bottom-description"
        v-if="bottomDescription"
      >
        {{ bottomDescription }}
      </b-form-text>
    </b-form-group>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider, extend, localize } from 'vee-validate/dist/vee-validate.full'
// import en from 'vee-validate/dist/locale/en.json'

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
    label: {
      type: String,
      default: ''
    },
    vvFieldName: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    groupDescription: {
      type: String,
      default: ''
    },
    topDescription: {
      type: String,
      default: ''
    },
    bottomDescription: {
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
    vid: {
      type: String,
      default: undefined
    },
    prependHtml: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: ''
    },
    iconVariant: {
      type: String,
      default: ''
    },
    appendHtml: {
      type: String,
      default: ''
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
    },
    state () {
      return true
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

.input-field-component {
  padding: 1rem 0;
  background: tomato;
  overflow: hidden;
}
.input-field-component input {
  border-radius: 0;
  background: #272625;
  color: #f9d423;
}
.input-field-invalid-feedback {
  float: right !important;
  background: tomato;
  border-radius: 0;
  opacity: 1;
  border: 1px solid whitesmoke;
  padding: .5rem;
}
.input-field-component input::placeholder {
  letter-spacing: 4px;
  color: tomato;
}
/*-----------------------------------------------------*/
.input-field-group-container {
  padding: 1rem 0;
  background: #272625;
  color: #fffff3;
}

.input-field-group-container-label {
  background: #566270;
  color: yellowgreen;
}

.input-field-group-description {
  background: #f9d423;
  padding: 1rem 2rem;
}

.input-field-group {
  padding: 1rem 1rem;
  background: #A593E0;
/*  */
}

.input-field-top-description {
  color: aquamarine !important;
  background: darkslategrey;
  padding: 1rem 1rem;
}

.input-field-prepend {
  border-radius: 0;
  font-size: 4.4rem !important;
}

.input-field-prepend-icon {
  padding: 1rem 1rem;
  background: indigo;
}

.input-field input {

}

.input-field-append {
  background: grey;
  color: tomato;
}

.input-field-append-icon {
  font-size: 4.4rem !important;
}

.input-field-bottom-description {
  color: aquamarine !important;
  background: darkslategrey;
  padding: 1rem 1rem;
}

.input-field-component input .has-value,
.input-field-component input :focus {
  border: 4px solid crimson !important;
 }

.input-field-component label {
  /*margin-top: 1rem;*/
  user-select: none;
}

.input-field-component input.has-value ~ label,
.input-field-component input:focus ~ label {
  transition: all 0.5s ease-in-out;
}

</style>
