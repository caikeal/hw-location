import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './action.js';
import getters from './getters.js';

Vue.use(Vuex);

const state = {
	userInfo: null,    // 用户信息
	login: true,    // 是否登录
	taskList: [],    // 任务列表
	toSolveTaskList: [],    // 待解决的任务列表
	myPlace: {
		x: '',
		y: '',
		group_id: '',
		direction: ''
	}    //  我的位置
};

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
});
