<template lang="html">
  <div class="params">
    <div class="form-control">
      <label>code</label>
      <div class="input-wrapper">
        <input type="text" name="name" v-model="input.code">
      </div>
    </div>
    <param v-for="param in input.arr || []" :param.sync="param"></param>
    <div class="params-operations">
      <i-button @click="addEmptyParam">Add</i-button>
    </div>
  </div>
</template>

<script>
import Param from '../common/Param'
import { Button } from 'iview'

export default {
  props: {
    section: {
      required: true,
      default () {
        return {
          type: 'response'
        }
      }
    }
  },
  data () {
    return {
      input: this.section.input
    }
  },
  attached () {
    // this.addEmptyParam()
  },
  methods: {
    addEmptyParam () {
      if (!this.input.arr) {
        this.$set('input.arr', [])
      }
      this.input.arr.$set(this.input.arr.length, {})
    }
  },
  components: {
    Param,
    iButton: Button
  }
}
</script>

<style lang="css">
</style>
