import { createApp } from 'vue'
import './style.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css';
import router from './router'
import App from './App.vue';
import './assets/less/index.less';
import store from './store/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
 
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// app.use(ElementPlus);
app.use(router).use(store)
app.mount('#app')
