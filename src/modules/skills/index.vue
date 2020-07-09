<template>
  <Skills :list="list" />
</template>

<script>

import Skills from './_components/Skills'
import { mapGetters } from 'vuex'

export default {
  name: 'SkillsModule',
  components: {
    Skills
  },
  computed: {
    ...mapGetters({
      list: 'skills/list'
    })
  },
  created () {
    this.$store.dispatch('skills/getList')
  }
}
</script>
