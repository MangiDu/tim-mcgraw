<template lang="html">
  <div>
    <group-section :sections.sync="sections"></group-section>
    <header-section :sections.sync="sections"></header-section>
    <descrip-section :sections.sync="sections"></descrip-section>
    <params-section :sections.sync="sections"></params-section>
    <!-- <div class="">
      <label>请求</label>

    </div>
    <div class="">
      <label>响应</label>

    </div> -->
  </div>
</template>

<script>
// TODO:最开始应该是先选择添加什么部分

import GroupSection from './sections/Group'
import HeaderSection from './sections/Header'
import DescripSection from './sections/Descrip'
import ParamsSection from './sections/Params'
export default {
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      description: '',
      method: '',
      params: [],
      paraCache: {}
    }
  },
  computed: {},
  mounted () {},
  methods: {
    addParam () {
      this.params.push(Object.assign({}, this.paraCache))
      console.log(this.params)
      this.paraCache = {}
    }
  },
  components: {
    GroupSection,
    HeaderSection,
    DescripSection,
    ParamsSection
  }
}
</script>

<style lang="css">
</style>
