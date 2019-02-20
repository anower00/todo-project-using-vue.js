<template>
<div class="dashboard">
  <h1 class="subheadding grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout class="mb-3">

        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">By project Name</span>
        </v-btn>
        <span>sort project by project name</span>
        </v-tooltip>

        <v-tooltip top>
            <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By Person</span>
        </v-btn>
        <span>sort projects by person name</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <v-flex xs3 md6>
              <div class="caption grey--text">Project Title</div>
              <div>{{project.title}}</div>
            </v-flex>
            <v-flex xs3 sm4 md2>
              <div class="caption grey--text">person</div>
              <div>{{project.person}}</div>
            </v-flex>
            <v-flex xs3 sm4 md2>
              <div class="caption grey--text">Due Bye</div>
              <div>{{project.due}}</div>
            </v-flex>
            <v-flex xs3 sm4 md2>
              <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
              <v-icon right>star</v-icon>
              </div>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      </v-container>


      <!-- <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3> 
          <v-btn outline block class="warning">1</v-btn>
        </v-flex>
        <v-flex xs4 md3> 
          <v-btn outline block class="warning">2</v-btn>
        </v-flex>
      </v-layout> -->
    <!-- </v-container> -->
</div>
</template>

<script>
  export default {
    data(){
      return{
        projects:[
        {title:'design a new website',person: 'ninja',due: '1st jan 2019',status:'ongoing',content:'actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as prop'},
        {title:'new website',person: 'adeb',due: '1st jan 2019',status:'complete',content:'actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props'},
        {title:'design website',person: 'hasan',due: '1st jan 2019',status:'overdue',content:'actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props'},
        {title:'website',person: 'rakin',due: '1st jan 2019',status:'complete',content:'actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props'},
      ]
      }
    },
    methods:{
      sortBy(prop){
        this.projects.sort((a,b) => a[prop]<b[prop] ? -1:1)
      }
    }
  }
</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}
</style>

