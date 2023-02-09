import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './stores'

import App from './App.vue'
import '@/plugins/index.js'

const app = createApp(App)
const setup = () => {
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

setup()
