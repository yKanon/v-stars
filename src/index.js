import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading1: false,
    loading2: false,
  }
})
