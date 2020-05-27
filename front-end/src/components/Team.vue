<template>

<div class="container-fluid bg-light py-3">
      <div class="row">
          <div class="col-md-6 mx-auto">
              <div class="card card-body">
                <h1>TEAM</h1>
                      <form>
                      <div class="form-group">
                          <label >FORWARD</label>
                          <input type="text" class="form-control">
                        </div>
                      <div class="form-group">
                          <label >MIDFIELD</label>
                          <input type="text" class="form-control">
                        </div>
                      <div class="form-group">
                          <label >DEFENDER</label>
                          <input type="text" class="form-control">
                        </div>
                      <div class="form-group">
                          <label >GOALKEEPER</label>
                          <input type="text" class="form-control">
                        </div>
                      <div class="form-group">
                          <label >MARQUEE</label>
                          <input type="text" class="form-control">
                      </div>
                        <button   class="btn btn-primary" >SAVE</button>
                        <button   @click="done" class="btn btn-primary float-right">DEFAULT</button>
                        </form>
                   </div>
                 </div>
            </div>
      </div>

</template>

<script>
export default {
  name: 'Team',
  data() {
    return {

    }
  },
  methods: {
     done(){
      this.$router.push('/register')
    }
  }
}
</script>


<style >


</style>
