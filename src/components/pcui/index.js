import HoverPop from './hover-pop'
import Link from './link'
import Card from './card'
import Rank from './rank'
import Button from './button'
export default {
  install (Vue, options) {
    Vue.use(HoverPop)
    Vue.use(Link)
    Vue.use(Card)
    Vue.use(Rank)
    Vue.use(Button)
  }
}
