<template>

<div class="container-fluid bg-light py-3">
      <div class="row">
          <div class="col-md-6 mx-auto">
              <div class="card card-body">
                <h1>TEAM</h1>
                      <form>
                      <div class="form-group">
                          <label >FORWARD</label>
                          <input type="text" v-model="fwd" class="form-control">
                        </div>
                      <div class="form-group">
                          <label >MIDFIELD</label>
                          <input type="text" class="form-control" v-model="mf">
                        </div>
                      <div class="form-group">
                          <label >DEFENDER</label>
                          <input type="text" class="form-control" v-model="df">
                        </div>
                      <div class="form-group">
                          <label >GOALKEEPER</label>
                          <input type="text" class="form-control" v-model="gk">
                        </div>
                      <div class="form-group">
                          <label >MARQUEE Penalty</label>
                          <input type="text" class="form-control" v-model="mp">
                      </div>
                        <button   class="btn btn-primary" >SAVE</button>
                        <button   @click="useDef" class="btn btn-primary float-right">DEFAULT</button>
                        </form>
                   </div>
                 </div>
            </div>
      </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Config',
  data() {
    return {
      mf:'',
      df:'',
      gk:'',
      mp:'',
      fwd:''
    }
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


</style>
