<template lang="html">
  <div>
    <label>keyword</label>
    <input type="text" v-model="input.keyword" placeholder="eg:  获取学生列表">
  </div>
  <div>
    <label>method</label>
    <input type="text" v-model="input.method" placeholder="eg:  GET">
  </div>
  <div>
    <label>path</label>
    <input type="text" v-model="input.path" placeholder="eg:  /students">
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
