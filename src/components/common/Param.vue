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
        <select-input :item.sync="param.paraType" :list="['string', 'number', 'boolean', 'object', 'array', 'enum']"></select-input>
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
      ]
    }
  },
  computed: {},
  mounted () {},
  methods: {},
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
