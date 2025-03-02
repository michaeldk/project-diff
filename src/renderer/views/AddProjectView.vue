<script setup lang="ts">
import { Setting } from 'src/types/settings';
import { ref } from 'vue';
import slug from 'slug';

// the first argument must match the ref value in the template
const label = ref('')
const path = ref('')
const gitignore = ref(false)
const additionalIgnore = ref('')

async function saveSetting() {
  const setting: Setting = {
    label: label.value,
    path: path.value,
    gitignore: gitignore.value,
    additionalIgnores: [additionalIgnore.value]
  }
  return await window.electronAPI.setSetting(slug(setting.label), setting);
}
</script>

<template>
  <div>
    <h1 class="text-3xl mb-5">New project</h1>
    <form class="max-w-sm">
      <div class="mb-5">
        <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Label</label>
        <input type="text" id="label" v-model="label"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required />
      </div>
      <div class="mb-5">
        <label for="path" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Path</label>
        <input type="text" id="path" v-model="path"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="gitignore" type="checkbox" v-model="gitignore"
            class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required />
        </div>
        <label for="gitignore" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Use project's .gitignore</label>
      </div>
      <div class="mb-5">
        <label for="ignore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional ignore</label>
        <input type="text" id="ignore" v-model="additionalIgnore"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required />
      </div>
      <div class="flex gap-3 justify-between">
        <button type="submit" @click="saveSetting"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
      </div>
    </form>
  </div>
</template>