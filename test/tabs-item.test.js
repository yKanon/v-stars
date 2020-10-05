import Vue from 'vue'
import { describe, it } from 'mocha'
import Tabs from '../src/tabs'
import TabsNav from '../src/tabs-nav'
import TabsItem from '../src/tabs-item'
import TabsContent from '../src/tabs-content'
import TabsPanel from '../src/tabs-panel'
import Button from '../src/button'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-nav', TabsNav)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-content', TabsContent)
Vue.component('s-tabs-panel', TabsPanel)

describe('TabsItem', () => {

  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接收 name prop', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'setting'
      }
    }).$mount()

    expect(vm.$el.getAttribute('data-name')).to.equal('setting')
    vm.$destroy()
  })

  it('接收 disabled prop', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()

    expect(vm.$el.classList.contains('disabled')).to.be.true

    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called

    vm.$destroy()
  })
})
