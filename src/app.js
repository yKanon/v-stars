import Vue from "vue";
// import log from '../utils/log'

import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Layout from "./layout";
import Header from "./header";
import Sider from "./sider";
import Container from "./container";
import Footer from "./footer";
import Toast from "./toast";
import plugins from "./plugins";
import Tabs from "./tabs";
import TabsNav from "./tabs-nav";
import TabsItem from "./tabs-item";
import TabsContent from "./tabs-content";
import TabsPanel from "./tabs-panel";
import Popover from "./popover";
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component("s-button", Button);
Vue.component("s-button-group", ButtonGroup);
Vue.component("s-icon", Icon);
Vue.component("s-input", Input);
Vue.component("s-row", Row);
Vue.component("s-col", Col);
Vue.component("s-layout", Layout);
Vue.component("s-header", Header);
Vue.component("s-sider", Sider);
Vue.component("s-container", Container);
Vue.component("s-footer", Footer);
Vue.component("s-toast", Toast);
Vue.component("s-tabs", Tabs);
Vue.component("s-tabs-nav", TabsNav);
Vue.component("s-tabs-item", TabsItem);
Vue.component("s-tabs-content", TabsContent);
Vue.component("s-tabs-panel", TabsPanel);
Vue.component("s-popover", Popover);
Vue.component("s-collapse", Collapse);
Vue.component("s-collapse-item", CollapseItem);
Vue.use(plugins);

new Vue({
  el: "#app",
  data: {
    message: "",
    selectedTab: "second",
  },
  methods: {
    showToast () {
      this.$toast(`我知道妇女`, {
        closeButton: {
          text: "关闭",
          callback () {
            console.log(`请小心`);
          },
        },
        autoClose: 3,
        position: "middle",
      });
    },
    showToast1 () {
      this.$toast(`我知道妇女`, {
        closeButton: {
          text: "关闭",
          callback () {
            console.log(`请小心`);
          },
        },
        autoClose: false,
        position: "top",
      });
    },
    showToast2 () {
      this.$toast(`我知道妇女`, {
        closeButton: {
          text: "关闭",
          callback () {
            console.log(`请小心`);
          },
        },
        autoClose: false,
        position: "bottom",
      });
    },
  },
  mounted () { },
});
