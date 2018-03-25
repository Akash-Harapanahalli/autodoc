import Vue from 'vue'
import Router from 'vue-router'
import mainScreen from '@/components/mainScreen'
import messagesView from '@/components/messagesView'
import todo from '@/components/todo'

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
    }
  ]
})
