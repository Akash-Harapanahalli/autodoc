import Vue from 'vue'
import Router from 'vue-router'
import mainScreen from '@/components/mainScreen'
import messagesView from '@/components/messagesView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainScreen',
      component: mainScreen
    },
    {
      path: '/messages',
      name: 'messagesView',
      component: messagesView
    }
  ]
})
