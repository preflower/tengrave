import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

import '@/styles/initial.css'

const app = createApp(App)

app
  .use(i18n)
  .use(router)
  .use(createPinia())
  .mount('#app')
