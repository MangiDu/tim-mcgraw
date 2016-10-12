<template lang="html">
  <div class="params">
    <param v-for="param in input" :param.sync="param"></param>
    <div class="params-operations">
      <i-button @click="addEmptyParam" size="small">Add</i-button>
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
          type: 'params'
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
