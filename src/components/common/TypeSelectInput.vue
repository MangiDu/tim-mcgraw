<template lang="html">
  <div class="type-select-input">
    <input type="text" v-model="type" @focus="showList = true" @blur="showList = false">
    <ul class="type-list" v-show="showList">
      <li v-for="typeItem in typeList | filterBy type">{{ typeItem }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: true
    }
  },
  data () {
    return {
      showList: false,
      typeList: [
        'string',
        'number',
        'boolean',
        'object',
        'array',
        'enum'
      ]
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style></style>
