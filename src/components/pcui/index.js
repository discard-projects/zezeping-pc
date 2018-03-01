import HoverPop from './hover-pop'
import Link from './link'
import Card from './card'
import Rank from './rank'
export default {
  install (Vue, options) {
    Vue.use(HoverPop)
    Vue.use(Link)
    Vue.use(Card)
    Vue.use(Rank)
  }
}
