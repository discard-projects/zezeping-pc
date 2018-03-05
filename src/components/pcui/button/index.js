import Button from './src/button.vue'
Button.install = function (Vue, options) {
  Vue.component(Button.name, Button)
}
export default Button
