<template>
<div class="team">
  <h1 class="subheadding grey--text">Team</h1>
    <v-container fluid class="my-5">
      <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-xs-center ma-3">
              <v-responsive class="pt-4">
                  <v-avatar size="100" class="grey lighten-2">
                    <img :src="person.avatar">
                  </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subhedding">{{person.name}}</div>
                <div class="grey--text">{{person.role}}</div>
              </v-card-text>
              <v-card-action>
                <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>message</span>
                </v-btn>
              </v-card-action>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
</div>
</template>

<script>
  export default {
    data(){
      return {
        team:[
          {name: 'anower',role: 'web developer',avatar: '/11.jpeg'},
          {name: 'adeb',role: 'web developer',avatar: '/12.jpg'},
          {name: 'rakin',role: 'marketing',avatar: '/13.jpg'},
          {name: 'imran',role: 'android developer',avatar: '/14.jpg'},
          {name: 'tonu',role: 'accounts',avatar: '/15.jpg'},
        ]
      }
    }
  }
</script>