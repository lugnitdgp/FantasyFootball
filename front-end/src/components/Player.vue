<template >
<div>
<div class="page">
 <v-card
   class="mx-auto overflow-hidden">
    <div class="main">
      <div class="box1">
 </div>
    <div class="box2">
        <v-container absolute fluid
      >
<v-row>
<v-col
      cols="12"
>
     <v-card
      class="mx-auto"
        max-width="600"
        outlined
        color="#2196F3"
      >
      <v-list-item three-line>
      <v-list-item-content>
        <div class="subtitle-2">NAME</div>
        <v-list-item-title class="display-2">{{Player.name}}</v-list-item-title>

      </v-list-item-content>

      <v-list-item-avatar
       tile
       size="90"

     >
     <v-img
     src="../assets/a1.png"></v-img>
   </v-list-item-avatar>
   </v-list-item>
      </v-card>
          </v-col>
          <v-col
            cols="12"
  >
      <v-card
      class="mx-auto"
        max-width="600"
        outlined
        color="#2196F3"
      >
      <v-list-item three-line>
      <v-list-item-content>
        <div class="subtitle-2">POSITION</div>
        <v-list-item-title class="display-2">{{ type[Player.type]}}</v-list-item-title>
        <v-list-item-subtitle> MARQUEE: {{Player.isMarquee}}</v-list-item-subtitle>

      </v-list-item-content>

      <v-list-item-avatar
       tile
       size="90"

     >
     <v-img
     src="../assets/icon.png"></v-img>
   </v-list-item-avatar>
   </v-list-item>

</v-card>
    </v-col>
    <v-col
      cols="12"
  >
      <v-card
      class="mx-auto"
        max-width="600"
        outlined
        color="#2196F3"
      >
      <v-list-item three-line>
      <v-list-item-content>
        <div class="subtitle-2">PRICE</div>
        <v-list-item-title class="display-2">{{money}}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
       tile
       size="90"

     >
     <v-img
     src="../assets/dollar.png"></v-img>
   </v-list-item-avatar>
   </v-list-item>
</v-card>
  </v-col>
</v-row>
</v-container>
            <v-container   >
    <v-row
          align="center"
        >
          <v-col
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#2196F3"
                dark
                flat
              >
              <v-spacer></v-spacer>
                <v-toolbar-title> BID DETAILS </v-toolbar-title>
                <v-spacer />

              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                    v-model="money"
                    label="PRICE"
                    name="money"
                    type="text"
                  />

                <v-select
                  :items="Teams"
                  label="Team"
                  v-model="select"
                  item-text="name"
                  item-value="_id"

                >

                  ></v-select>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn @click="submit()" color="primary"> SOLD </v-btn>
                <v-btn light @click="unsold()"  color="red">UNSOLD</v-btn>

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
  </div>
  </div>
    </v-card>
</div>
<div id="splash">
  <div class="anim">
    <div id="loader">
      <svg version="1.1" width="60px" height="70px" viewBox="0 0 60 70">
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        <g id="airplane">
          <path fill="#000" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
          h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
          c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
          c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
          c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
          C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(44,0) rotate(90 0 0)" />
        </g>
        <g id="shadow" transform="scale(.9)">
          <path fill="#000" fill-opacity="0.3" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
      		h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
      		c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
      		c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
      		c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
      		C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(64,30) rotate(90 0 0)" filter="url(#f1)" />
        </g>
      </svg>
    </div>
  </div>
</div>
</div>

</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios'
export default {

name:'Player',
data(){
  return{
     select:null,
     Player: [],
     type:["","Goalkeeper","Mid-Fielder","Defender","Forward"],
     Teams: [],
     money: ''

  }
},

methods:{
  submit(){
    
    const packag ={
      pid:this.Player._id,
      tid:this.select,
      money:this.money
    }
    axios.post('http://localhost:3000/bidDone', packag).then((res)=>{
        if(res.data.success === true){
          alert('Player SOLD')
          this.$router.push('/players')
        }
        else
        alert('unknown error. try again')
    })
  },
  unsold(){
    var a ={
      id : this.Player._id
    }

    axios.post('http://localhost:3000/unsold',a).then(()=>{
      this.$router.push('/players')
    })

  }
},

mounted(){
    this.$vuetify.theme.dark =false
      var a ={id: this.$route.query.id}
      axios.post('http://localhost:3000/getPlayer',a)
      .then((response) => {
        console.log(response.data);
        this.Player = response.data;
        this.money = response.data.price
        if (this.Player.bidDone === true){
        alert('This player has already been sold')
        this.$router.push('/players')
        }
        else{
          axios.post('http://localhost:3000/getTeams', a)
.then((respon) => {
  console.log(respon.data);
  this.Teams = respon.data;

})
        }
      })
  .catch((error) => {
    console.log(error)
    location.reload()
  });
}


}
</script>

<style scoped>

#splash {
background: #cc1f2f;
background-repeat: repeat-y;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
animation: splash 3s ease-in;
animation-fill-mode: forwards;
-webkit-animation-fill-mode: forwards;
}

#loader {
position: absolute;
left: 50%;
top: 0;
transform: translate(-50%,0);
}

#loader:after {
content: '';
position: absolute;
left: 50%;
margin-left: -8px;
bottom: -170px;
width: 3px;
background: #fff;
background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
height: 200px;
}

#loader:before {
content: '';
position: absolute;
left: 50%;
margin-left: 8px;
bottom: -190px;
width: 3px;
background: #000;
background: linear-gradient(to bottom, rgba(0,0,0,.2) 0%, rgba(0,0,0,.2) 50%, rgba(0,0,0,0) 100%);
height: 200px;
}

#splash .anim {
height: 100%;
position: absolute;
left: 50%;
width: 100px;
transform: translate(-50%,100%);
animation: loader 4s linear;
animation-fill-mode: forwards;
-webkit-animation-fill-mode: forwards;
}

@keyframes loader {
0% {
  transform: translate(-50%,110%);
}
30% {
  transform: translate(-50%,50%);
}
100% {
  transform: translate(-50%,0%);
}
}

@keyframes splash {
0% {
  transform: translate(0%,0%);
}
50% {
  transform: translate(0%,0%);
}
100% {
  transform: translate(0%,-100%);
}
}


body{
margin: 0;
padding: 0;

}

.main
{
  width: 100%;
  height: 100vh;
  display: inline-flex;

}

  .main .box1
  {
    width: 50%;
    height: 100%;

  background-color:teal;  background-image: url('../assets/avatar.jpg');
  background-size: cover;
  background-position: center;
  }

.box2
  {
    width: 50%;
    height: 100%;

  }
@media only screen and (max-width: 600px) {
  .main  {
    display: block;
  }
  .main .box1
  {
      width: 100%;
      height: 70vh;
  }
  .box2
  {
      width: 100%;
      height: 70vh;
  }
}


</style>
