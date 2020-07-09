<template>
  <div class="flex w-full relative justify-center">
    <div class="container z-10 py-10 pv-10 flex flex-col items-center max-w-2xl">
      <h2 class="text-xl font-bold pb-2 pt-6 font-rubik">Review this entire site with:</h2>
      <div class="flex flex-col 500:flex-row w-full justify-evenly">
        <a href="https://github.com/RobinHenriksson/portfolio" :class="'border-'+color+' hover:bg-'+color+' hover:bg-opacity-25'" class="py-2 mb-2 px-6 border-2 rounded-lg text-sm flex items-center justify-center">
          <img src="/images/vue-icon.png" class="w-6 mr-2"/>
          <span :class="'text-'+color">Vue.js source code</span>
        </a>
        <a href="/files/portfolio.xd" :class="'border-'+color+' hover:bg-'+color+' hover:bg-opacity-25'" class="block py-2 mb-2 px-6 border-2 rounded-lg text-sm flex items-center justify-center">
          <img src="/images/xd-icon.png" class="w-6 mr-2" />
          <span :class="'text-'+color">Adobe XD file</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Review',
  props: {
    color: { default: 'black' }
  }
}
</script>
