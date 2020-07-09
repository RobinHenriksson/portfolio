<template>
  <div class="p-10 header-wrapper relative flex flex-col items-center 900:flex-row">
    <div class="w-full lg:w-1/2 z-10 flex align-center relative">
        <img src="/images/header.png" class="z-10"/>
        <div class="absolute z-0 inset-0">
          <GrayCircle class="w-16 h-16 z-0 bottom-0 left-0 ml-2 mb-32" />
          <GrayCircle class="z-0 bottom-0 left-0 ml-16 mb-24" />
          <GrayCircle class="w-24 h-24 z-0 bottom-0 left-0 -ml-16 mb-6" />
          <GrayCircle class="w-12 h-12 z-0 bottom-0 left-0 ml-10 mb-12" />
          <GrayCircle class="w-24 h-24 z-0 bottom-0 left-0 ml-32 mb-16" />
        </div>
      </div>
      <div class="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start lg:justify-center">
        <div class="max-w-sm w-full">
          <ProfileContainer />
          <ReviewContainer />
        </div>
      </div>
      <div class="absolute z-0 inset-0">
        <GrayCircle class="w-40 h-40 z-0 top-0 right-0 -mt-24 mr-48" />
        <GraySquare class="w-40 h-40 z-0 top-0 right-0 mt-24 -mr-20 rotate-330" />
      </div>
  </div>
</template>

<script>

import ProfileContainer from '@/modules/profile/'
import ReviewContainer from '@/modules/review/'

export default {
  name: 'Header',
  components: {
    ProfileContainer,
    ReviewContainer
  }
}
</script>
