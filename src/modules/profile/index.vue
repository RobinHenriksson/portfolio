<template>
  <Profile
    :name="profile.name"
    :profession="profile.profession"
    :skills="profile.skills"
  />
</template>

<script>

import Profile from './_components/Profile'
import { mapGetters } from 'vuex'

export default {
  name: 'ProfileModule',
  components: {
    Profile
  },
  computed: {
    ...mapGetters({
      profile: 'profile/get'
    })
  },
  mounted () {
    this.$store.dispatch('profile/getProfile')
  }
}
</script>
