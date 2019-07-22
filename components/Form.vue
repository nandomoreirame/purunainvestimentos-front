<template>
  <b-form @submit="onSubmit">
    <b-row>
      <b-col col md="12">
        <b-form-group
          id="input-group-name"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="form.name"
            type="text"
            placeholder="Nome"
            required
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
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
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
            v-model="form.phone"
            type="tel"
            placeholder="Telefone"
            required
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
            v-model="form.message"
            placeholder="Mensagem"
            rows="3"
            max-rows="6"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="form-footer">
      <b-col col md="4">
        <b-button block variant="primary">
          <span>Enviar</span>
        </b-button>
      </b-col>
      <b-col col md="8">
        <span>ou mande um e-mail para: <a href="mailto:contato@purunainvestimentos.com.br">contato@purunainvestimentos.com.br</a></span>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log(JSON.stringify(this.form))
    },
    onReset (e) {
      e.preventDefault()

      this.form.name = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
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
</style>
