import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'; // Asegúrate de importar los estilos si usas un archivo CSS global

const app = createApp(App);
app.use(router);
app.mount('#app');

