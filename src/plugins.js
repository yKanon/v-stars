import Toast from './toast'

let currentToast

export default {
  install (Vue) {
    Vue.prototype.$toast = function (message, toastProps) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast(Vue, { message, propsData: toastProps })
    }
  }
}






















/* helper */
function createToast (Vue, { message, propsData }) {
  let Constructor = Vue.extend(Toast)
  const toast = new Constructor({ propsData })
  toast.$slots.default = message

  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
