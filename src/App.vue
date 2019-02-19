<template>
  <div id="app">
    <!--<transition :name="transitionName">-->
      <router-view v-if="isRouterAlive"></router-view>
    <!--</transition>-->

  </div>
</template>

<script>

export default {
  name: 'App',

  provide(){
    return{
      reload:this.reload
    }
  },

  data(){
    return{
      isRouterAlive:true
    }
  },

  mounted(){
    this.$store.dispatch('requestanimal')
  },

  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}


</style>
