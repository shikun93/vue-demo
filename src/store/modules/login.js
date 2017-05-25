/**
 * Created by Administrator on 2017/5/23.
 */
// import Aname from '../actions';
// import Gname from '../getters';
import * as types from '../mutations';
import res from '../../appUrl/requestUrl';

const state ={
	menu:null
}

const getters ={
	menus:state => state.menu?state.menu.one:null,
	menus1:state => state.menu?state.menu.two:null
}
const mutations ={
	[types.LOGIN_GETMENU](state,data){
		state.menu = data;
	}
}

const actions ={
	getMenus({commit}) {
		res.getMenu(function(res){commit(types.LOGIN_GETMENU,res)})
	}
}

module.exports = {
	state,
	getters,
	mutations,
	actions
}