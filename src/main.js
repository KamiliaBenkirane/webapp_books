import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import router from './router/router.js';

const app = createApp(App);

// eslint-disable-next-line vue/multi-word-component-names
app.component('home', Home);

app.use(router);

app.mount('#app');
