<template lang="html">
  <div>
    <input type="text" v-model="input.name">
  </div>
</template>

<script>
import DocSection from '../common/DocSection'
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
  components: {
    DocSection
  }
}
</script>

<style lang="css">
</style>
