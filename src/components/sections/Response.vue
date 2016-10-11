<template lang="html">
  <div>
    <div>
      <label>code</label>
      <input type="text" name="name" value="">
    </div>
    <param v-for="param in input" :param.sync="param"></param>
    <i-button @click="addEmptyParam">Add</i-button>
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
    this.addEmptyParam()
  },
  methods: {
    addEmptyParam () {
      this.input.push({})
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
