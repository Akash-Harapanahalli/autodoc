<template>
  <div class="todo">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <van-cell v-for="(item, index) in list" :key="item" :title="item + ''">
        
      </van-cell>
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
    axios.get('/api/live')
      .then(function (response) {
        ctx.logs = response.data.response
        console.log(response)
        ctx.onSearch()
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

      console.log('Searching for ' + 'todo')
      this.searchResults = this.logs.filter(log => ((log.tags.includes('tomorrow') || log.tags.includes('todo') || log.tags.includes('to do') || log.tags.includes('need to') || log.tags.includes('have to'))))
      console.log(this.searchResults)

      this.i = 0

      for (var j = 0; j < this.searchResults.length; j++) {
        this.onLoad()
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
