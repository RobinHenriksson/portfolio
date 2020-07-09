<template>
  <div id="app">
    <div class="page">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script>

require('animate.css/animate.min.css')

export default {
  name: 'Main'
}
</script>
