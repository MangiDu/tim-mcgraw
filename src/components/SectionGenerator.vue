<template lang="html">
  <div>
    <doc-section title="Group" type="group" :section.sync="sections[0]"></doc-section>
    <doc-section title="Header" type="basic" :section.sync="sections[1]"></doc-section>
    <doc-section title="Description" type="descrip" :section.sync="sections[2]"></doc-section>
    <doc-section title="Parameters" type="params" :section.sync="sections[3]"></doc-section>
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
  ready () {
    this.sections = new Array(4)
  },
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
