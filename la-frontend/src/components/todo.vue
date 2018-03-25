<template>
  <div class="todo">
    <van-col span="0"> 
      <van-list 
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <van-cell class="cell" v-for="item in list" :key="item" :title="item + ''" :url="item"/> 
      </van-list> 
    </van-col>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      list: [
        'todo',
        'logs'
      ],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      /*
      setTimeout(() => {
        if (this.list.length >= 2) {
          this.finished = true
          this.loading = false
        }
      }, 500)
      */
      this.loading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.cell {
  font-size: 30px;
  margin: 0px;
  padding: 30px;
  color: #ffffff;
  background-color: #2c3e50
}
</style>
