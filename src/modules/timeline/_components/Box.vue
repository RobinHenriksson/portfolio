<template>
  <div class="flex w-full">
    <div class="md:w-5/12 md:-mb-16 md:order-1" :class="{'w-9/12 mb-12 order-2': odd, 'w-0': !odd}">
      <DotBox :cols="8" :rows="10" :top="true" :left="true" v-if="odd">
        <slot name="left"></slot>
      </DotBox>
    </div>
    <div class="w-2/12 flex-grow-0 flex justify-center relative md:order-2" :class="{'order-1': odd, 'w-0': !odd}">
      <div class="w-5 h-5 bg-custom-blue rounded-full mx-3 z-10"></div>
      <div class="absolute inset-0 flex justify-center items-center z-0">
        <div class="h-full w-1 border-2 border-dashed border-custom-gray" />
      </div>
    </div>
    <div class="md:w-5/12 md:-mb-16 md:order-3" :class="{'w-9/12 mb-12 order-3': !odd, 'w-0': odd}">
      <DotBox :cols="8" :rows="10" :bottom="true" :right="true" v-if="!odd">
        <slot name="right"></slot>
      </DotBox>
    </div>
  </div>
</template>

<script>

import DotBox from '@/modules/dotBox'

export default {
  name: 'Box',
  props: {
    odd: { default: false }
  },
  components: {
    DotBox
  }
}
</script>
