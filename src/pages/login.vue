<template>
  <div class="login">
        <div class="header">
        	<div class="header_left">
        		<img :src="img" />
        		<h4>xxx</h4>
        	</div>
        	<div class="header_right">
        		<ul class="ul">
        			<li><span></span>系统主页</li>
        			<li><span></span>系统菜单</li>
        			<li><span></span>系统菜单</li>
        			<li><span></span>系统菜单</li>
        			<li><span></span>系统菜单</li>
        			<li><span></span>注销登录</li>
        		</ul>
        	</div>
        </div>
        <div class="main">
        	<div class="aside">
        		<el-button type="primary" icon="d-arrow-right" class="but"></el-button>
        		<ul class="ul">
        			<li></li>
        			<li></li>
        			<li></li>
        			<li></li>
        			<li></li>
        			<li></li>
        			<li></li>
        			<li></li>
        		</ul>
        	</div>
        	<div class="body">
        		<router-view></router-view>
        		<div class="footer">@2017xxx管理系统 xx科技</div>
        	</div>
        </div>
  </div>
</template>

<script>
import '../css/login';
import img from '../images/login.jpg';

export default {
  	name:"login",
  	data (){
  		return {
  			img:img,
  		}
  	}
}
</script>