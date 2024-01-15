<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"  
      aria-haspopup="true" aria-expanded="false" ><p v-if="status">{{`Todo ${selectedYear}`}}</p>
                                                  <p v-else>{{`${this.months[selectedMonth]} ${selectedYear}`}}</p> 

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
      selectedYear: 2024,
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      status: true,
      selectedMonth: 1,
    };
  },
  methods: {
    changeYear(amount) {
      this.selectedYear += amount;
    },
    selectMonth(month) {
      this.status = false;
      this.selectedMonth = month;
      this.$emit('onDateMonthChanged',this.selectedYear, month);
      console.log(this.selectedMonth);
    },
    selectAllYear() {
      this.status = true;
      this.$emit('onFullYear', this.selectedYear);
      console.log(this.selectedYear);
    },
  },
};
</script>