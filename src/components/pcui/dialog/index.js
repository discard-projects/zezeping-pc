import Dialog from './src/dialog.vue'
Dialog.install = function (Vue, options) {
  Vue.component(Dialog.name, Dialog)
}
export default Dialog
