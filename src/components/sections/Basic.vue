<template lang="html">
  <div>
    <div class="form-control">
      <label>keyword</label>
      <div class="input-wrapper">
        <input type="text" v-model="input.keyword">
      </div>
    </div>
    <div class="form-control">
      <label>method</label>
      <div class="input-wrapper">
        <select-input :item.sync="input.method" :list="['GET', 'POST', 'PUT', 'DELETE', 'PATCH']"></select-input>
      </div>
    </div>
    <div class="form-control">
      <label>path</label>
      <div class="input-wrapper">
        <input type="text" v-model="input.path">
      </div>
    </div>
  </div>
</template>

<script>
import { Row, Col } from 'iview'
import SelectInput from '../common/SelectInput'
export default {
  props: {
    section: {
      required: true,
      default () {
        return {
          type: 'basic'
        }
      }
    }
  },
  data () {
    return {
      input: this.section.input
    }
  },
  components: {
    Row,
    iCol: Col,
    SelectInput
  }
}
</script>

<style lang="css">
</style>
