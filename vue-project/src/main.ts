import './assets/main.css'
import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { TreeMapPlugin } from '@syncfusion/ej2-vue-treemap';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// Import Bootstrap and BootstrapVue CSS files (order is important)
const app = createApp(App)
import VueGallery from 'vue-gallery'
// Optionally install the BootstrapVue icon components plugin
app.use(VueGallery)
app.use(TreeMapPlugin);
app.use(router)
app.use(Antd);
app.mount('#app');