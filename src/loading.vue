<template lang="html">
  loading
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {
    setTimeout(() => {
      this.$route.router.go({
        path: '/index'
      })
    }, 1000)
  },
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
