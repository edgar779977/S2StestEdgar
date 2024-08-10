import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Import styles and scripts
import './assets/styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Create Vue app instance
const app = createApp(App);

// Use plugins
app.use(VueAxios, axios);

// Mount the app to the DOM
app.mount('#app');
