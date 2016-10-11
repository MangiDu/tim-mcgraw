<template lang="html">
  <div>
    <label>name</label>
    <input type="text" v-model="section.keyword" placeholder="eg:  获取学生列表">
  </div>
  <div>
    <label>method</label>
    <input type="text" v-model="section.method" placeholder="eg:  GET">
  </div>
  <div>
    <label>path</label>
    <input type="text" v-model="section.path" placeholder="eg:  /students">
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
          type: 'basic'
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
