<template>
  <div class="container">
    <v-img
      :aspect-ratio="1"
      class="img-circle"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      width="300"
      rounded-circle
    ></v-img>
  </div>
  <div>Nafn : Jónatan</div>
  <div>Netfang : jon@bbVerktakar.is</div>
  <div>Símanúmer : 98777896</div>
  <div>Fyrirtæki : BBverktakar</div>
</template>

<style>
.img-circle {
  border-radius: 80%;
}
.container {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
}
</style>
