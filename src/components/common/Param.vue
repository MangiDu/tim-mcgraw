<template lang="html">
  <div>
    <div>
      <label>key</label>
      <input type="text" v-model="param.keyword" placeholder="eg:  id">
    </div>
    <div>
      <label>type</label>
      <type-select-input :type.sync="param.paraType"></type-select-input>
    </div>
    <div>
      <label>requirement</label>
      <div>
        <Radio-group :model.sync="param.requirement">
          <Radio value="required">yes</Radio>
          <Radio value="optional">no</Radio>
        </Radio-group>
      </div>
    </div>
    <div>
      <label>description</label>
      <input type="text" v-model="param.description" placeholder="eg:  学生ID">
    </div>
  </div>
</template>

<script>
import { Radio } from 'iview'
const RadioGroup = Radio.Group
import TypeSelectInput from './TypeSelectInput'
export default {
  props: {
    param: {
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    Radio,
    RadioGroup,
    TypeSelectInput
  }
}
</script>

<style lang="css">
</style>
