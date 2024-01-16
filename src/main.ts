import { createApp, h } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './components/router'

const app = createApp({
    render: () => h(App)
});

app.use(router);
app.mount('#app');

//createApp(App).use(router).mount('#app')
