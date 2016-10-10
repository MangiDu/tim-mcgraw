<template lang="html">
  <div>
    <textarea v-model="descrip"></textarea>
  </div>
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
