<template>
  <div class="mainScreen">
    <van-col span="0"> 
      <van-list 
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item + ''"/>

      </van-list> 
    </van-col>
  </div>
</template>

<script>
export default {
  name: 'mainScreen',
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
      setTimeout(() => {
        for (let i = 0; i < 0; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 2) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
