<template lang="html">
  <div class="input-wrapper">
    <input type="text" v-model="input.name">
  </div>
</template>

<script>
export default {
  props: {
    section: {
      required: true,
      default () {
        return {
          type: 'group'
        }
      }
    }
  },
  data () {
    return {
      input: this.section.input
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
