<template>
  <div id="app">
    <ButtonComponent msg=""/>
    <CustomDropdown/>
  
  </div>
</template>

<script>
import CustomDropdown from './components/CustomDropdown.vue'
import ButtonComponent from './components/ButtonComponent.vue';

export default {
  name: 'App',
  components: {
    CustomDropdown,
    ButtonComponent,
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
