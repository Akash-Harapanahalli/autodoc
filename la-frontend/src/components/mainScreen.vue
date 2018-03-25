<template>
  <div class="mainScreen">
    
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
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 10) {
          this.finished = true
        }
      }, 100)
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
  padding: 100px;
  color: #ffffff;
  background-color: #2c3e50;
  height: 200px;
}
</style>
