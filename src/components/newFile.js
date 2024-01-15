/* __placeholder__ */
export default (await import('vue')).defineComponent({
data() {
return {
selectedYear: 2024,
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
selectedMonth: 1,
status: false,
};
},
methods: {
changeYear(amount) {
this.selectedYear += amount;
console.log(this.selectedYear);
},
selectMonth(month) {
this.selectedMonth = month;
this.$emit(this.selectedYear, month);
console.log(month, this.months[month]);
},
selectAllYear() {
if (this.status === true) {
this.$emit(this.selectedYear);
console.log(this.selectedYear);

} else -; if (this.status === false) {
this.$emit(this.selectedMonth);
} else {
}
},
},
});
