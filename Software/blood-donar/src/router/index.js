import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Registration from '@/components/Registration'
import DataTable from '@/components/DataTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/registration',
      component: Registration
    },
    {
      path: '/datatable',
      component: DataTable
    }
  ]
})
