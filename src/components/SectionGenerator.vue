<template lang="html">
  <div>
    <doc-section v-for="section in sections" :section.sync="section" track-by="$index"></doc-section>
    <div class="doc-section fake" v-if="!sections.length">
      <label class="section-label">
        <span class="fake-content"></span>
      </label>
      <div class="section-content">
        <span class="fake-content"></span>
        <span class="fake-content"></span>
        <span class="fake-content half"></span>
      </div>
    </div>
  </div>
</template>

<script>
// TODO:最开始应该是先选择添加什么部分
// 应该用Generator去管理子section的order顺序,而不是把section数组给它们自己赋值
import { Row, Col, Button } from 'iview'
const ButtonGroup = Button.Group
import _ from 'lodash'

const GROUP_TEMP = [{type: 'group', title: 'Group', input: {}}]
const SECTION_TEMP = [
  {type: 'basic', title: 'Header', input: {}},
  {type: 'descrip', title: 'Description', input: {}},
  {type: 'params', title: 'Parameters', input: []},
  {type: 'request', title: 'Request', input: []},
  {type: 'response', title: 'Response', input: {}}
]

const ID_PREFIX = 'section_'

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
  events: {
    'section.delete': function (section) {
      this.sections.$remove(section)
    },
    'section.add': function (type) {
      switch (type) {
        case 'api':
          this.addApi()
          break
        default:
          this.addOne(type)
      }
    }
  },
  ready () {
    this.sections = []
  },
  methods: {
    // TODO:这两个方法实际上不应该这么做的,但是...懒了
    addApi () {
      let clone = _.cloneDeep(SECTION_TEMP)
      clone.forEach((obj) => {
        obj.sectionId = _.uniqueId(ID_PREFIX)
      })
      this.sections = [...this.sections, ...clone]
    },
    addOne (type) {
      let clone
      if (type === 'group') {
        clone = _.cloneDeep(GROUP_TEMP)
      }
      else {
        let result = _.filter(SECTION_TEMP, {type: type})
        clone = _.cloneDeep(result)
      }
      clone.forEach((obj) => {
        obj.sectionId = _.uniqueId(ID_PREFIX)
      })
      this.sections = [...this.sections, ...clone]
    }
  },
  components: {
    DocSection,
    Row,
    iCol: Col,
    iButton: Button,
    ButtonGroup
  }
}
</script>

<style lang="css">
</style>
