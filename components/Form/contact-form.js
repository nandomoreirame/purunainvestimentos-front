import { mapState } from 'vuex'
import { mask } from 'vue-the-mask'
import { required, minLength, email } from 'vuelidate/lib/validators'
import service from '@/service'

export default {
  directives: { mask },
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
      name: { required, minLength: minLength(2) },
      email: { required, email },
      phone: { required, minLength: minLength(14) },
      message: { required, minLength: minLength(4) }
    }
  },
  computed: {
    ...mapState({
      contactEmail: ({ wordpress }) => wordpress.options.contact_email
    }),
    formName: {
      get () { return this.form.name },
      set (name) {
        this.form.name = name
        this.$v.form.name.$touch()
      }
    },
    formEmail: {
      get () { return this.form.email },
      set (email) {
        this.form.email = email
        this.$v.form.email.$touch()
      }
    },
    formPhone: {
      get () { return this.form.phone },
      set (phone) {
        this.form.phone = phone
        this.$v.form.phone.$touch()
      }
    },
    formMessage: {
      get () { return this.form.message },
      set (message) {
        this.form.message = message
        this.$v.form.message.$touch()
      }
    }
  },
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
