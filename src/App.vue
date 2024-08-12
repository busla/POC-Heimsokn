<template>
  <v-app density="compact">
    <v-app-bar app color="primary" dark density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Heimsókn</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list :lines="false" density="compact" nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          @click="drawer = !drawer"
          :to="item.link"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="height: 354px">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const drawer = ref(false)

const items = ref([
  { text: 'Mínar bókanir', icon: 'mdi-book-open-variant', link: 'bookings' },
  { text: 'Yfirlit', icon: 'mdi-calendar', link: '/overview' },
  { text: 'Skilaboð', icon: 'mdi-message-outline', link: '/messages' },
  { text: 'Prófíll', icon: 'mdi-account', link: '/profile' }
])
console.log(items)
</script>
