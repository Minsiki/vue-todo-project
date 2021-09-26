import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import mixins from './Mixins.vue'

createApp(App).use(store).mixin(mixins).mount('#app')
