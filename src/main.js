import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';

// Import global styles and scripts
import './assets/styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'sweetalert2/dist/sweetalert2.min.css';

// Create Vue app instance
const app = createApp(App);

// Configure SweetAlert2 with default options if needed
const swalOptions = {
    confirmButtonColor: '#00C9C9',
    cancelButtonColor: '#d33',
};

// Use plugins
app.use(VueAxios, axios);
app.use(VueSweetalert2, swalOptions);

// Mount the app to the DOM
app.mount('#app');
