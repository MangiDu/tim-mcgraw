<template lang="html">
  <div>
    <doc-section v-for="section in sections" :section.sync="section" track-by="$index"></doc-section>
    <row class="section-operations">
      <i-col span="12">
        <i-button type="primary" @click="addGroup">add Group</i-button>
      </i-col>
      <i-col span="12">
        <i-button type="primary" @click="addApi">add API</i-button>
      </i-col>
    </row>
  </div>
</template>

<script>
// TODO:最开始应该是先选择添加什么部分
// 应该用Generator去管理子section的order顺序,而不是把section数组给它们自己赋值
import { Row, Col, Button } from 'iview'
import _ from 'lodash'

const GROUP_TEMP = [{type: 'group', title: 'Group', input: {}}]
const SECTION_TEMP = [
  {type: 'basic', title: 'Header', input: {}},
  {type: 'descrip', title: 'Description', input: {}},
  {type: 'params', title: 'Parameters', input: []},
  {type: 'request', title: 'Request', input: []},
  {type: 'response', title: 'Response', input: {}}
]

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
    }
  },
  ready () {
    this.sections = []
  },
  methods: {
    addApi () {
      this.sections = [...this.sections, ..._.cloneDeep(SECTION_TEMP)]
    },
    addGroup () {
      this.sections = [...this.sections, ..._.cloneDeep(GROUP_TEMP)]
    }
  },
  components: {
    DocSection,
    Row,
    iCol: Col,
    iButton: Button
  }
}
</script>

<style lang="css">
</style>
