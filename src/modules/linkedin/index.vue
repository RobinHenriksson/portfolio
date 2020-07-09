<template>
  <Linkedin v-if="!linkOnly"
    :username="profile.linkedin_username"
    :link="profile.linkedin_link"
  />
  <LinkedinLink v-else
    :username="profile.linkedin_username"
    :link="profile.linkedin_link"
    />
</template>

<script>

import Linkedin from './_components/Linkedin'
import LinkedinLink from './_components/LinkedinLink'
import { mapGetters } from 'vuex'

export default {
  name: 'LinkedinModule',
  props: {
    linkOnly: { default: false }
  },
  computed: {
    ...mapGetters({
      profile: 'profile/get'
    })
  },
  components: {
    Linkedin,
    LinkedinLink
  }
}
</script>
