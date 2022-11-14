import CustomFetch from '../CustomFetch.js'

export default {
  template: `
<div>
  <input type="text" placeholder="email" v-model='loginData.email' />
  <input type="password" placeholder="password" v-model='loginData.password' />
  <button @click='login' >Submit</button>
</div>
    `,
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    login() {
      CustomFetch(`http://localhost:5000/login?include_auth_token`, {
        method: 'POST',
        body: JSON.stringify(this.loginData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => {
          localStorage.setItem(
            'Authentication-Token',
            data.response.user['authentication_token']
          )
          this.$router.push({ name: 'home' })
        })
        .catch((err) => {
          alert(err.message)
        })
    },
  },
}
