import CustomFetch from '../CustomFetch.js'

export default {
  template: `<div> 
  <input type='text' placeholder='Task Title' v-model='formData.title' />
  <input type='text' placeholder='Task Description' v-model='formData.description' />
  <button @click='createTask'> Create Task</button>
  </div>`,
  data() {
    return {
      formData: {
        title: null,
        description: null,
      },
    }
  },
  methods: {
    createTask() {
      if (this.formData.title == null || this.formData.description == null) {
        alert('Form data is empty')
      } else {
        CustomFetch('http://localhost:5000/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        })
          .then((data) => {
            alert('Data was created')
          })
          .catch((err) => {
            alert(err.message)
          })
      }
    },
  },
}
