<template lang="html">
  <div>
    <doc-section title="Group">
      <group></group>
    </doc-section>
    <doc-section title="Header">
      <basic></basic>
    </doc-section>
    <doc-section title="Description">
      <descrip></descrip>
    </doc-section>
    <doc-section title="Parameters">
      <params></params>
    </doc-section>
  </div>
</template>

<script>
// TODO:最开始应该是先选择添加什么部分
// 应该用Generator去管理子section的order顺序,而不是把section数组给它们自己赋值

import DocSection from './common/DocSection'
import Group from './sections/Group'
import Basic from './sections/Basic'
import Descrip from './sections/Descrip'
import Params from './sections/Params'
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
    DocSection,
    Group,
    Basic,
    Descrip,
    Params
  }
}
</script>

<style lang="css">
</style>
