<template lang="html">
  <div>
    <label>name</label>
    <input type="text" v-model="keyword" placeholder="eg:  获取学生列表">
  </div>
  <div>
    <label>method</label>
    <input type="text" v-model="method" placeholder="eg:  GET">
  </div>
  <div>
    <label>path</label>
    <input type="text" v-model="path" placeholder="eg:  /students">
  </div>
</template>

<script>
import DocSection from '../common/DocSection'
export default {
  data () {
    return {
      keyword: '',
      method: '',
      path: ''
    }
  },
  components: {
    DocSection
  }
}
</script>

<style lang="css">
</style>
