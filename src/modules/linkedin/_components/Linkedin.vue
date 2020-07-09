<template>
  <div class="flex w-full relative justify-center align-center bg-custom-blue">
    <div class="container z-10 py-40 pv-10 flex flex-col sm:flex-row items-center justify-center max-w-xl">
      <div class="sm:w-1/2 relative z-10">
        <img class="z-10 relative mb-4" src="/images/linkedin.png" />
        <div class="absolute z-0 inset-0">
          <BlueCircle class="w-48 h-48 z-0 top-0 left-0 -ml-12 -mt-12" />
          <BlueCircle class="w-16 h-16 z-0 bottom-0 left-0 -ml-16 mb-8" />
          <BlueCircle class="z-0 bottom-0 left-0 -ml-2 -mb-2" />
        </div>
      </div>
      <div class="sm:w-1/2 flex items-center z-10">
        <div>
          <LinkedinLink
          :username="username"
          :link="link"
        />
        </div>
      </div>
    </div>
    <div class="absolute z-0 inset-0 overflow-hidden">
      <BlueCircle class="w-32 h-32 -ml-12 -mb-12 bottom-0 left-0" />
      <BlueCircle class="w-48 h-48 -mr-24 top-0 right-0" />
      <BlueSquare class="w-24 h-24 rotate-330 bottom-0 -mb-12 right-0" />
    </div>
  </div>
</template>

<script>

import LinkedinLink from './LinkedinLink'

export default {
  name: 'Linkedin',
  props: {
    username: { default: '' },
    link: { default: '' }
  },
  components: {
    LinkedinLink
  }
}
</script>
