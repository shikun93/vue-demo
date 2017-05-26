/**
 * Created by Administrator on 2017/5/22.
 */
import Vue from 'vue';
import { Button, Select,Icon,Breadcrumb,BreadcrumbItem,Table,TableColumn,Pagination } from 'element-ui';
import './mock/menu';

 Vue.use(Button);
 Vue.use(Select);
 Vue.use(Icon);
 Vue.use(Breadcrumb);
 Vue.use(BreadcrumbItem);
 Vue.use(Table);
 Vue.use(TableColumn);
 Vue.use(Pagination);


import App from './App';
import router from './router/router';
import store from './store/store';
require('babel-polyfill');

new Vue({
    el:"#app",
    router,
    store,
    render: h => h(App)
});