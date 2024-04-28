<template>
  <v-app theme="theme_tf">
    <app-drawer/>
    <!-- <default-bar /> -->
    <default-view />
  </v-app>
</template>

<script setup>
  // import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import AppDrawer from './AppDrawer.vue'
</script>
