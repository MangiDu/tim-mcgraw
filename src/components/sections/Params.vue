<template lang="html">
  <div>
    <param v-for="param in input" :param.sync="param"></param>
    <i-button @click="addEmptyParam">Add</i-button>
  </div>
</template>

<script>
import DocSection from '../common/DocSection'
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
    this.addEmptyParam()
  },
  methods: {
    addEmptyParam () {
      this.input.push({})
    }
  },
  components: {
    DocSection,
    Param,
    iButton: Button
  }
}
</script>

<style lang="css">
</style>
