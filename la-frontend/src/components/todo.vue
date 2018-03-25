<template>
  <div class="todo">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
    
        <div v-for="item in list" :key="item" >
          <transition name="fade">
            <van-cell :title="item + ''" />
          </transition>
         </div>
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
      todos: [
      ],
      loading: false,
      finished: false,
      i: 0
    }
  },
  mounted () {
    var ctx = this
    axios.get('/api/todos')
      .then(function (response) {
        ctx.todos = response.data.response
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

        this.list.push(this.todos[this.i].text)

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
