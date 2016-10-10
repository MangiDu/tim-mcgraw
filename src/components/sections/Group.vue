<template lang="html">
  <div>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import DocSection from '../common/DocSection'
export default {
  data () {
    return {
      name: ''
    }
  },
  components: {
    DocSection
  }
}
</script>

<style lang="css">
</style>
