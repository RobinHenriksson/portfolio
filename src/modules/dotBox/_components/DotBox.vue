<template>
  <div class="dot-box-wrapper relative z-0">
    <div class="bg-white relative z-10 rounded-md p-4">
      <slot></slot>
    </div>
    <Dots class="absolute" :class="position" :rowClass="rowClass" :columnClass="columnClass" :cols="cols" :rows="rows" />
  </div>
</template>

<script>

export default {
  name: 'DotBox',
  props: {
    cols: { default: 1 },
    rows: { default: 1 },
    position: { default: 'top left' },
    rowClass: { default: '' },
    columnClass: { default: '' }
  }
}
</script>
