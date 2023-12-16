<template>
  <div id="app">
    <ButtonComponent/>
    <CustomDropdown/>
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue'
import CustomDropdown from './components/CustomDropdown.vue'

export default {
  name: 'App',
  components: {
    ButtonComponent,
    CustomDropdown
  }

}
</script>

<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c44;
  margin-top: 60px;

  
}

</style>
