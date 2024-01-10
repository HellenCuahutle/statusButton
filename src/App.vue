<template>
  <div id="app">
    <ButtonComponent msg=""/>
    <CustomDropdown/>
    <Icon/>
  </div>
</template>

<script>
import CustomDropdown from './components/CustomDropdown.vue'
import ButtonComponent from './components/ButtonComponent.vue';
import { Icon } from '@iconify/vue2';

export default {
  name: 'App',
  components: {
    CustomDropdown,
    ButtonComponent,
    Icon,
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
