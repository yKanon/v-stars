import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Container from './container'
import Footer from './footer'
import Toast from './toast'
import plugins from './plugins'

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)
Vue.component('s-layout', Layout)
Vue.component('s-header', Header)
Vue.component('s-sider', Sider)
Vue.component('s-container', Container)
Vue.component('s-footer', Footer)
Vue.component('s-toast', Toast)
Vue.use(plugins)

new Vue({
  el: '#app',
  data: {
    message: '',
    loading: false,
    loading1: false,
    loading2: false,
  },
  methods: {
    showToast () {
      this.$toast(`我知道妇女`, {
          closeButton: {
            text: '关闭',
            callback () {
              console.log(`请小心`)
            }
          },
          autoClose: false,
          position: 'middle',
        }
      )
    },
    showToast1 () {
      this.$toast(`我知道妇女`, {
          closeButton: {
            text: '关闭',
            callback () {
              console.log(`请小心`)
            }
          },
          autoClose: false,
          position: 'top',
        }
      )
    },
    showToast2 () {
      this.$toast(`我知道妇女`, {
          closeButton: {
            text: '关闭',
            callback () {
              console.log(`请小心`)
            }
          },
          autoClose: false,
          position: 'bottom',
        }
      )
    }
  },
  mounted () {

  }
})

