import StyledButton from './components/StyledButton.vue'
import SimpleCounter from './components/SimpleCounter.vue'
import { formatDate } from './utils/dateUtils'

export { StyledButton, SimpleCounter, formatDate }

export default {
  install(Vue) {
    Vue.component('StyledButton', StyledButton)
    Vue.component('SimpleCounter', SimpleCounter)
  }
}
