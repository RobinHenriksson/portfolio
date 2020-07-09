<template>
  <div class="dots">
  <div class="dots-row flex h-1" :class="rowClass" v-for="n in rows" :key="'dotrow'+n">
    <div v-for="c in cols" :key="'dotcolumn'+c" class="rounded-full bg-gray-400 w-1 h-1 dot-column" :class="columnClass"></div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Dots',
  props: {
    rows: { default: 1 },
    cols: { default: 1 },
    rowClass: { default: '' },
    columnClass: { default: '' }
  }
}
</script>
