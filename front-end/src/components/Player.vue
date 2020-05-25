<template >

<div class="container">
  <div class="grid-7 element-animation">
    <!--card-1-->
    <div class="card color-card">

      <img src="../assets/u.png" alt="profile-pic" class="profile">
      <h1 class="title">{{Player.name}}</h1>

      <button class="btn color-a top">{{ type[Player.type]}}</button>

      <hr>
      <div class="container">
        <div class="content">
          <div class="grid-2">
            <button class="color-b circule"> <i class="fa fa-star fa-2x"></i></button>
            <h2 class="title">{{Player.rating.toFixed(2)}}</h2>
            <p class="followers">Rating</p>
          </div>
          <div class="grid-2">
            <button class="color-c circule"><i class="fa fa-usd fa-2x"></i></button>
            <h2 class="title">{{Player.price}}</h2>
            <p class="followers">Price</p>
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
     type:["","Goalkeeper","Mid-Fielder","Defender","Forward"]
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
}

}
</script>

<style>
body{
  background-color:#31394D;
}
.color-card{
  background:#31394D;
}

.color-card-2{
  background:#FDFEFF;
}
.title{
  color:#ffffff;
  font-family: roboto;
  weight:300;
}
.title-2{
  color:#2D354A;
  font-family: roboto;
  weight:300;
}
.followers{
  color:#666B7D;
  font-family:10px;
  margin-top:10px;
  font-family: roboto;
  weight:100;
}

.job-title{
  color:#7C8097;
  font-size:12px;
  weight:100;
  font-family:roboto;
}

.desc{
  font-size:12px;
  margin-left: 65px;
  margin-right: 65px;
  color:#B7B8C0;
  text-align:center;
}


ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}


.i-l{
  float:left;
  margin-left:16px;
  margin-top:16px;
}
.i-r{
  float:right;
  margin-right:16px;
  margin-top:16px;
}
.w{
   color:#ffffff;
}
.b{
   color:#2F3B4B;
}
hr{
  border-color:#7C8097;
  width:90%;
  margin-top:24px;
  margin-bottom:24px;
}

.hr-2{
  border-color:#E4E8ED;
}


.content{
  display:center;
}

*{
  font-family:Roboto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.top{
  margin-top:16px;
}
.color-a{
  background: linear-gradient(to top right, #8162CE, #F54BA5);
}

.color-b{
  background: linear-gradient(to bottom right, #C90A6D, #FF48A0);
}

.color-c{
  background: linear-gradient(to bottom right, #5E5AEC, #3F9EFC);
}
.color-d{
  background: linear-gradient(to bottom right, #6452E9, #639FF9);
}

.btn{
  border:none;
  height:40px;
  color:#ffffff;
  width:35%;
  font-size:16px;
  border-radius:30px;
  box-shadow: 0 13px 26px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
}
.btn:hover{
  border:solid 1px #DA59B1;
  height:40px;
  font-family: Roboto;
  color: #DA59B1;
  background:#ffffff;
  width:35%;
  border-color: linear-gradient(to top right, #8162CE, #F54BA5);;
  border-radius:30px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
}

.circule{
  border-radius:50%;
  border:none;
  height:60px;
  width:60px;
  color:#ffffff;
  box-shadow: 0 13px 26px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);

  }2

.up{
  margin-top:40px;
}

.img{
  width:280px;
}
.container {
	width: 960px;
	margin: 0 auto;
	padding: 0px;
	position: relative;
}

.container:after, .container:before {
	content: " ";
	display: table;
}

.container:after {
	clear: both;
}

.grid-1, .grid-2, .grid-3, .grid-4, .grid-5, .grid-6, .grid-7, .grid-07,  .grid-8, .grid-9, .grid-10, .grid-11, .grid-12, .grid-13, .grid-14, .grid-15, .grid-16, .grid-1-3 {
	float: left ;
	margin-left: 10px;
	margin-right: 10px;
}

.grid-1 	{width: 40px;}
.grid-2 	{width: 100px;}
.grid-3 	{width: 160px;}
.grid-4 	{width: 220px;}
.grid-5 	{width: 280px;}
.grid-6 	{width: 340px;}
.grid-07  {width:375px;}
.grid-7 	{width: 400px;}
.grid-8 	{width: 460px;}
.grid-9 	{width: 520px;}
.grid-10 	{width: 580px;}
.grid-11 	{width: 640px;}
.grid-12 	{width: 700px;}
.grid-13 	{width: 760px;}
.grid-14 	{width: 820px;}
.grid-15 	{width: 880px;}
.grid-16 	{width: 940px;}
.grid-1-3	{width: 300px;}



/*cards*/
body {
  background: #e2e1e0;
  text-align: center;
}

.card {
  border-radius: 6px;
  display: inline-block;
  height: 667px;
  margin: 1rem;
  position: relative;
  width: 375px;
  box-shadow: 0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0,0,0,0.15), 0 15px 12px rgba(0,0,0,0.15);
}

.card-6{
  -webkit-box-shadow: 10px 10px 44px 15px rgba(0,0,0,0.14);
-moz-box-shadow: 10px 10px 44px 15px rgba(0,0,0,0.14);
box-shadow: 10px 10px 44px 15px rgba(0,0,0,0.14);
}




.card-elevation{
 /*sombra*/
   -moz-box-shadow:                                                             7px 7px 5px 0px rgba(50, 50, 50, 0.25);
   -webkit-box-shadow:                                                          7px 7px 5px 0px rgba(50, 50, 50, 0.25);
   box-shadow:                                                                  7px 7px 5px 0px rgba(50, 50, 50, 0.25);;
}



.header{
  background: linear-gradient(to bottom right, #F762D2, #FF51A0);
  height:250px;
}


.profile{
  border-radius:100%;
  margin-top:60px;
  width:132px;
  height:128px;
}

.center{
      display: block;
    margin-left: auto;
    margin-right: auto
}


.element-animation{
  animation: animationFrames ease 2s;
  animation-iteration-count: 2;
  transform-origin: 50% 50%;
  animation-fill-mode:forwards; /*when the spec is finished*/
  -webkit-animation: animationFrames ease 1.5s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-fill-mode:forwards; /*Chrome 16+, Safari 4+*/
}


@keyframes animationFrames{
  0% {
    opacity:0;
    transform:  translate(-1500px,0px)  ;
  }
  60% {
    opacity:1;
    transform:  translate(30px,0px)  ;
  }
  80% {
    transform:  translate(-10px,0px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
}

@-webkit-keyframes animationFrames {
  0% {
    opacity:0;
    -webkit-transform:  translate(-1500px,0px)  ;
  }
  60% {
    opacity:1;
    -webkit-transform:  translate(30px,0px)  ;
  }
  80% {
    -webkit-transform:  translate(-10px,0px)  ;
  }
  100% {
    opacity:1;
    -webkit-transform:  translate(0px,0px)  ;
  }
}


</style>
