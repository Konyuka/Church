<template>
  <div class="">
    <t-datepicker
    v-model="date"
    :date-formatter="dateFormatter"
    :date-parser="dateParser"
    date-format="YYYY-MM-DD"
    user-format="LL"
  />
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Date',
  data(){
    return{
      date: '2000-01-1',
    }
  },
  watch: {
    date(newValue){
      if(newValue){
        const dateChosen = newValue 
        this.$parent.user.birth = dateChosen
      }
    }
  },
  methods: {
    dateFormatter (date, format) {
      return moment(date).format(format)
    },
    dateParser (date, format) {
      return moment(date, format).toDate()
    }
  }
}
</script>
