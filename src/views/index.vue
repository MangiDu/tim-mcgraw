<template lang="html">
  <div>
    <div v-el:top-fix :class="{'app-top-fixed': topFixed}">
      <row class="app-top-inner">
        <i-col span='12'>
          <div class="sections-operations">
            <row>
              <i-col span="3"><strong>Add</strong></i-col>
              <i-col span="20">
                <i-button type="ghost" size="small" @click="add('api')">API</i-button>
                <i-button size="small" @click="add('group')">Group</i-button>
                <button-group size="small">
                  <i-button @click="add('basic')">Header</i-button>
                  <i-button @click="add('descrip')">Description</i-button>
                </button-group>
                <button-group size="small">
                  <i-button @click="add('params')">Parameters</i-button>
                  <i-button @click="add('request')">Request</i-button>
                  <i-button @click="add('response')">Response</i-button>
                </button-group>
              </i-col>
            </row>
          </div>
        </i-col>
        <i-col span='12'>
          <div class="app-operations">
            <div class="file-name">
              <input type="text" v-model="fileName" placeholder="✪ω✪ name me please">
              <label>.apib</label>
            </div>
            <span>┏ (^ω^)=</span><span :style="{fontSize: '20px'}">☞</span>
            <i-button type="primary" size="small" @click="download">Catch ya ~</i-button>
          </div>
        </i-col>
      </row>
    </div>
    <row class="app-row" type="flex" justify="end">
      <i-col class="app-col" span="12">
        <section-generator :sections.sync="sectionArr"></section-generator>
      </i-col>
      <i-col class="app-col" span="12">
        <section-shower v-el:right-fix :class="{'app-right-fixed': topFixed}" :sections.sync="sectionArr"></section-shower>
      </i-col>
    </row>
  </div>
</template>

<script>
import { Row, Col, Button } from 'iview'
import _ from 'lodash'
const ButtonGroup = Button.Group
import SectionGenerator from '../components/SectionGenerator'
import SectionShower from '../components/SectionShower'
import { saveAs } from 'file-saver'
import { toDoc } from '../lib/toDoc'
export default {
  data () {
    return {
      sectionArr: [],
      fileName: '',
      topFixed: false
    }
  },
  attached () {
    if (!this._rightWidth & !this._rightHeight) {
      // TODO:为啥是8?我也不知道啊?滚动条?
      this._rightWidth = (this.$els.rightFix.clientWidth - 8) + 'px'
      this._rightHeight = (window.innerHeight - '180') + 'px'
      this.$els.rightFix.style.maxHeight = this._rightHeight
    }
    // TODO: when window resized
    this._scrollCallback = _.debounce((e) => {
      if (!this._startOffset) {
        this._startOffset = this.$els.topFix.offsetTop
      }
      if (document.body.scrollTop > this._startOffset) {
        this.topFixed = true
        this.$els.rightFix.style.top = '60px'
        this.$els.rightFix.style.width = this._rightWidth
      }
      else {
        this.topFixed = false
        this.$els.rightFix.style.width = 'auto'
      }
    }, 10)
    document.addEventListener('scroll', this._scrollCallback)
  },
  detached () {
    if (this._scrollCallback){
      document.removeEventListener('scroll', this._scrollCallback)
    }
  },
  methods: {
    download () {
      let file = new File([toDoc(this.sectionArr)], `${this.fileName || 'index'}.apib`, {type: 'text/plain;charset=utf-8'})
      saveAs(file)
    },
    add (type) {
      this.$broadcast('section.add', type)
    }
  },
  components: {
    Row,
    iCol: Col,
    iButton: Button,
    ButtonGroup,
    SectionGenerator,
    SectionShower
  }
}
</script>
