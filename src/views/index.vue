<template lang="html">
  <row>
    <i-col span="12">
      <section-generator :section.sync="sectionObj"></section-generator>
    </i-col>
    <i-col span="12">
      <section-shower :section.sync="sectionObj"></section-shower>
    </i-col>
  </row>
</template>

<script>
import { Row, Col } from 'iview'
import SectionGenerator from '../components/SectionGenerator'
import SectionShower from '../components/SectionShower'
export default {
  data () {
    return {
      sectionObj: {}
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    Row,
    iCol: Col,
    SectionGenerator,
    SectionShower
  }
}
</script>
