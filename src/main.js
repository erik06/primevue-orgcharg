import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import OrganizationChart from 'primevue/organizationchart';
const app = createApp(App);

app.use(PrimeVue);
app.component('OrganizationChart', OrganizationChart);
app.mount('#app')