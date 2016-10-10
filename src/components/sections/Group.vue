<template lang="html">
  <doc-section title="Group">
    <div>
      <input type="text" v-model="name">
    </div>
  </doc-section>
</template>

<script>
import toMd from '../../lib/toMd'
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
