<template>

<div class="container mt-5">
  <div v-if="loading">
    <img class="image" src="../../public/favicon.svg" alt="" width="120" height="120">
  </div>
  <div v-else>
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
      loading: true

    }
  },
 created(){
   this.$vuetify.theme.dark=true
   this.sleep(500).then(()=>{
        this.$vuetify.theme.dark=false
        

   }).finally(()=>{
     this.loading = false
   })

     
   


 },
  methods: {
     sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
    ,
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


<style>

.image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin:-60px 0 0 -60px;
    webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infi-nite;
    animation:spin 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>



