<template>
  <b-form
    :class="isLoading ? `submitting` : ''"
    @submit="sendContactForm"
  >
    <b-row>
      <b-col col md="12">
        <b-form-group
          id="input-group-name"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="formName"
            type="text"
            :state="setState('name')"
            placeholder="Nome"
            :readonly="isLoading"
            required
          />
          <b-form-invalid-feedback
            v-if="$v.form.name.$dirty && !$v.form.name.required"
            v-html="`O <strong>Nome</strong> é obrigatório!`"
          />
          <b-form-invalid-feedback
            v-if="$v.form.name.$dirty && !$v.form.name.minLength"
            v-html="`O <strong>Nome</strong> precisa ter no mínimo ${$v.form.name.$params.minLength.min} letras!`"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col col md="6">
        <b-form-group
          id="input-group-email"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="formEmail"
            type="email"
            :state="setState('email')"
            placeholder="Email"
            :readonly="isLoading"
            required
          />
          <b-form-invalid-feedback
            v-if="$v.form.email.$dirty && !$v.form.email.required"
            v-html="`O <strong>Email</strong> é obrigatório!`"
          />
          <b-form-invalid-feedback
            v-if="$v.form.email.$dirty && !$v.form.email.email"
            v-html="`O <strong>Email</strong> é inválido!`"
          />
        </b-form-group>
      </b-col>
      <b-col col md="6">
        <b-form-group
          id="input-group-phone"
          label-for="input-phone"
        >
          <b-form-input
            id="input-phone"
            v-model.number="formPhone"
            v-mask="['(##) ####-####', '(##) #####-####']"
            type="tel"
            :state="setState('phone')"
            placeholder="Telefone"
            :readonly="isLoading"
            required
          />
          <b-form-invalid-feedback
            v-if="$v.form.phone.$dirty && !$v.form.phone.required"
            v-html="`O <strong>Telefone</strong> é obrigatório!`"
          />
          <b-form-invalid-feedback
            v-if="$v.form.phone.$dirty && !$v.form.phone.minLength"
            v-html="`O <strong>Telefone</strong> precisa ter no mínimo ${$v.form.phone.$params.minLength.min} digitos!`"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col col md="12">
        <b-form-group
          id="input-group-message"
          label-for="input-message"
        >
          <b-form-textarea
            id="textarea"
            v-model="formMessage"
            placeholder="Mensagem"
            :readonly="isLoading"
            :state="setState('message')"
            rows="3"
            max-rows="6"
          />
          <b-form-invalid-feedback
            v-if="$v.form.message.$dirty && !$v.form.message.required"
            v-html="`A <strong>Mensagem</strong> é obrigatório!`"
          />
          <b-form-invalid-feedback
            v-if="$v.form.message.$dirty && !$v.form.message.minLength"
            v-html="`A <strong>Mensagem</strong> precisa ter no mínimo ${$v.form.message.$params.minLength.min} letras!`"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <!-- <pre>{{ $v }}</pre> -->
    <transition name="message">
      <b-alert
        v-if="contact.message"
        show
        dismissible
        :variant="contact.type || 'danger'"
        v-html="contact.message"
      />
    </transition>
    <b-row class="form-footer">
      <b-col col md="4">
        <b-button
          type="submit"
          block
          variant="primary"
          :disabled="isLoading || $v.$invalid"
        >
          <span v-if="isLoading">
            <b-spinner small type="grow" />
            <span>&nbsp;Enviando, aguarde...</span>
          </span>
          <span v-else>Enviar</span>
        </b-button>
      </b-col>
      <b-col col md="8">
        <span>ou mande um e-mail para: <a href="mailto:contato@purunainvestimentos.com.br">contato@purunainvestimentos.com.br</a></span>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { mask } from 'vue-the-mask'
import { required, minLength, email } from 'vuelidate/lib/validators'
import service from '@/service'

export default {
  directives: {
    mask
  },
  data () {
    return {
      contact: {},
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      isLoading: false,
      submitted: false,
      error: false
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        minLength: minLength(14)
      },
      message: {
        required,
        minLength: minLength(4)
      }
    }
  },
  computed: {
    formName: {
      get () {
        return this.form.name
      },
      set (name) {
        this.form.name = name
        this.$v.form.name.$touch()
      }
    },
    formEmail: {
      get () {
        return this.form.email
      },
      set (email) {
        this.form.email = email
        this.$v.form.email.$touch()
      }
    },
    formPhone: {
      get () {
        return this.form.phone
      },
      set (phone) {
        this.form.phone = phone
        this.$v.form.phone.$touch()
      }
    },
    formMessage: {
      get () {
        return this.form.message
      },
      set (message) {
        this.form.message = message
        this.$v.form.message.$touch()
      }
    }
  },
  // mounted () {
  //   this.resetContactForm()
  // },
  methods: {
    setState (to) {
      if (!this.$v.form[to].$dirty) {
        return null
      }

      if (to === 'email') {
        return this.$v.form[to].required && this.$v.form[to].email && !this.$v.form[to].$invalid
      }

      return this.$v.form[to].required && this.$v.form[to].minLength && !this.$v.form[to].$invalid
    },
    sendContactForm (e) {
      e.preventDefault()
      this.isLoading = true
      this.submitted = true
      this.$v.$touch()

      if (!this.$v.$invalid) {
        service.contact(this.form)
          .then(({ contact }) => {
            this.contact = contact
            this.isLoading = false
            this.resetContactForm()
          })
          .catch(err => {
            this.error = true
            this.isLoading = false
            this.contact = err
            console.error('error', err)
          })
      }
    },
    resetContactForm () {
      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
      this.$v.$reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.form-control {
  border: 0;
  border-bottom: 2px solid #d4d4d4;
  border-radius: 0;
  padding: 15px 0;
  font-size: 16px;
  color: #000;
  height: auto;

  &:focus {
    outline: none;
    box-shadow: none;
    border-bottom-color: #007aff;
  }

  &.is-valid {
    border-bottom-color: #28a745;
  }

  &.is-invalid {
    color: #28a745;
    border-bottom-color: #dc3545;
  }

  &:disabled,
  &[readonly] {
    background-color: #fff;
    cursor: not-allowed;
    opacity: .45;
  }
}

.alert.alert-success,
.alert.alert-danger {
  border: 0;
  border-radius: 0;
  margin: 0;
}

.form-footer {
  background-color: #1c1c1c;
  margin: 40px 0 80px;

  .btn {
    font-size: 14px;
    font-weight: 800;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    justify-content: center;
    border-radius: 0;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .col {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    line-height: 1.71;
    color: #979ea6;

    a {
      color: #fff;
    }
  }
}

.message {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
