<template lang="html">
  <div class="param-inputs-wrapper">
    <div class="form-control">
      <label>key</label>
      <div class="input-wrapper">
        <input type="text" v-model="param.keyword">
      </div>
    </div>
    <div class="form-control">
      <label>type</label>
      <div class="input-wrapper">
        <select-input :item.sync="param.paraType" :list="types"></select-input>
      </div>
    </div>
    <div class="form-control" v-if="oneOf(param.paraType, complex)">
      <label>nested</label>
      <div class="input-wrapper">
        <textarea v-model="param.nested"></textarea>
      </div>
    </div>
    <div class="form-control">
      <label>requirement</label>
      <!-- <div class="input-wrapper">
        <Radio-group :model.sync="param.requirement" type="button" size="small">
          <Radio v-for="state in requirements" :value="state">{{ state }}</Radio>
        </Radio-group>
      </div> -->
      <!-- 这里后面还是自己写一个组件统一一下吧,样式先hack着 -->
      <Radio-group class="input-wrapper" :model.sync="param.requirement" type="button" size="small">
        <Radio v-for="state in requirements" :value="state">{{ state }}</Radio>
      </Radio-group>
    </div>
    <div class="form-control">
      <label>description</label>
      <div class="input-wrapper">
        <textarea type="text" v-model="param.description"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { Radio, Row, Col } from 'iview'
const RadioGroup = Radio.Group
import SelectInput from './SelectInput'
import { oneOf } from '../../lib/utils'
export default {
  props: {
    param: {
      required: true
    }
  },
  data () {
    return {
      requirements: [
        'required',
        'optional',
        'fixed'
      ],
      types: ['string', 'number', 'boolean', 'object', 'array', 'enum'],
      simple: ['string', 'number', 'boolean'],
      complex: ['object', 'array', 'enum']
    }
  },
  computed: {},
  mounted () {},
  methods: {
    oneOf
  },
  components: {
    Radio,
    Row,
    iCol: Col,
    RadioGroup,
    SelectInput
  }
}
</script>

<style lang="css">
</style>
