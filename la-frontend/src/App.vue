<template>
  <div id="app">
    <header>
      <span>Autolog</span>
    </header>
    <main>
      <van-tabs @click="handleTabClick">
        <div class="navbar" v-for="index in tabs" :key="index.name">
          <van-tab :title="index.name" />
        </div>
      </van-tabs>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      tabs: [
        {name: 'HOME', link: 'messages'},
        {name: 'LOGS', link: 'logs'},
        {name: 'TODO', link: 'todo'},
        {name: 'TAG SEARCH', link: 'tags'}
      ]
    }
  },
  methods: {
    handleTabClick (index) {
      console.log('hello')
      this.$router.push(this.tabs[index].link)
    }
  }
}
</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  font-size: 10px;
}

main {
  text-align: center;
  margin-top: 0px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
