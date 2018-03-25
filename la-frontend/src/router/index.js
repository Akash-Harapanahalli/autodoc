import Vue from 'vue'
import Router from 'vue-router'
import mainScreen from '@/components/mainScreen'
import messagesView from '@/components/messagesView'
import todo from '@/components/todo'
import logs from '@/components/logs'
import tags from '@/components/tags'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainScreen',
      component: mainScreen
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },
    {
      path: '/messages',
      name: 'messagesView',
      component: messagesView
    },
    {
      path: '/logs',
      name: 'logs',
      component: logs
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags
    }
  ]
})

/*

class Log {
  constructor () {
    this.string = ''
    this.tags = {}
    this.timestamp = ''
  }

  genTags () {
    // create functionality
  }
}

var l = new Log() // ==> to stop the compiler from cussing me out.

*/
