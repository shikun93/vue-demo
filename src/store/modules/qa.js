import * as types from '../mutations';
import res from '../../appUrl/requestUrl';

const state ={
	people:null
}

const getters ={
	peoples:state => state.people?state.people.one:null,
}
const mutations ={
	[types.QA_GETPEOPLE](state,data){
		state.people = data;
	}
}

const actions ={
	getPeople({commit},val) {
		res.getPeople(data =>commit(types.QA_GETPEOPLE,data),val);
	}
}

module.exports = {
	state,
	getters,
	mutations,
	actions
}