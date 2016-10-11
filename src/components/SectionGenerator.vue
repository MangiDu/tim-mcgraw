<template lang="html">
  <div>
    <doc-section v-for="section in sections" :section.sync="section"></doc-section>
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
    this.sections = [
      // {type: 'group', title: 'Group', input: {}},
      {type: 'basic', title: 'Header', input: {}},
      {type: 'descrip', title: 'Description', input: {}},
      {type: 'params', title: 'Parameters', input: []},
      {type: 'request', title: 'Request', input: []},
      {type: 'response', title: 'Response', input: []}
    ]
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
