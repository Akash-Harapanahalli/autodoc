<template>
  <div id="app">
    <header>
      <img src="./assets/autologger_logo.png" height="100">
      <span>AutoLog: Automated Meeting Logger</span>
    </header>
    <main>
      <van-tabs @click="handleTabClick">
        <div v-for="index in tabs" :key="index.name">
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
  max-width: 80%;
  min-width: 300px;
  margin: auto;
  background-color: #ffffff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.van-tab {
  font-size: 20px;
  background-color: #ffffff;
}

main {
  text-align: center;
  margin-top: 0px;
}

header {
  margin: 0;
  height: 100px;
  padding: 0 16px 0 24px;
  background-color: #ffffff;
  color: #ffffff;
  position: relative;
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
