<template lang="html">
  <div class="doc-section">
    <label class="section-label"><strong>{{ title || 'section title' }}</strong></label>
    <div class="section-content">
      <group v-if="type.toLowerCase() === 'group'" :section.sync="section"></group>
      <basic v-if="type.toLowerCase() === 'basic'" :section.sync="section"></basic>
      <descrip v-if="type.toLowerCase() === 'descrip'" :section.sync="section"></descrip>
      <params v-if="type.toLowerCase() === 'params'" :section.sync="section"></params>
    </div>
  </div>
</template>

<script>
import Group from '../sections/Group'
import Basic from '../sections/Basic'
import Descrip from '../sections/Descrip'
import Params from '../sections/Params'
export default {
  props: {
    title: String,
    type: {
      type: String,
      required: true
    },
    section: {
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
    Group,
    Basic,
    Descrip,
    Params
  }
}
</script>

<style lang="css">
</style>
