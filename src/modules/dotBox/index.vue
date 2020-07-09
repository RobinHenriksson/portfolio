<template>
  <DotBox
    :position="position"
    :rowClass="rowClass"
    :columnClass="columnClass"
    :cols="cols"
    :rows="rows"
  >
    <slot></slot>
  </DotBox>
</template>

<script>

import DotBox from './_components/DotBox'

export default {
  name: 'DotBoxModule',
  props: {
    cols: { default: 1 },
    rows: { default: 1 },
    top: { default: false },
    right: { default: false },
    bottom: { default: false },
    left: { default: false }
  },
  data () {
    return {
      position: '',
      numberOfDots: '',
      rowClass: '',
      columnClass: ''
    }
  },
  mounted () {
    if (this.top) {
      this.position += 'top-0 -mt-4 '
      this.rowClass = 'mb-2'
      this.columnClass += 'mb-2 '
    }
    if (this.right) {
      this.position += 'right-0 -mr-4 '
      this.columnClass += 'ml-2 '
    }
    if (this.bottom) {
      this.position += 'bottom-0 -mb-4 '
      this.rowClass = 'mt-2'
      this.columnClass += 'mt-2 '
    }
    if (this.left) {
      this.position += 'left-0 -ml-4 '
      this.columnClass += 'mr-2 '
    }
  },
  components: {
    DotBox
  }
}
</script>
