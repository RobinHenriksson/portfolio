<template>
  <a :href="link" target="_blank" class="flex">
    <div class="w-16 h-16 mr-4">
      <img src="/images/linkedin-icon.png" />
    </div>
    <div class="text-white flex flex-col justify-center">
      <slot>
        <p class="text-lg font-bold">{{username}}</p>
        <p>Linkedin profile</p>
      </slot>
    </div>
  </a>
</template>

<script>

export default {
  name: 'LinkedinLink',
  props: {
    username: { default: '' },
    link: { default: '' }
  }
}
</script>
