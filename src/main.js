import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Home from './components/User/Home.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router/router.js';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);

// eslint-disable-next-line vue/multi-word-component-names
app.component('home', Home);
app.use(router);
app.use(pinia);
app.mount('#app');
