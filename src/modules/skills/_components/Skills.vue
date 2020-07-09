<template>
  <div class="flex w-full relative justify-center align-center">
    <div class="container z-10 py-40 pv-10 flex flex-col items-center justify-center max-w-xl">
      <h2 class="text-xl font-bold pb-10 font-rubik">Skills</h2>
      <div class="p-4 w-full" v-for="(skill, index) in list" :key="'skill'+index">
        <h3 class="font-bold font-rubik">{{skill.title}}</h3>
        <p class="text-sm">
          <span v-for="(data, index) in skill.data" :key="'skilldata'+index">{{data}}<template v-if="(skill.data.length - 1) !== index">, </template></span>
        </p>
      </div>
    </div>
    <div class="absolute z-0 inset-0">
        <GrayCircle class="w-20 h-20 z-0 top-0 left-0 mt-24 ml-10" />
        <GrayCircle class="w-12 h-12 z-0 bottom-0 right-0 mb-24 -mr-4" />
        <GrayCircle class="z-0 bottom-0 right-0 mb-40 -mr-6" />
        <GrayCircle class="w-40 h-40 z-0 top-0 left-0 mt-48 -ml-20" />
        <GraySquare class="w-16 h-16 z-0 top-0 right-0 mt-24 -mr-10 rotate-330" />
        <GraySquare class="w-16 h-16 z-0 top-0 right-0 mt-12 mr-10 rotate-45" />
    </div>
  </div>
</template>

<script>

import DotBoxContainer from '@/modules/dotBox'

export default {
  name: 'Skills',
  props: {
    list: { default: () => [] }
  },
  components: {
    DotBoxContainer
  }
}
</script>
