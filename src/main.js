import { createApp } from 'vue'
import './style.css'
import './assets/styles/main.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
  faHeadset,faCheck, faPhone, faQuoteLeft, faQuoteRight, faArrowRight, faIndustry,
  faShieldHalved, faUserTie, faCouch, faTruckFast, faEarthEurope, faSwatchbook,
  faCheckCircle, faMapMarkerAlt, faEnvelope, faClock
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faHeadset,faCheck, faPhone, faQuoteLeft, faQuoteRight, faArrowRight, faIndustry,
  faShieldHalved, faUserTie, faCouch, faTruckFast, faEarthEurope, faSwatchbook,
  faCheckCircle, faMapMarkerAlt, faEnvelope, faClock
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
