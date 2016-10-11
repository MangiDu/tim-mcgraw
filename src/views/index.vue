<template lang="html">
  <div>
    <row class="app-row">
      <i-col class="app-col" span="12">
        <section-generator :sections.sync="sectionArr"></section-generator>
      </i-col>
      <i-col class="app-col" span="12">
        <section-shower :sections.sync="sectionArr"></section-shower>
      </i-col>
    </row>
    <!-- <div class="app-operations">
      <i-button size="large">See you, see me ~</i-button>
    </div> -->
  </div>
</template>

<script>
import { Row, Col, Button } from 'iview'
import SectionGenerator from '../components/SectionGenerator'
import SectionShower from '../components/SectionShower'
export default {
  data () {
    return {
      sectionArr: []
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    Row,
    iCol: Col,
    iButton: Button,
    SectionGenerator,
    SectionShower
  }
}
</script>
