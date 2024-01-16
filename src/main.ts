import { createApp, h } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './components/router'

// import OktaAuth from '@okta/okta-auth-js';
// import OktaVue from '@okta/okta-vue';

// const oktaAuth = new OktaAuth({
//     issuer: 'https://dev-48043447.okta.com/oauth2/default',
//     clientId: '0oadq2onsa44TXvRF5d7',
//     redirectUri: window.location.origin + '/my-test-app/login/callback',
//     scopes: ['openid', 'profile', 'email'],
    
// });

const app = createApp({
    render: () => h(App)
});

app.use(router);
app.mount('#app');

//createApp(App).use(router).mount('#app')
