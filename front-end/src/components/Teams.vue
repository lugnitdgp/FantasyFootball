<template>
  <v-app id="teams">

    <span class="bg"></span>
    <v-content >
      <v-card
        class="mx-auto overflow-hidden"
            >
    <v-app-bar
      color = "red "

>
<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer/>
      <center><v-toolbar-title><strong>TEAM DETAILS </strong></v-toolbar-title></center>
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

  <v-container fluid>
    <v-data-iterator
      :items="Teams"
      hide-default-footer
    >
    <template v-slot:default="props">

        <v-row>
          <v-col
            v-for=" team in props.items"
            :key="team.name"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-card
              color="#2196F3">
              <v-card-title class="subheading font-weight-bold">{{ team.name }}
              </v-card-title>



              <v-list dense>
                <v-list-item>
                  <v-list-item-content>MONEY LEFT:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ team.money }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>TOTAL PLAYERS:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ team.number.total}}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>GOALKEEPER :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ team.number.gk}}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>FORWARD :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ team.number.fwd}}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>DEFENDER :</v-list-item-content>
                  <v-list-item-content class="align-end">{{ team.number.df}}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>MIDFIELDER:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ team.number.mf}}</v-list-item-content>
                </v-list-item>
              </v-list>


              <v-card-actions>
                <v-spacer />
                <v-btn class="mx-2" light small @click="more()"> MORE </v-btn>

              </v-card-actions>


            </v-card>

          </v-col>
        </v-row>
</template>
    </v-data-iterator>
  </v-container>
  </v-content>
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
      type:["","Goalkeeper","Mid-Fielder","Defender","Forward"],
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
