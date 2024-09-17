import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS di Bootstrap (incluso Popper.js)


/* Import styles */
import '@/styles/main.less';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);


app.use(store);
app.mount('#app');
