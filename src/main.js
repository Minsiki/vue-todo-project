import { createApp } from 'vue'
import App from './App.vue'
import mixins from './Mixins'
import store from './store'

createApp(App).use(store).mixin(mixins).mount('#app')
