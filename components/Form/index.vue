<script src="./contact-form.js"></script>
<style lang="scss" src="./contact-form.scss" scoped></style>

<template>
  <b-form
    :class="isLoading ? `submitting` : ''"
    @submit="sendContactForm"
  >
    <b-row>
      <b-col cols="12" md="12">
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
      <b-col cols="12" md="6">
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
      <b-col cols="12" md="6">
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
      <b-col cols="12" md="12">
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
      <b-col cols="12" md="4">
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
      <b-col cols="12" md="8">
        <span v-if="contactEmail">ou mande um e-mail para: <a :href="`mailto:${contactEmail}`" v-text="contactEmail" /></span>
      </b-col>
    </b-row>
  </b-form>
</template>
