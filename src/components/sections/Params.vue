<template lang="html">
  <div>
    <label>key</label>
    <input type="text" v-model="keyword" placeholder="eg:  id">
  </div>
  <div>
    <label>type</label>
    <input type="text" v-model="type" placeholder="eg:  string">
  </div>
  <div>
    <label>description</label>
    <input type="text" v-model="description" placeholder="eg:  学生ID">
  </div>
</template>

<script>
import DocSection from '../common/DocSection'
export default {
  data () {
    return {
      keyword: '',
      type: '',
      description: ''
    }
  },
  components: {
    DocSection
  }
}
</script>

<style lang="css">
</style>
