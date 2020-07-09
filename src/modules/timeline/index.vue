<template>
  <Timeline :list="list" />
</template>

<script>

import Timeline from './_components/Timeline'

export default {
  name: 'TimelineModule',
  props: {
    list: { default: [] }
  },
  components: {
    Timeline
  }
}
</script>
