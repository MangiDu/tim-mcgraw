<template lang="html">
  <div>
    <doc-section title="Group" type="group" :sections.sync="sections"></doc-section>
    <doc-section title="Header" type="basic" :sections.sync="sections"></doc-section>
    <doc-section title="Description" type="descrip" :sections.sync="sections"></doc-section>
    <doc-section title="Parameters" type="params" :sections.sync="sections"></doc-section>
  </div>
</template>

<script>
// TODO:最开始应该是先选择添加什么部分
// 应该用Generator去管理子section的order顺序,而不是把section数组给它们自己赋值

import DocSection from './common/DocSection'
export default {
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      description: '',
      method: '',
      params: [],
      paraCache: {}
    }
  },
  computed: {},
  mounted () {},
  methods: {
    addParam () {
      this.params.push(Object.assign({}, this.paraCache))
      console.log(this.params)
      this.paraCache = {}
    }
  },
  components: {
    DocSection
  }
}
</script>

<style lang="css">
</style>
