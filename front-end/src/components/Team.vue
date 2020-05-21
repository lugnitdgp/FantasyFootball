<template >
  <div class="container">
  <div  v-for="(team, id) in Team" :key="id">
  <div class="card">
    <div class="card-header">
     {{ team.name }}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{team.money}}</h5>

    </div>
  </div>
</div>
</div>
</template>


<script>
import axios from 'axios'
export default {
name:'Team',
data(){
  return{
     Team: [],
  }
},
mounted(){
axios.get('http://localhost:3000/getTeams')
.then((response) => {
  console.log(response.data);
  this.Team = response.data;

})
.catch((error) => {
  console.log(error);
});
  }
}
</script>


<style>

</style>
