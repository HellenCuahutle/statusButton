<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      <!--{{ `${this.months[selectedMonth]} ${selectedYear}` ?  `Todo ${selectedYear}` : 'Seleccione fecha'}}-->

      <!--{{ selectedAll ?  `${this.months[selectedMonth]} ${selectedYear}` : `Todo ${selectedYear}` }}-->
     
      <span v-if="status"> {{ `Todo ${selectedYear}` }}</span>
      <h5 v-else>{{ mesPositivo }}</h5>


      <!--{{ selectedYear ? `Todo ${selectedYear}` : 'Seleccione un año' }}-->

        <!--{{selectedYear ? `Todo ${selectedYear}` : 'Seleccione un año'}}-->
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
      <div v-for= "(month, index) in months" :key="month" @click="selectMonth(index)" class="dropdown-item">{{ month }}</div>
      <div class="dropdown-divider"></div>
      <div @click="selectAllYear" class="dropdown-item">Seleccionar todo el año</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: 2023,
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      selectedMonth: 1,
      status: true,

    };
  },
  methods: {
    changeYear(amount) {

      this.selectedYear += amount;
      console.log(this.selectedYear);
    },
    selectMonth(month) {

      this.selectedMonth = month;
      this.$emit('onDateMonthChanged', this.selectedYear, month);
      console.log(month, this.months[month], this.selectedYear);
    },
    selectAllYear() {

      this.$emit('onFullYear', this.selectedYear);
      console.log(this.selectedYear);
    },

    mesPositivo: function(month){

      this.$emit(month, this.months[month], this.selectedYear );
      
    },
  }  
};

</script>