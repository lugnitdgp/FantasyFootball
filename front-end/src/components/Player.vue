<template >
<div class="container">
  <div class="row">
    <div class="col-6">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../assets/t.png" alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title">{{Player.name}}</h3>
          <p class="card-text">{{ type[Player.type]}}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="fa fa-star fa-x"></i>     {{Player.rating.toFixed(2)}}</li>
          <li class="list-group-item"><i class="fa fa-usd fa-x"></i> {{Player.price}}</li>

        </ul>
      </div>
  </div>


    <div class="col-6">
      <div class="card">
        <div class="card-body">
    <div class="form-group">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Teams</label>
              </div>
                  <select class="custom-select" id="inputGroupSelect01">
                    <option  v-for="(team, id) in Teams" :key="id">
                    {{team.name}}
                </option>
            </select>
      </div>
 <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">$</span>
         </div>
           <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
              <div class="input-group-append">
             <span class="input-group-text">@Sold</span>
             </div>
         </div>
   <button type="button" class="btn btn-secondary">SOLD</button>
  </div>
</div>
</div>
</div>
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
     Teams: [],

  }
},

created(){
      var a ={id: this.$route.query.id}
      axios.post('http://localhost:3000/getPlayer',a)
      .then((response) => {
        console.log(response.data);
        this.Player = response.data;

      })
  .catch((error) => {
    console.log(error);
  });
},
mounted(){
axios.get('http://localhost:3000/getTeams')
.then((response) => {
  console.log(response.data);
  this.Teams = response.data;

})
.catch((error) => {
  console.log(error);
});
}


}
</script>

<style>


</style>
