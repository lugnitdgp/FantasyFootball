<template>

  <v-app >
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
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="light-green darken-1"
                dark
                flat
              >
              <v-spacer></v-spacer>
                <v-toolbar-title> Game Configurations </v-toolbar-title>
                <v-spacer />
                  
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                    v-model="gk"
                    label="Number of goalkeepers"
                    name="gk"
                    type="text"
                  />
                  
                  <v-text-field
                    v-model="mf"
                    label="Number of mid-fielders"
                    name="mf"
                    type="text"
                  />

                  <v-text-field
                    v-model="df"
                    label="Number of defenders"
                    name="df"
                    type="text"
                  /><v-text-field
                    v-model="fwd"
                    label="Number of forwards"
                    name="fwd"
                    type="text"
                  /><v-text-field
                    v-model="mp"
                    label="Penalty for more than 1 marquee player"
                    name="mp"
                    type="text"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click ="send" color="primary"> Send </v-btn>
                <v-btn @click="useDef" color="red darken-4">USE Default</v-btn>
                
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-container>           
    </v-content>
    
     <Footer/>

  </v-app>
 
</template>

<script>
import axios from 'axios'
import Footer from './layout/Footer';

export default {
  name: 'Config',components: {
    Footer
  },
  data() {
    return {
      drawer: false,
      mf:'',
      df:'',
      gk:'',
      mp:'',
      fwd:''
    }
  },
  mounted(){
    axios.get('http://localhost:3000/getStatus').then(res =>{
      var a = res.data;
      if(a.hasStarted === true){
        if(a.lastPlayer.length >0){
          if(a.bidDone === true)
          this.$router.push('/players')
          else
          this.$router.push({name: 'Player', query: {id: a.lastPlayer}});
        }
        else{
          this.$router.push('/register')
        }
      }
    })
  },
  methods: {
     useDef(){
       var a ={
          change: false}
           axios.post('http://localhost:3000/startGame', a).then(()=>{
           this.$router.push('/register')

        })
    },
    send(){

        var a ={
          change: true,
           mf:this.mf,
      df: this.df,
      gk:this.gk,
      mp:this.mp,
      fwd:this.fwd
        }

        axios.post('http://localhost:3000/startGame', a).then(()=>{
           this.$router.push('/register')

        })
    }
  }
}
</script>


<style >

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
</style>
