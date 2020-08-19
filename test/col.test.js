import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

function createIt (prop, propsData, infix) {
  let description = `接收 ${prop} 属性`
  const callball = function () {
    const divElement = document.createElement('div')
    document.body.appendChild(divElement)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData
    }).$mount(divElement)

    const el = vm.$el
    expect(el.classList.contains(`col-${infix}-${propsData[prop].span}`)).to.equal(true)
    expect(el.classList.contains(`offset-${infix}-${propsData[prop].offset}`)).to.equal(true)

    divElement.remove()
    vm.$destroy()
  }

  return it(description, callball)
}

describe('Col', () => {
  it('存在.', () => {
    expect(Row).to.exist
    expect(Col).to.exist
  })

  it('接收 span 属性', function () {
    const divElement = document.createElement('div')
    document.body.appendChild(divElement)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '12'
      }
    }).$mount(divElement)

    const el = vm.$el
    expect(el.classList.contains('col-12')).to.equal(true)

    divElement.remove()
    vm.$destroy()
  })
  it('接收 offset 属性', function () {
    const divElement = document.createElement('div')
    document.body.appendChild(divElement)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: '12'
      }
    }).$mount(divElement)

    const el = vm.$el
    expect(el.classList.contains('offset-12')).to.equal(true)

    divElement.remove()
    vm.$destroy()
  })

  createIt('pc', {
    pc: {
      span: 8,
      offset: 16
    }
  }, 'pc')

  createIt('ipad', {
    ipad: {
      span: 8,
      offset: 16
    }
  }, 'ipad')

  createIt('narrowpc', {
    narrowpc: {
      span: 18,
      offset: 6
    }
  }, 'narrowpc')

  createIt('widepc', {
    widepc: {
      span: 11,
      offset: 13
    }
  }, 'widepc')

})
