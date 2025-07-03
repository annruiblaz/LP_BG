import { createApp } from 'vue'
import './style.css'
import './assets/styles/main.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
  faDumbbell,
  faHeartbeat,
  faRunning,
  faUsers,
  faUserTie,
  faTruck,
  faMedal,
  faHandHoldingUsd,
  faTools,
  faSyncAlt,
  faCheck,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faXmark,
  faBars
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faDumbbell,
  faHeartbeat,
  faRunning,
  faUsers,
  faUserTie,
  faTruck,
  faMedal,
  faHandHoldingUsd,
  faTools,
  faSyncAlt,
  faCheck,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faXmark,
  faBars
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
