<template>
  <div class="login">
        <div class="header">
        	<div class="header_left">
        		<img :src="img" />
        		<h4>春玉树</h4>
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
        		<div class="body_main">
              <p class="p">欢 迎 使 用 春 玉 树 管 理 系 统</p>
              <div class="ul_main">
                <transition name="fade" mode="out-in">
                  <ul class="ul" v-bind:key="show">
                    <li v-for="x in menus" class="li" :style="{background:x.background}">
                      <h6>{{x.title}}</h6>
                      <p>{{x.description}}</p>
                    </li>
                  </ul>
                </transition>
              </div>	
        		</div>
            <div class="list_nav">
              <span v-on:click="aa"></span>
              <span v-on:click="aa"></span>
            </div>
        		<div class="footer">@2017春玉树管理系统 xx科技</div>
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
        show:"one"
  		}
  	},
  	created (){
  		this.$store.dispatch('getMenus');
  	},
  	methods:{
      aa (){
        if(this.show === "one"){
          this.show = "two";
        }else{
          this.show = "one";
        }
      }
  	},
  	computed:{
  		menus (){
  			return this.show === "one"?this.$store.getters.menus:this.$store.getters.menus1;
  		}
  	}
}
</script>