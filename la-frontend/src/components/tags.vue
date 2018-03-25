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
export default {
  name: 'tags',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      list: [

      ],
      searchResults: [

      ],
      loading: false,
      finished: false,
      searchString: ''
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        this.list.push(this.searchResults)
        this.loading = false

        if (this.list.length >= 40 || this.list.length >= this.searchResults.length) {
          this.finished = true
        }
      }, 50)
    },

    onSearch () {
      console.log('Searching for ' + this.searchString)
      var results = this.list.filter(item => (item.tags.includes(this.searchString)))
      this.searchResults = results
      console.log(results)
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
