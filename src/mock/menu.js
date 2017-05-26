let Mock = require('mockjs');

let data = Mock.mock("http://aa.com/a.cn",{
	"menus":{
		"one|9":[
			{
				"title":"@name",
	  			"description":"@cparagraph(2)",
	  			"background":"@color"
			}
		],
		"two|1-9":[
			{
				"title":"@name",
	  			"description":"@cparagraph(2)",
	  			"background":"@color"
			}
		]

	}
});

let people = Mock.mock("http://aa.com/b.cn",{
	"menus":{
		"one|9":[
			{
				"date":"@date",
	  			"name":"@name",
	  			"address":"@city"
			}
		],
		"two|1-9":[
			{
				"date":"@date",
	  			"name":"@name",
	  			"address":"@city"
			}
		]

	}
});