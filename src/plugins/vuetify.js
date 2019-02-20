import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme:{
    primary: '#9652ff',
    success: '#31DBB9',
    info: '#ffaac2',
    error: '#f83e70'
  }
})
