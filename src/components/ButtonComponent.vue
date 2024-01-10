<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn" :class="{ 'btn-primary': status, 'btn-secondary': !status }" @click="toggleState">{{ status ?
      'Entrada' : 'Salida' }} 

    <p v-if="toggleState"><Icon icon="fluent:arrow-step-out-20-filled"/></p> 
    <p v-else-if="!toggleState"><Icon icon="fluent:arrow-step-in-20-filled"/></p>

    </button>
    <h1></h1>
  </div>
</template>

<script>
export default {
  
  data: function () {

    return {
      status: false
    };
  },

  methods: {
    handleDateMonthChanged(year, month) {
      console.log(`Mes seleccionado: ${month} ${year}`);
    },
    handleFullYearChanged(year) {
      console.log(`Año completo seleccionado: ${year}`);
    },

    toggleState: function () {
      this.status = !this.status;
      console.log(this.status);
    }
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
