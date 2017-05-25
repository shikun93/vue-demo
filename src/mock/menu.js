let Mock = require('mockjs');

let data = Mock.mock("http://aa.com/a.cn",{
	"menus":{
		"one|9":[
			{
				"title":"快捷菜单",
	  			"description":"这里是快捷菜单",
	  			"background":"@color"
			}
		],
		"two|1-9":[
			{
				"title":"快捷菜单",
	  			"description":"这里是快捷菜单",
	  			"background":"@color"
			}
		]

	}
	
});