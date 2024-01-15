<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn btn-secondary" @click="toggleState"> <Icon v-if="status" color="red" icon="fluent:arrow-step-out-20-filled"/>
          
      <Icon v-if="!status" color="blue" icon="fluent:arrow-step-in-20-filled"/>{{ status ? 'Entrada'  : 'Salida' }} 
    </button>
    <h1></h1>
  </div>
</template>
<script>

import { Icon } from '@iconify/vue2';
export default {
  components: {
		Icon,
	},
  
  name: 'ButtonComponent',

  props: {
    msg: String,
  },

  data: function () {

    return {
      status: false
    };
  },

 methods: {
    toggleState: function () {
      this.status = !this.status;
      console.log(this.status);
    }
  }
};
</script>
<style scoped>
h3 {
  margin: 20px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: rgb(185, 66, 165);
}
</style>