import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Vote from 'components/vote/vote'
import Detail from 'components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      component: Index
    },{
      path: '/vote/:id',
      component: Vote
    },{
      path: '/detail',
      component: Detail
    }
  ]
})
