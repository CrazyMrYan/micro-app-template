
<template>
  <router-view />
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
  export default {
    name: 'About',
    components: {
      HelloWorld
    },
    computed:{
      imgSrc(){
        return  window.ORIGIN+"/assets/logo.png"
      }
    }
  }
</script>
<style>

</style>
