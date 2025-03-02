<template>
  <div class="bg-gray-900 text-white h-screen">
    <div class="border-b-2 p-3 shadow-inner flex justify-between bg-gray-700 text-gray-400 border-slate-500">
      <router-link to="/">💖 Project diff</router-link> <router-link to="/settings">
        <FontAwesomeIcon :icon="faGear" />
      </router-link></div>
    <div class="p-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faGear } from '@fortawesome/free-solid-svg-icons'
</script>