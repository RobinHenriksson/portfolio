<template>
  <div class="flex w-full relative justify-center align-center">
    <div class="container z-10 py-40 pv-10 flex flex-col items-center justify-center max-w-xl">
      <h2 class="text-xl font-bold pb-10 font-rubik">Education</h2>
      <div class="education-list flex flex-col sm:flex-row items-center sm:items-start w-full sm:max-w-full max-w-md">
        <DotBoxContainer class="education max-w-xs sm:max-w-full w-full sm:w-1/2" :cols="5" :rows="4" :top="true" :left="true">
          <h2 class="text-custom-green font-bold text-xl font-rubik">{{first.name}}</h2>
          <h3 class="font-bold">{{first.school}}</h3>
          <p class="text-sm">{{first.years}}</p>
        </DotBoxContainer>
        <DotBoxContainer class="education max-w-xs sm:max-w-full w-full sm:w-1/2" :cols="5" :rows="4" :bottom="true" :right="true">
          <h2 class="text-custom-green font-bold text-xl font-rubik">{{second.name}}</h2>
          <h3 class="font-bold">{{second.school}}</h3>
          <p class="text-sm">{{second.years}}</p>
        </DotBoxContainer>
      </div>
    </div>
  </div>
</template>

<script>

import DotBoxContainer from '@/modules/dotBox'

export default {
  name: 'Education',
  props: {
    first: { default: () => {} },
    second: { default: () => {} }
  },
  components: {
    DotBoxContainer
  }
}
</script>
