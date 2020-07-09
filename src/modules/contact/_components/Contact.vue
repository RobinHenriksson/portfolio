<template>
  <div class="flex w-full relative justify-center align-center bg-custom-green text-white">
    <div class="container z-10 py-40 pv-10 flex flex-col items-center justify-center max-w-4xl">
      <div class="flex flex-col items-center 900:flex-row w-full">
        <div class="w-full lg:w-1/2 flex flex-col items-center mb-12">
          <h2 class="text-xl font-bold pb-2 font-rubik">Contact me</h2>
          <form class="flex flex-col w-8/12" @submit.prevent="$emit('submit', $event)">
            <input class="mb-2 p-2 rounded-lg bg-custom-green border-white border-2 outline-none placeholder-white placeholder-opacity-50" type="text" :value="contact.name" @input="$emit('update', {name: $event.target.value})" required placeholder="Name" />
            <input class="mb-2 p-2 rounded-lg bg-custom-green border-white border-2 outline-none placeholder-white placeholder-opacity-50" type="email" :value="contact.email" @input="$emit('update', {email: $event.target.value})" required placeholder="Email" />
            <textarea class="mb-2 p-2 rounded-lg bg-custom-green border-white border-2 outline-none placeholder-white placeholder-opacity-50" required :value="contact.message" @input="$emit('update', {message: $event.target.value})" placeholder="Message"></textarea>
            <button class="bg-white rounded-lg text-custom-green p-2 outline-none" type="submit">Send</button>
          </form>
        </div>
        <div class="w-9/12 lg:w-1/2 flex flex-col justify-center items-center">
          <LinkedinContainer :linkOnly="true" />
          <ReviewContainer mode="light" />
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full py-2 text-center text-xs">COPYRIGHT {{year}}</div>
    </div>
    <div class="absolute z-0 inset-0">
        <GreenCircle class="w-32 h-32 z-0 top-0 left-0 -ml-16" />
        <GreenCircle class="w-16 h-16 z-0 top-0 left-0 mt-32 ml-8" />
        <GreenCircle class="z-0 top-0 left-0 mt-48" />
        <GreenCircle class="w-32 h-32 z-0 bottom-0 right-0 -mr-16" />
        <GreenCircle class="w-16 h-16 z-0 top-0 right-0 mt-12 mr-2" />
        <GreenCircle class="z-0 top-0 right-0 mt-2 mr-16" />
    </div>
  </div>
</template>

<script>

import LinkedinContainer from '@/modules/linkedin'
import ReviewContainer from '@/modules/review'

export default {
  name: 'Contact',
  props: {
    contact: { default: () => {} },
    year: { default: '' }
  },
  components: {
    LinkedinContainer,
    ReviewContainer
  }
}
</script>
