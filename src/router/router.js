/**
 * Created by Administrator on 2017/5/22.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello';
import Login from '../pages/login';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Login,
            children:[
                {
                    path:'/login',
                    component:Hello
                }
            ]
        }
    ]
});

module.exports = router;