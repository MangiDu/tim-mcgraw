<template lang="html">
  <div>
    <textarea v-model="section.descrip"></textarea>
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
          type: 'descrip'
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
