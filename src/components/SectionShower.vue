<template lang="html">
  <div class="section-shower">
    <!-- <textarea readonly="readonly">{{ sections | json }}</textarea> -->
    <pre class="preview">{{{ sections | doc true }}}</pre>
  </div>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
