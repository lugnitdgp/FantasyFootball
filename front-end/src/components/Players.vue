<template >

<div class="container">
<div v-if="loading">
<img class="image" src="../../public/favicon.svg" alt="" width="120" height="120">
</div>
 <div v-else>
   <h1>Player List</h1>
  <table class="table table-striped table-borderes">
    <thead>
      <tr>
        <th>Name</th>
        <th>Player Type</th>
        <th>Marquee</th>
        <th>Price</th>
        <th>Bid</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, id) in Player" :key="id">
        <td>{{ player.name}}</td>
        <td>{{ type[player.type]}}</td>
        <td>{{ player.isMarquee}}</td>
        <td>{{ player.price}}</td>
        <td>
        <button @click="bid(player._id)" tag="button" class="btn btn-outline-secondary">Bid</button>

        </td>
      </tr>
    </tbody>
  </table>
 </div>
</div>
</template>

<script>
import axios from 'axios'
export default {

name:'Player',
  data(){
    return{
       Player: [],
       type:["","Goalkeeper","Mid-Fielder","Defender","Forward"],
       loading: false

    }
},
methods :{
  bid(a){
    var b ={id : a}
    axios.post('http://localhost:3000/beginBid', b)
              this.$router.push({name: 'Player', query: b});


  }
},
created(){
axios.get('http://localhost:3000/getStatus').then((res) =>{
      var a = res.data;
      if(a.hasStarted === true){
        if(a.lastPlayer.length >0){
          if(a.bidDone === true)
          this.$router.push('/players')
          else{
            var b = {id : a.lastPlayer}
           axios.post('http://localhost:3000/getPlayer',b).then(response => {
                  if(response.data.bidDone === false)
                  this.$router.push({name: 'Player', query: {id: a.lastPlayer}});

      })}
        }
        else{
          this.$router.push('/players')
        }
      }
    })
},
mounted(){
     this.loading = true //the loading begin
     axios.get('http://localhost:3000/getList')
    .then((response) => {
      console.log(response.data);
      this.Player = response.data;})
      .catch((error) => {
      location.reload()
      console.log(error) })
      .finally(() => (this.loading = false))
}
}
</script>

<style scoped>

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
