import Vue from 'vue'
import { describe, it } from 'mocha'
import Tabs from '../src/tabs'
import TabsNav from '../src/tabs-nav'
import TabsItem from '../src/tabs-item'
import TabsContent from '../src/tabs-content'
import TabsPanel from '../src/tabs-panel'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-nav', TabsNav)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-content', TabsContent)
Vue.component('s-tabs-panel', TabsPanel)

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('子组件只能是 tabs-nav 或者 tabs-content', () => {
    const app = document.createElement('div')
    document.body.appendChild(app)

    app.innerHTML = `
      <s-tabs>
        <div>hi</div>
      </s-tabs>
    `

    try {
      const vm = new Vue({
        el: app
      })
    } catch (e) {
      expect(e).to.throw()
    }
  })

  it('接收 selected prop', () => {
    const app = document.createElement('div')
    document.body.appendChild(app)

    app.innerHTML = `
      <s-tabs selected="second">
        <s-tabs-nav>
          <s-tabs-item name="first">美女</s-tabs-item>
          <s-tabs-item name="second">体育</s-tabs-item>
          <s-tabs-item name="third">财经</s-tabs-item>
        </s-tabs-nav>
        <s-tabs-content>
          <s-tabs-panel name="first">美女资讯</s-tabs-panel>
          <s-tabs-panel name="second">体育资讯</s-tabs-panel>
          <s-tabs-panel name="third">财经资讯</s-tabs-panel>
        </s-tabs-content>
      </s-tabs>
    `

    const vm = new Vue({
      el: app
    })

    vm.$nextTick(() => {
      const sports = vm.$el.querySelector(`.tabs-item[data-name='second']`)
      expect(sports.classList.contains('active')).to.be.true
    })
  })

  it('接收 direction prop', () => {
  })
})
