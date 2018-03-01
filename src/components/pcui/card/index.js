import Card from './src/card'
Card.install = function (Vue, options) {
  Vue.component(Card.name, Card)
}
export default Card
