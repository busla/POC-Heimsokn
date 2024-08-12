<template>
  <div id="WorkCalendar">
    <h1>Yfirlit verkefna</h1>
    <vue-cal :time="true" :events="events" :from-page="fromPage" :to-page="toPage" />
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: {
    VueCal
  },
  data() {
    return {
      events: [
        // Example events for today's assignments
        {
          start: new Date(new Date().setHours(9, 0, 0)),
          end: new Date(new Date().setHours(10, 0, 0)),
          title: 'Fiber optics prepp'
        },
        {
          start: new Date(new Date().setHours(11, 0, 0)),
          end: new Date(new Date().setHours(12, 0, 0)),
          title: 'Setup connection'
        },
        {
          start: new Date(new Date().setHours(14, 0, 0)),
          end: new Date(new Date().setHours(15, 0, 0)),
          title: 'Mesure connection speed'
        },
        {
          start: new Date(new Date().setHours(16, 0, 0)),
          end: new Date(new Date().setHours(17, 0, 0)),
          title: 'Fix errors'
        },
        {
          start: new Date(new Date().setHours(16, 0, 0)),
          end: new Date(new Date().setHours(17, 0, 0)),
          title: 'Deliver new router'
        }
      ],
      fromPage: new Date(),
      toPage: new Date()
    }
  }
}
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}
</style>
