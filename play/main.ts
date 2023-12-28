import { createApp } from 'vue';
import App from './app.vue';
import earnie from '@earnie/components';
const app = createApp(App);
app.use(earnie);
app.mount('#app');
