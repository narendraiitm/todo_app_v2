import CustomFetch from '../CustomFetch.js'
import Error from '../components/Error.js'
import Wait from '../components/Wait.js'

export default {
  template: `
  <div>
    <Error v-if='error' />
    <ol v-else-if='tasks'>
        <li v-for='(task, index) in tasks'>
            <span>{{task.title}}</span> <button @click='deleteTask(task.id, index)'> Delete Task</button> 
        </li>
    </ol>
    <Wait v-else></Wait>
</div>
  `,
  data() {
    return {
      tasks: null,
      error: false,
    }
  },
  methods: {
    deleteTask(id, index) {
      CustomFetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          this.tasks.splice(index, 1)
        })
        .catch((err) => {
          alert(err.message)
        })
    },
  },
  components: {
    Error,
    Wait,
  },

  mounted() {
    CustomFetch('http://localhost:5000/api/tasks')
      .then((data) => {
        this.tasks = data
        console.log(data)
      })
      .catch((err) => {
        this.error = err.message
        console.log(err)
      })
  },
}
