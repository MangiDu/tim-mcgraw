<template lang="html">
  <div>
    <group-section></group-section>
    <!-- <div class="">
      <label>描述</label>
      <input type="text" v-model="description">
    </div>
    <div class="">
      <label>方法</label>
      <select v-model="method">
        <option>GET</option>
        <option>POST</option>
        <option>DELETE</option>
        <option>PUT</option>
        <option>PATCH</option>
      </select>
    </div>
    <div class="">
      <label>参数</label>
      <ul v-if="params.length">
        <li v-for="para in params">名: {{ para.name }}; 值: {{ para.value }}; 类型: {{ para.type }}</li>
      </ul>
      <label>名</label>
      <input type="text" v-model="paraCache.name">
      <label>值</label>
      <input type="text" v-model="paraCache.value">
      <label>类型</label>
      <select v-model="paraCache.type">
        <option>string</option>
        <option>number</option>
        <option>boolean</option>
        <option>array</option>
        <option>enum</option>
      </select>
      <button type="button" name="button" @click="addParam">添加</button>
    </div>
    <div class="">
      <label>请求</label>

    </div>
    <div class="">
      <label>响应</label>

    </div> -->
  </div>
</template>

<script>
import GroupSection from './sections/Group'
export default {
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      description: '',
      method: '',
      params: [],
      paraCache: {}
    }
  },
  computed: {},
  mounted () {},
  methods: {
    addParam () {
      this.params.push(Object.assign({}, this.paraCache))
      console.log(this.params)
      this.paraCache = {}
    }
  },
  components: {
    GroupSection
  }
}
</script>

<style lang="css">
</style>
