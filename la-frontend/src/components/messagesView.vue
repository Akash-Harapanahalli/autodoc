<template>
  <div class="messagesView">
    <van-col span="0"> 
      <p>messages</p>
      <van-list 
        v-model="loading"
        :finished="finished"
      >
        <!-- @load="onLoad" -->
        <van-cell v-for="item in list" :key="item" :title="'<' + item.timestamp + '> ' + item.text + ' ' + item.tags"/>

      </van-list> 
    </van-col>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'messagesView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      list: [

      ],
      loading: false,
      finished: false
    }
  },
  mounted () {
    var ctx = this
    axios.get('/api/messages')
      .then(function (response) {
        ctx.list = response.data.response
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
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
</style>
