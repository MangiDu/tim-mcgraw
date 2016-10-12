<template lang="html">
  <div class="doc-section">
    <label class="section-label"><strong>{{ section.title || 'section title' }}</strong></label>
    <div class="section-content">
      <group v-if="section.type.toLowerCase() === 'group'" :section.sync="section"></group>
      <basic v-if="section.type.toLowerCase() === 'basic'" :section.sync="section"></basic>
      <descrip v-if="section.type.toLowerCase() === 'descrip'" :section.sync="section"></descrip>
      <params v-if="section.type.toLowerCase() === 'params'" :section.sync="section"></params>
      <request v-if="section.type.toLowerCase() === 'request'" :section.sync="section"></request>
      <response v-if="section.type.toLowerCase() === 'response'" :section.sync="section"></response>
    </div>
    <div class="section-operations">
      <span class="close" @click="prepareDelete"></span>
    </div>
  </div>
</template>

<script>
import Group from '../sections/Group'
import Basic from '../sections/Basic'
import Descrip from '../sections/Descrip'
import Params from '../sections/Params'
import Request from '../sections/Request'
import Response from '../sections/Response'
export default {
  props: {
    section: {
      required: true
    }
  },
  methods: {
    prepareDelete () {
      this.$dispatch('section.delete', this.section)
    }
  },
  components: {
    Group,
    Basic,
    Descrip,
    Params,
    Request,
    Response
  }
}
</script>

<style lang="css">
</style>
