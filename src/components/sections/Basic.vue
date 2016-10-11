<template lang="html">
  <div>
    <label>keyword</label>
    <input type="text" v-model="input.keyword">
  </div>
  <div>
    <label>method</label>
    <select-input :item.sync="input.method" :list="['GET', 'POST', 'PUT', 'DELETE', 'PATCH']"></select-input>
  </div>
  <div>
    <label>path</label>
    <input type="text" v-model="input.path">
  </div>
</template>

<script>
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
    SelectInput
  }
}
</script>

<style lang="css">
</style>
