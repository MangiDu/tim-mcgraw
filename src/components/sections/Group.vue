<template lang="html">
  <div>
    <input type="text" v-model="section.name">
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
  components: {
    DocSection
  }
}
</script>

<style lang="css">
</style>
