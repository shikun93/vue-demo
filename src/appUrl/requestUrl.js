/**
 * Created by Administrator on 2017/5/22.
 */
import axios from 'axios';

module.exports = {
	getMenu:function(cb){
		axios.get("http://aa.com/a.cn").then(function(res){
				cb(res.data.menus);
		});
		// axios.get("../../menu.json")
		// .then(function(res){
		// 	//cb(res.menu);
		// }
		// .catch(function (error) {
  //   		console.log(error);
  // 		})
	}
}