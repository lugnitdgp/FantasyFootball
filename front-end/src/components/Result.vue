<template >
  <div v-if="loading">
    <img class="image" src="../../public/favicon.svg" alt width="120" height="120" />
  </div>
  <div v-else>
    <v-app id="Result">
      <span class="bg"></span>
      <v-content>
        <v-card class="mx-auto overflow-hidden">
          <v-app-bar color="red ">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-spacer />
            <center>
              <v-toolbar-title>
                <strong>Result</strong>
              </v-toolbar-title>
            </center>
            <v-spacer />
          </v-app-bar>
        </v-card>

        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group active-class="deep-purple--text text--lighten-2">
              <v-list-item @click="end">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-container absolute fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" md="9">
              <v-card class="elevation-12">
                <v-toolbar color="light-blue darken-4">
                  <v-spacer></v-spacer>
                  <v-toolbar-title class="display-1">RANKING</v-toolbar-title>
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
                  <v-spacer></v-spacer>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-btn @click="end" color="red darken-4">GO HOME</v-btn>
          </v-row>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>



<script>
import axios from "axios";
import Footer from "./layout/Footer";
export default {
  name: "Teams",
  components: {
    Footer
  },
  data() {
    return {
      loading: true,

      drawer: false,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Rating", align: "start", sortable: true, value: "type" }
      ],
      Teams: [],
      money: ""
    };
  },
  methods: {
    end() {
      axios.post("http://localhost:3000/end2").then(() => {
        this.$router.push("/");
      });
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/getTeamstats")
      .then(response => {
        console.log(response.data);
        this.Teams = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.sleep(500).then(() => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  background: url("../../img/bg1.png") no-repeat;
  background-size: cover;
  background-color: blue;
  transform: scale(1.1);
}
#inspire {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding-right: 20px;
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infi-nite;
  animation: spin 4s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>