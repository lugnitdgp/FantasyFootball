<template>
  <v-app>
    

    <v-content>
      <router-view/>

    </v-content>
  </v-app>
</template>

<script>

export default {
  
  name: 'App',

  data: () => ({
    //
  }),
  created(){
    this.$vuetify.theme.dark = true
  }
};
</script>
