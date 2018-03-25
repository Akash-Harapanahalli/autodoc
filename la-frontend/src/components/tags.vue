<template>
  <div class="tags">
    <van-search search="Tag Search" @search="onSearch" v-model="searchString"/>
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
  name: 'tags',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      list: [
      ],
      searchResults: [
      ],
      logs: [
      ],
      loading: false,
      finished: false,
      searchString: '',
      i: 0
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

        this.list.push(this.searchResults[this.i].text)

        this.i++
      }, 50)
    },

    onSearch () {
      this.searchResults = []
      this.list = []

      console.log('Searching for ' + this.searchString)
      this.searchResults = this.logs.filter(log => (log.tags.includes(this.searchString)))
      console.log(this.searchResults)
      this.i = 0

      for(var j = 0; j < this.searchResults.length; j++){
        this.onLoad();
      }
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
