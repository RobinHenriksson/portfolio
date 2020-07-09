<template>
  <Education v-if="list !== null" :first="list[0]" :second="list[1]" />
</template>

<script>

import Education from './_components/Education'
import { mapGetters } from 'vuex'

export default {
  name: 'EducationModule',
  components: {
    Education
  },
  computed: {
    ...mapGetters({
      list: 'education/list'
    })
  },
  created () {
    this.$store.dispatch('education/getList')
  }
}
</script>
