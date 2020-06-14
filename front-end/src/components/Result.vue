<template >
<v-app id="Result">
  <span class="bg"></span>
      <v-content>
<v-card
  class="mx-auto overflow-hidden"
            >
    <v-app-bar
      color = "red "
      >

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer/>
      <center><v-toolbar-title><strong> Result </strong></v-toolbar-title></center>
      <v-spacer/>
    </v-app-bar>

</v-card>


<v-navigation-drawer
v-model="drawer"
absolute
temporary
>
<v-list
nav
dense
>
<v-list-item-group
active-class="deep-purple--text text--lighten-2"
>
<router-link tag="span" to='/'>
<v-list-item>

  <v-list-item-icon>
    <v-icon>mdi-home</v-icon>
  </v-list-item-icon>
  <v-list-item-title>Home</v-list-item-title>

</v-list-item>
</router-link>


</v-list-item-group>
</v-list>
</v-navigation-drawer>
<v-container absolute fluid
>


<v-row
align="center"
justify="center"
>
<v-col
  cols="12"
  md="9"
>
  <v-card class="elevation-12">
    <v-toolbar
      color="light-blue darken-4"
>
    <v-spacer></v-spacer>
      <v-toolbar-title class="display-1"> RANKING </v-toolbar-title>
      <v-spacer />

    </v-toolbar>
  <v-container>
<v-container>

<v-data-table
:headers="headers"
:items="Teams"
:sort-by="['rating']"
:sort-desc="[true]"
hide-default-footer
class="elevation-1"
>
<template v-slot:item="row">
<tr>

  <td>{{row.item.name}}</td>
  <td>{{row.item.rating.toFixed(2)}}</td>

</tr>
</template>

</v-data-table>

</v-container>
</v-container>
</v-card>



    </v-col>
    </v-row>

      </v-container>

    </v-content >
  <Footer/>

     </v-app>


</template>

<script>
import axios from 'axios'
import Footer from './layout/Footer';
export default {

name:'Teams',
data(){
  return{
      drawer: false,
      headers:[
        {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Rating',align: 'start',sortable: false,value: 'type' }
      ],
      Teams: [],
      money: ''

  }
},
mounted(){

     axios.get('http://localhost:3000/getTeamstats')
     .then((response) => {
      console.log(response.data);
      this.Teams = response.data;})
      .catch((error) => {
      console.log(error) })

}
}
</script>

<style scoped>

.bg {
    width: 100%;
    height: 90%;
    position: absolute;
    top:0;
    left: 0;
    opacity: .4;
    background: url('../../img/bg1.png' ) no-repeat  ;
    background-size: cover;
    background-color: blue;
    transform: scale(1.1);

  }
  #inspire{
    height: 100%;
    width: 100%;
    overflow: auto;
    padding-right: 20px;
  }

</style>
