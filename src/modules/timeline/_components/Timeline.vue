<template>
  <section class="w-full">
    <Box :odd="index % 2 !== 0" v-for="(data, index) in list" :key="index">
      <template v-if="index % 2 !== 0" v-slot:left v-html="data.content">
        <div>
          <h3 class="text-custom-green">{{data.title}}</h3>
          <p class="text-xs"><strong>{{data.customer}}</strong> - {{data.period}}</p>
          <p class="text-xs mt-2">{{data.description}}</p>
          <p class="text-xs mt-4"><strong>Skills</strong> - {{data.skills}}</p>
        </div>
      </template>
      <template v-if="index % 2 === 0" v-slot:right>
        <div>
          <h3 class="text-custom-green">{{data.title}}</h3>
          <p class="text-xs"><strong>{{data.customer}}</strong> - {{data.period}}</p>
          <p class="text-xs mt-2">{{data.description}}</p>
          <p class="text-xs mt-4"><strong>Skills</strong> - {{data.skills}}</p>
        </div>
      </template>
    </Box>
  </section>
</template>

<script>

import Box from './Box'

export default {
  name: 'Timeline',
  props: {
    list: { default: [] }
  },
  components: {
    Box
  }
}
</script>
