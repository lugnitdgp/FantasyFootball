<template >

<div v-if="loading">
<img class="image" src="../../public/favicon.svg" alt="" width="120" height="120">
</div>
 <div v-else>
     <v-app id="config">
            <v-content>
<v-card
  class="mx-auto overflow-hidden"
            >
    <v-app-bar
      color = "red "
      >


      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer/>
      <center><v-toolbar-title><strong> Fantasy Football 2020</strong></v-toolbar-title></center>
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
<<<<<<< HEAD
                
                
=======

                flat
>>>>>>> f8d5d744bb37173cd064cf3c42f1c19a23388687
              >
              <v-spacer></v-spacer>
                <v-toolbar-title class="display-1"> Player List </v-toolbar-title>
                <v-spacer />

              </v-toolbar>
<<<<<<< HEAD
            <v-container><v-text-field
=======
     <v-text-field
>>>>>>> f8d5d744bb37173cd064cf3c42f1c19a23388687
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        hide-details
      ></v-text-field>
  <v-container>
  <v-data-table
    :headers="headers"
    :items="Player"
    :items-per-page="742"
    :search="search"
    hide-default-footer
    class="elevation-1"
  >
  <template v-slot:item="row">
          <tr>
            <td>{{row.item.name}}</td>
            <td>{{type[row.item.type]}}</td>
            <td>{{row.item.isMarquee}}</td>
            <td>{{row.item.price}}</td>
            <td>
                <v-btn :disabled="row.item.bidDone" class="mx-2" light small  @click="bid(row.item._id)">
                  BID
                </v-btn>
            </td>
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

 </div>

</template>

<script>
import axios from 'axios'
import Footer from './layout/Footer';

export default {

name:'Player',components: {
    Footer
  },
  data(){
    return{
      search:'',
            drawer: false,

      headers:[
        {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Player Type',align: 'start',            sortable: false,
 value: 'type' },
          { text: 'Marquee',align: 'start',            sortable: false,
 value: 'isMarquee' },
          { text: 'Price',            sortable: false,
 value: 'price' },
          { text: 'Bid',            sortable: false,
value:'_id'},


      ],
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
      .finally(() => (this.loading = false,
            this.$vuetify.theme.dark=true))
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
