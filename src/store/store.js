/**
 * Created by Administrator on 2017/5/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Login from './modules/login';
import Qa from './modules/qa';

Vue.use(Vuex);

module.exports = new Vuex.Store({
	modules:{
		login:Login,
		qa:Qa
	}
}); 
