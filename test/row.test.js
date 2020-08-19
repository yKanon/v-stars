import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
    expect(Col).to.exist
  })

  it('接收 gutter 属性', (done) => {
    Vue.component('s-row', Row)
    Vue.component('s-col', Col)

    const app = document.createElement('div')
    document.body.appendChild(app)

    app.innerHTML = `
      <s-row gutter="20">
        <s-col></s-col>
      </s-row>>
    `

    const vm = new Vue({
      el: app
    })

    const el = vm.$el
    setTimeout(() => {
      const colElement = el.querySelector('.col')
      const rowElement = el.querySelector('.row')
      expect(getComputedStyle(colElement).paddingLeft).to.equal('10px')
      expect(getComputedStyle(colElement).paddingRight).to.equal('10px')
      expect(getComputedStyle(rowElement).marginRight).to.equal('-10px')
      expect(getComputedStyle(rowElement).marginLeft).to.equal('-10px')
      done()

      el.remove()
      vm.$destroy()
    }, 0)
  })

  it('接收 align 属性', function () {
    const divElement = document.createElement('div')
    document.body.appendChild(divElement)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(divElement)
    const rowElement = vm.$el
    expect(getComputedStyle(rowElement).justifyContent).to.equal('flex-end')

    divElement.remove()
    vm.$destroy()
  })
})
