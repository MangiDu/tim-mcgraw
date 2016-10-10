<template lang="html">
  <div class="doc-section">
    <label class="section-label">{{ title || 'section title' }}</label>
    <div class="section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
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
