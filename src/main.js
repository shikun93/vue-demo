/**
 * Created by Administrator on 2017/5/22.
 */
import Vue from 'vue';
import App from './App';
import router from './router/router';
//import store from './store/store';

new Vue({
    el:"#app",
    router,
   // store,
    render: h => h(App)
});