<template>
  <Contact
    :loading="loading"
    :contact="contact"
    :year="year"
    @submit="handleSubmit"
    @update="update"
  />
</template>

<script>

import Contact from './_components/Contact'
import { mapGetters } from 'vuex'

export default {
  name: 'ContactModule',
  components: {
    Contact
  },
  computed: {
    ...mapGetters({
      loading: 'contact/loading'
    })
  },
  data () {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      defaultContact: {
        name: '',
        email: '',
        message: ''
      },
      year: new Date().getFullYear()
    }
  },
  methods: {
    handleSubmit (event) {
      this.$store.dispatch('contact/send', this.contact)
      this.contact = { ...this.defaultContact }
    },
    update (payload) {
      this.contact = { ...this.contact, ...payload }
    }
  }
}
</script>
