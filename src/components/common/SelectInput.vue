<template lang="html">
  <div class="select-input">
    <input type="text" v-model="item" @focus="showList = true" @blur="showList = false">
    <ul class="list" v-show="showList">
      <li v-for="listItem in list | filterBy item">{{ listItem }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      showList: false
    }
  }
}
</script>

<style lang="css">
</style>
