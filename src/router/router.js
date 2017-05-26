/**
 * Created by Administrator on 2017/5/22.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home';
import Login from '../pages/login';
import Qa from '../pages/qa';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Login,
            children:[
                {
                    path:'home',
                    component:Home
                },
                {
                    path:'/qa',
                    component:Qa
                }
            ]
        }
    ]
});

module.exports = router;