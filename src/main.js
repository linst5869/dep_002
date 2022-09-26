import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VAnimateCss from 'v-animate-css';

loadFonts()

createApp(App)
  .use(VAnimateCss)
  .use(vuetify)
  .mount('#app')
