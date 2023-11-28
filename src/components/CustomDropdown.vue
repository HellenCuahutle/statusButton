<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      {{ selectedYear ? `Todo ${selectedYear}` : 'Seleccione un año' }}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <div class="row">
        <div class="col-4">
          <a href="#" @click="changeYear(-1)">&lt;</a>
        </div>
        <div class="col-4">
          <span>{{ selectedYear }}</span>
        </div>
        <div class="col-4">
          <a href="#" @click="changeYear(1)">&gt;</a>
        </div>
      </div>
      <div class="dropdown-divider"></div>
      <div v-for="month in months" :key="month" @click="selectMonth(month)" class="dropdown-item">{{ month }}</div>
      <div class="dropdown-divider"></div>
      <div @click="selectAllYear" class="dropdown-item">Seleccionar todo el año</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: null,
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    };
  },
  methods: {
    changeYear(amount) {
      // Implementar lógica para cambiar el año
      this.selectedYear += amount;
    },
    selectMonth(month) {
      // Emitir señal de mes seleccionado
      this.$emit('onDateMonthChanged', this.selectedYear, month);
    },
    selectAllYear() {
      // Emitir señal de año completo seleccionado
      this.$emit('onFullYear', this.selectedYear);
    }
  }
};
</script>