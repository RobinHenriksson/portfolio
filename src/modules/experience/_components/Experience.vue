<template>
  <div class="flex w-full relative pb-20 justify-center bg-custom-light-gray">
    <div class="container z-10 py-10 pv-10 flex flex-col items-center max-w-2xl">
      <h2 class="text-xl font-bold pb-10 font-rubik">Experience</h2>
      <Timeline :list="list"/>
    </div>
    <div class="absolute z-0 inset-0">
        <BlueSquare class="w-16 h-16 z-0 top-0 left-0 mt-24 -ml-10 rotate-330" />
        <BlueSquare class="w-16 h-16 z-0 top-0 right-0 -mt-2 -mr-10 rotate-330" />
    </div>
  </div>
</template>

<script>

import Timeline from '@/modules/timeline'

export default {
  name: 'Experience',
  props: {
    list: { default: () => [] }
  },
  components: {
    Timeline
  }
}
</script>
