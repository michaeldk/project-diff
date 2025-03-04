<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Settings } from 'src/types/settings';
import { onMounted, ref } from 'vue';

const settings = ref<Settings>();

onMounted(async () => {
  console.log('Fetching settings...');
  settings.value = await fetchAllSettings();
  console.log('Fetched:', settings.value);
})

async function fetchAllSettings(): Promise<Settings> {
  return await window.electronAPI.getAllSettings();
}
</script>

<template>
  <div>
    <h1 class="text-3xl mb-5">Settings</h1>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-6 py-3">Project</th>
            <th class="px-6 py-3">Path</th>
            <th class="px-6 py-3 text-right"><span class="sr-only">Actions</span> <router-link :to="{ name: 'settings_add' }" class="text-sky-600 hover:text-sky-500"><FontAwesomeIcon :icon="faPlus" /></router-link></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in settings" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.label }}</td>
            <td class="px-6 py-4">{{ item.path }}</td>
            <td class="px-6 py-4 text-right text-sky-600 hover:text-sky-500"><router-link :to="{ name: 'settings_edit', params: { key: item.key } }">
                <FontAwesomeIcon :icon="faGear" />
              </router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>