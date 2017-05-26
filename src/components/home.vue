<template>
   <div class="body_main">
      <p class="p">欢 迎 使 用 x x x 管 理 系 统</p>
      <div class="ul_main">
        <transition name="fade" mode="out-in">
          <ul class="ul" v-bind:key="show">
            <router-link to="qa"><li v-for="x in menus" class="li" :style="{background:x.background}">
              <h6>{{x.title}}</h6>
              <p>{{x.description}}</p>
            </li></router-link>
          </ul>
        </transition>
      </div>  
      <div class="list_nav">
        <span v-on:click="cut" :class="{'active':active}"></span>
        <span v-on:click="cut" :class="{'active':!active}"></span>
      </div>
    </div> 
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      active:true,
      show:'one'
    }
  },
  created (){
    this.$store.dispatch('getMenus');
  },
  methods:{
      cut (){
        if(this.show === "one"){
          this.show = "two";
          this.active = false;
        }else{
          this.show = "one";
           this.active = true;
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

