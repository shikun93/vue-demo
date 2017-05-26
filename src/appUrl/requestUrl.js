/**
 * Created by Administrator on 2017/5/22.
 */
import axios from 'axios';

module.exports = {
	getMenu:function(cb){
		axios.get("http://aa.com/a.cn").then(function(res){
				cb(res.data.menus);
		});
	},

	getPeople:function(cb,val){
		axios.post("http://aa.com/b.cn",{val:val}).then(function(res){
				cb(res.data.menus);
		});
	}
}