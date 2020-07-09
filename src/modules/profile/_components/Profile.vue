<template>
  <DotBox :bottom="true" :right="true" :cols="8" :rows="8">
    <h2 class="text-2xl font-bold mb-1 h-6 font-rubik">{{name}}</h2>
    <h1 class="text-xl text-custom-green">{{profession}}</h1>
    <p class="text-xs">{{skills}}</p>
  </DotBox>
</template>

<script>

import DotBox from '@/modules/dotBox'

export default {
  name: 'Profile',
  props: {
    name: { default: '' },
    profession: { default: '' },
    skills: { default: '' }
  },
  components: {
    DotBox
  }
}
</script>
