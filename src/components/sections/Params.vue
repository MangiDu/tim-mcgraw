<template lang="html">
  <div>
    <div>
      <label>key</label>
      <input type="text" v-model="section.keyword" placeholder="eg:  id">
    </div>
    <div>
      <label>type</label>
      <input type="text" v-model="section.paraType" placeholder="eg:  string">
    </div>
    <div>
      <label>required</label>
      <div>
        <Radio-group :model.sync="section.requirement">
          <Radio value="required">yes</Radio>
          <Radio value="optional">no</Radio>
        </Radio-group>
      </div>
    </div>
    <div>
      <label>description</label>
      <input type="text" v-model="section.description" placeholder="eg:  学生ID">
    </div>
  </div>
</template>

<script>
import DocSection from '../common/DocSection'
import { Radio } from 'iview'
const RadioGroup = Radio.Group
export default {
  props: {
    section: {
      required: true,
      default () {
        return {
          type: 'params'
        }
      }
    }
  },
  components: {
    DocSection,
    Radio,
    RadioGroup
  }
}
</script>

<style lang="css">
</style>
