import Tasks from './view/Tasks.js'
import CreateTask from './view/CreateTask.js'

new Vue({
  el: '#app',
  template: '<div> <Tasks /></div>',
  components: {
    Tasks,
    CreateTask,
  },
})
