<template >

<div class="container">

  <game></game>
  <h1>Player List</h1>

  <table class="table table-striped table-borderes">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Bid</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, id) in Player" :key="id">
        <td>{{ player.name}}</td>
        <td>{{ player.price}}</td>
        <td>
          <div class="input-group" type="number">
           <input type="number" id="replyNumber" min="0" data-bind="value:replyNumber" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Bid</button>
          </div>
        </div>


        </td>
        <td>{{ player.rating.toFixed(2)}}</td>

      </tr>
    </tbody>
  </table>

</div>
</template>

<script>
import Game from  './Game.vue'
import axios from 'axios'
export default {
  components: {
    game : Game
  },
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
