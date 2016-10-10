<template lang="html">
  <doc-section title="Description">
    <div>
      <textarea v-model="descrip"></textarea>
    </div>
  </doc-section>
</template>

<script>
import DocSection from '../common/DocSection'
export default {
  data () {
    return {
      descrip: ''
    }
  },
  components: {
    DocSection
  }
}
</script>

<style lang="css">
</style>
