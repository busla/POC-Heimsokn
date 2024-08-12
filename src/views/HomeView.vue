<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <div>Velkominn, hvað villtu byrja á í dag?</div>
        <br />
        <v-btn to="bookings"> Bókanirnar mínar </v-btn>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn to="overview"> Yfirlit </v-btn>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn to="messages"> Skilaboð </v-btn>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn to="profile"> Prófíll </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
