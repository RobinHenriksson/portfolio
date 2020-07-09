<template>
  <Experience :list="list"/>
</template>

<script>

import Experience from './_components/Experience'
import { mapGetters } from 'vuex'

export default {
  name: 'ExperienceModule',
  components: {
    Experience
  },
  computed: {
    ...mapGetters({
      list: 'experience/list'
    })
  },
  created () {
    this.$store.dispatch('experience/getList')
  }
}
</script>
