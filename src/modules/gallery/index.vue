<template>
  <Gallery
    :slides="slides"
    :numberOfItems="numberOfItems"
    :show="show"
  />
</template>

<script>

import Gallery from './_components/Gallery'
import { mapGetters } from 'vuex'

export default {
  name: 'GalleryModule',
  computed: {
    ...mapGetters({
      list: 'experience/list'
    }),
    slides () {
      if (this.list === null) return []
      return this.list.filter(experience => experience.gallery)
    },
    numberOfItems () {
      return (this.windowWidth < 700) ? 1.25 : 2.25
    }
  },
  components: {
    Gallery
  },
  created () {
    this.$store.dispatch('experience/getList')
  },
  data () {
    return {
      windowWidth: 0,
      show: true
    }
  },
  watch: {
    numberOfItems (newVal, oldVal) {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  mounted () {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
}
</script>
