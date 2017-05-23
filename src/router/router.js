/**
 * Created by Administrator on 2017/5/22.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello';
import App from '../App';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:App,
            children:[
                {
                    path:'/hello',
                    component:Hello
                }
            ]
        }
    ]
});

module.exports = router;