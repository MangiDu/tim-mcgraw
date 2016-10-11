<template lang="html">
  <div class="select-input">
    <input type="text" v-model="item" @focus="inputFocus = true" @blur="inputFocus = false">
    <ul class="list" v-show="showList" @mouseover="listMouseover = true" @mouseout="listMouseover = false">
      <li class="item" v-for="listItem in list | filterBy item" @click="set(listItem)">{{ listItem }}</li>
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
      listMouseover: false,
      inputFocus: false
    }
  },
  computed: {
    showList () {
      return this.inputFocus || this.listMouseover
    }
  },
  methods: {
    reset () {
      this.inputFocus = false
      this.listMouseover = false
    },
    set (item) {
      this.item = item
      this.reset()
    }
  }
}
</script>

<style lang="css">
</style>
