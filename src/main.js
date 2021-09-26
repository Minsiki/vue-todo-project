import { createApp } from 'vue'
import App from './App.vue'
import mixins from './Mixins.vue'

createApp(App).mixin(mixins).mount('#app')
