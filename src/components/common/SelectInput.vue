<template lang="html">
  <div class="select-input">
    <input type="text" v-model="item" @focus="inputFocus = true" @blur="inputFocus = false" @keyup.enter="checkToSet()" @keyup.up="up" @keyup.down="down">
    <ul class="list" v-show="showList" @mouseover="listMouseover = true" @mouseout="listMouseover = false">
      <!-- <li class="item" v-for="listItem in list | filterBy item" @click="set(listItem)">{{ listItem }}</li> -->
      <li class="item" v-for="listItem in list" @click="set($index, true)" :class="{'active': $index === index}">{{ listItem }}</li>
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
      inputFocus: false,
      index: -1
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
    set (index, reset = false) {
      this.index = index === 0 ? 0 : index || this.index
      this.item = this.list[this.index]
      if (reset) {
        this.reset()
      }
    },
    checkToSet (list) {
      // TODO:这个方法想做的事情是回车后自动补全
      // vue的过滤器仅在模板中才起作用,2.0有在讨论这个问题
      // https://github.com/vuejs/vue/issues/2756
    },
    up () {
      if (this.index > 0) {
        this.index--
      }
      else {
        this.index = this.list.length - 1
      }
      this.set()
    },
    down () {
      if (this.index < this.list.length - 1) {
        this.index++
      }
      else {
        this.index = 0
      }
      this.set()
    }
  }
}
</script>

<style lang="css">
</style>
