/**
 * Created by Administrator on 2017/5/22.
 */
var path = require("path");
var webpack =require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

console.log(path.resolve(__dirname, './dist'));
module.exports = {
    //入口文件
    entry:{
        index:"./src/main.js",
        vendors:['vue','vuex','vue-router','axios']
    },
    //输出文件
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname, './dist'),
        publicPath:'./'       //导入图片有用
    },
    //开发模式
    devtool:false,
    //其他解决方案
    resolve:{
        extensions:['.js','.vue','.json','.less','.css'],
        alias:{
            //配置别名
        }
    },

    //不进行打包的模块
    externals:{},

    //模块加载器
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{

                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[ "css-loader","postcss-loader","less-loader"]
                })
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/,
                loader:'url-loader',
                options:{
                    limit:1000,
                   // name:'images/[name].[ext]'
                }
            }
        ]
    },
    //热启动配置
    devServer:{
       // contentBase: "./build",//本地服务器所加载的页面所在的目录
       // colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
         hot: true,
       // port:"7000",
       // noInfo:true
    },
    plugins:[
        //位于开发环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')  //还一个值"production development" 生产环境
            }
        }),

        // 压缩js代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            // 排除关键字，不能混淆
            except:['$','exports','require']
        }),

        // 模块热替换插件
        new webpack.HotModuleReplacementPlugin(),

        // 允许错误不打断程序
        new webpack.NoEmitOnErrorsPlugin(),

        //提取公共文件单独打包
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js',
        }),

        // 自动生成html插件，如果创建多个HtmlWebpackPlugin的实例，就会生成多个页面
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            chunks: ['vendors','index'],
            inject:true
        }),

        // 全局挂载插件，当模块使用这些变量的时候，wepback会自动加载，区别于window挂载
        //new webpack.ProvidePlugin({
        //    $:"jquery",
        //    jQuery:"jquery",
        //    "window.jQuery":"jquery"
        //}),

        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurrenceOrderPlugin(),

        //单独提取css
        new ExtractTextPlugin("[name].css"),
        //webpack错误信息提示插件
        new FriendlyErrorsPlugin()
    ]
}