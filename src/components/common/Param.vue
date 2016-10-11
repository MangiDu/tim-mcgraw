<template lang="html">
  <div>
    <div>
      <label>key</label>
      <input type="text" v-model="param.keyword" placeholder="eg:  id">
    </div>
    <div>
      <label>type</label>
      <input type="text" v-model="param.paraType" placeholder="eg:  string">
    </div>
    <div>
      <label>required</label>
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
    RadioGroup
  }
}
</script>

<style lang="css">
</style>
