<template>
  <div class="messagesView">
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
