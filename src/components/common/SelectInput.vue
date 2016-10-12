<template lang="html">
  <div class="select-input">
    <input type="text" v-model="item" @focus="inputFocus = true" @blur="inputFocus = false" @keyup.enter="checkToSet()">
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
    },
    checkToSet (list) {
      // TODO:这个方法想做的事情是回车后自动补全
      // vue的过滤器仅在模板中才起作用,2.0有在讨论这个问题
      // https://github.com/vuejs/vue/issues/2756
    }
  }
}
</script>

<style lang="css">
</style>
