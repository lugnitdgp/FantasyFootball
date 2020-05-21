<template >

<div class="container">
  <h1>Player List</h1>

  <table class="table table-striped table-borderes">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, id) in Player" :key="id">
        <td>{{ player.name}}</td>
        <td>{{ player.price}}</td>
         <td>{{ player.rating.toFixed(2)}}</td>

      </tr>
    </tbody>
  </table>

</div>
</template>

<script>
import axios from 'axios'
export default {
name:'Player',
  data(){
    return{
       Player: [],
    }
},
mounted(){
  axios.get('http://localhost:3000/getList')
  .then((response) => {
    console.log(response.data);
    this.Player = response.data;

  })
  .catch((error) => {
    console.log(error);
  });
}
}
</script>

<style>

</style>
