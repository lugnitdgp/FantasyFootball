<template>

<div class="container mt-5">


  <div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-body">

            <div class="form-group">
              <label for="email">Team Name</label>
              <input type="text" class="form-control" v-model="name" required>
            </div>
            <div class="form-group">
              <label for="money">Base Price </label>
              <input type="" class="form-control" v-model="money" require>
            </div>
            <button @click="register">Register</button>
            <v-spacer/>
            <button @click="auction">Start Auction</button>
            {{ error }}
        </div>
      </div>
    </div>
  </div>
</div>



</template>
<script>
import axios from 'axios';
export default {
  name: 'Register',
  data() {
    return {
      team: '',
      money: '',
      error: '',
    }
  },
  methods: {
    register() {
      const team = {
        name: this.name,
        money: this.money
      }
      axios.post('http://localhost:3000/addTeam', team)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            if(res.data.done === false)
            alert(`ERROR! ${res.data.message}`)
            else{
            alert(`Sucesss! ${res.data.message}`)
            location.reload()}
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        })
    },
    auction(){
      axios.post('http://localhost:3000/loadCsv').then(()=>{
                this.$router.push('/players')

      })
    }
  }
}
</script>


<style >


</style>
