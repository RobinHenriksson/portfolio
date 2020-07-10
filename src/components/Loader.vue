<template>
  <div class="loader" :class="mode">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>

export default {
  name: 'Loader',
  props: {
    mode: { default: 'dark' }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  &.dark div {
    border: 6px solid #707070;
    border-color: #707070 transparent transparent transparent;
  }

  &.light div {
    border: 6px solid #fff;
    border-color: #fff transparent transparent transparent;
  }
}

.loader {
  display: inner-block;
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto;
}

.loader div {
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  animation: loader 0.8s cubic-bezier(0.5, 0, 0.5, 0.6) infinite;
}
.loader div:nth-child(1) {
  animation-delay: -0.25s;
}
.loader div:nth-child(2) {
  animation-delay: -0.15s;
}
.loader div:nth-child(3) {
  animation-delay: -0.08s;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
