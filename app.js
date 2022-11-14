import Tasks from './view/Tasks.js'
import CreateTask from './view/CreateTask.js'
import login from './view/login.js'

const router = new VueRouter({
  routes: [
    { path: '/', component: Tasks, name: 'home' },
    { path: '/login', component: login },
    { path: '/create', component: CreateTask },
  ],
})

new Vue({
  el: '#app',
  template: '<div> <router-view /> </div>',
  components: {
    Tasks,
    CreateTask,
  },
  router,
})
