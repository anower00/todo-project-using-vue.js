<template>
<div class="projects">
  <h1 class="subheadding grey--text">Projects</h1>
 

    <v-container fluid class="my-5">
      <v-expansion-panel>
      <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
        <div slot="header">{{project.title}}</div>
        <v-card>
          <v-card-text class="px-4 grey--text">
            <div class="font-weight-blod">due by {{project.due}}</div>
            <div>{{project.content}}</div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-container>
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
        
        {title:'design website...again',person: 'hasan',due: '1st jan 2019',status:'overdue',content:'actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props'},
      ]
      }
    },
    computed:{
      myProjects(){
        return this.projects.filter(project=>{
          return project.person === 'hasan'
        })
      }
    }
  }
</script>