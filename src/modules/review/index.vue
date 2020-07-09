<template>
  <Review :color="color" />
</template>

<script>

import Review from './_components/Review'

export default {
  name: 'ReviewModule',
  props: {
    mode: { default: 'dark' }
  },
  computed: {
    color () {
      if (this.mode === 'dark') {
        return 'black'
      } else {
        return 'white'
      }
    }
  },
  components: {
    Review
  }
}
</script>
