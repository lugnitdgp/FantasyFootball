<template >

<div class="container">

  <h1>Player List</h1>

  <table class="table table-striped table-borderes">
    <thead>
      <tr>
        <th>Name</th>
        <th>Player Type</th>
        <th>Marquee</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, id) in Players" :key="id">
        <td>{{ player.name}}</td>
        <td>{{ type[player.type]}}</td>
        <td>{{ player.isMarquee}}</td>
        <td>{{ player.price}}</td>
        <td>{{ player.rating.toFixed(2)}}</td>
        <td>
        <button @click="bid(player._id)" tag="button" class="btn btn-outline-secondary">Bid</button>

        </td>
      </tr>
    </tbody>
  </table>

</div>
</template>

<script>
import axios from 'axios'
export default {

name:'Players',
  data(){
    return{
       Players: [],
      type:["","Goalkeeper","Mid-Fielder","Defender","Forward"]
    }
},
methods :{
  bid(a){
    console.log(a)
    let routeData = this.$router.resolve({name: 'Player', query: {id: a}});
    window.open(routeData.href, '_blank')
  }
},
mounted(){
      axios.get('http://localhost:3000/getList')
      .then((response) => {
        console.log(response.data);
        this.Players = response.data;

      })
  .catch((error) => {
    console.log(error);
  });
}
}
</script>

<style>

</style>
