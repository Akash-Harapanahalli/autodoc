<template>
  <div id="app">
    <header>
      <span>Autolog</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <van-tabs :active="active">
      <div class="navbar" v-for="index in tabs" :key="index">
        <router-link :to="index">
          <van-tab :title="index"/>
        </router-link>
      </div>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      tabs: [
        'HOME',
        'LOGS',
        'TODO'
      ]
    }
  }
}
</script>

<style>

body {
  margin: 0;
}

.navbar {
  font-size: 10px
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
