# vue-demo

##项目结构

```
.
├── favicon.ico  ---------------------- 页面图标
├── webpack.config.js  ---------------------- webpack入口文件
├── postcss.config.js  ----------------------------- postcss入口文件
├── index.html  ------------------- 页面模板
├── dev-server.js  ------------------- 服务器文件
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
└── src  ------------------------------ 源码目录
    ├── appUrl  -------------------------- 发送请求目录
    │   ├── requestUrl.js  ------------------- 发送请求文件
    ├── components  ------------------- 业务模块集合目录
    ├── css  ------------------------- css目录
    │   ├── [name].less ------------ less文件
    ├── images  ----------------------- 图片资源目录
    ├── router  ----------------------- 路由目录
    │   ├── router.js ------------ 路由文件
    ├── pages  ----------------------- 页面集合目录
    │   ├── demo.vue ------------ 某一个页面
    └── store  ------------------------ 状态管理模式目录
          ├── actions.js  --------------------- mutations异步处理
          ├── getter.js  --------------------- 公共函数
          ├── mutations.js  --------------------- 处理state
          ├── store.js  ---------------------vuex文件
        ├── modules  --------------------- 模块目录
                └── [name].js  ------------- 模块文件
      
```

#环境准备

安装node、git

环境准备妥当之后，执行`npm install`命令

执行完成后即可开始开发。

- 启动调试服务器

```
npm run start
```

> 上面的命令会开启一个本地调试服务器（[http://localhost:8080/](http://localhost:8080/)）。此时，项目`src`目录下的任何文件的变化，都会触发实时构建

- 本地打包压缩

```
webpack
```

选择 `components`。

可以在页面中 import 进去使用。

## 外部工具

脚手架默认引入了以下外部工具库：

| 类库 | 全局名称 |
| ---- | ------ |
| Vue | Vue |
| Vuex | Vuex |
| VueRouter | VueRouter |
| Lodash | _ |
| axios | axios |


### 使用图片（png、jpg、jpeg、gif）

在 js 中 require（或在 css 中 url）一个相对路径的图片资源，将返回这个图片内容的 data-uri。

```js
let img = require('./img.png');
...
render() {
    return (
        <img src={img} alt=""/>
    );
}
```

## 其他

- 建议使用[es6](http://es6.ruanyifeng.com/)进行编码。
