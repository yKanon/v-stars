import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)

new Vue({
  el: '#app',
  data: {
    loading: false,
    loading1: false,
    loading2: false,
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    }
  }
})

