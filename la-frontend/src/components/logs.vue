<template>
  <div class="logs">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item + ''" />
    </van-list>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'todo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      list: [
      ],
      logs: [
      ],
      loading: false,
      finished: false,
      i: 1
    }
  },
  mounted () {
    var ctx = this
    axios.get('/api/logs')
      .then(function (response) {
        ctx.logs = response.data.response
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        this.loading = false

        this.list.push(this.logs[this.i].text)

        this.i++
      }, 50)
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
