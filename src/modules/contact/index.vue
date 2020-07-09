<template>
  <Contact
    :contact="contact"
    :year="year"
    @submit="handleSubmit"
    @update="update"
  />
</template>

<script>

import Contact from './_components/Contact'

export default {
  name: 'ContactModule',
  components: {
    Contact
  },
  data () {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      year: new Date().getFullYear()
    }
  },
  methods: {
    handleSubmit (event) {
      console.log(this.contact)
    },
    update (payload) {
      this.contact = { ...this.contact, ...payload }
    }
  }
}
</script>
