<template lang="html">
  <div>
    <param v-for="param in input" :param.sync="param"></param>
    <button type="button" name="button" @click="addEmptyParam">Add</button>
  </div>
</template>

<script>
import DocSection from '../common/DocSection'
import Param from '../common/Param'

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
    Param
  }
}
</script>

<style lang="css">
</style>
