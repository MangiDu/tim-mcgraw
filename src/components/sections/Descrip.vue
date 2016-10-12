<template lang="html">
  <div class="input-wrapper">
    <textarea v-model="input.descrip"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      required: true,
      default () {
        return {
          type: 'descrip'
        }
      }
    }
  },
  data () {
    return {
      input: this.section.input
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
