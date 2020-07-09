<template>
  <div class="w-full relative">

    <h2 class="text-xl text-center font-bold pb-10 font-rubik">Gallery</h2>

    <Hooper v-if="show" ref="gallery" class="w-full pb-12" :itemsToShow="numberOfItems" :infiniteScroll="true" :wheelControl="false" :centerMode="true">
      <Slide class="py-6" v-for="(slide, index) in slides" :key="'slide'+index">
        <div class="block rounded-lg bg-white shadow mx-6">
          <img :src="slide.image" class="rounded-t-lg" />
          <div class="p-3">
            <a :href="slide.link" target="_blank" class="font-bold text-custom-green">{{slide.customer}}</a>
            <p class="text-xs">{{slide.description}}</p>
          </div>
        </div>
      </Slide>
    </Hooper>
  </div>
</template>

<script>

import { Hooper, Slide } from 'hooper'

export default {
  name: 'Gallery',
  props: {
    slides: { default: () => [] },
    numberOfItems: { default: 2.25 },
    show: { default: true }
  },
  components: {
    Hooper,
    Slide
  }
}
</script>

<style src="hooper/dist/hooper.css">
</style>

<style>
  .hooper {
    height: auto !important;
    outline: none;
  }
</style>
