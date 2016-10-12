<template lang="html">
  <div>
    <row class="app-row">
      <i-col class="app-col" span="12">
        <section-generator :sections.sync="sectionArr"></section-generator>
      </i-col>
      <i-col class="app-col" span="12">
        <section-shower :sections.sync="sectionArr"></section-shower>
        <div class="app-operations">
          <i-button size="large" @click="download">I hope you think of me ~</i-button>
        </div>
      </i-col>
    </row>
  </div>
</template>

<script>
import { Row, Col, Button } from 'iview'
import SectionGenerator from '../components/SectionGenerator'
import SectionShower from '../components/SectionShower'
import { saveAs } from 'file-saver'
import { toDoc } from '../lib/toDoc'
export default {
  data () {
    return {
      sectionArr: []
    }
  },
  computed: {},
  mounted () {},
  methods: {
    download () {
      let file = new File([toDoc(this.sectionArr)], "test.apib", {type: "text/plain;charset=utf-8"})
      saveAs(file)
    }
  },
  components: {
    Row,
    iCol: Col,
    iButton: Button,
    SectionGenerator,
    SectionShower
  }
}
</script>
