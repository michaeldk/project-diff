<script setup lang="ts">
import { defineModel, PropType } from 'vue';
import { defineEmits } from 'vue';
import type { Setting } from '../../types/settings';

defineEmits(['submit', 'cancel'])
const setting = defineModel<Setting>({ required: true })
</script>

<template>
  <form class="max-w-sm" @submit.prevent="$emit('submit')">
    <div class="mb-5">
      <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Label</label>
      <input type="text" id="label" v-model="setting.label"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required />
    </div>
    <div class="mb-5">
      <label for="path" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Path</label>
      <input type="text" id="path" v-model="setting.path"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required />
    </div>
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input id="gitignore" type="checkbox" v-model="setting.gitignore"
          class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
           />
      </div>
      <label for="gitignore" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Use project's
        .gitignore</label>
    </div>
    <div class="mb-5">
      <label for="ignore" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional ignore</label>
      <input type="text" id="ignore" v-model="setting.additionalIgnores"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         />
    </div>
    <div class="flex gap-3 justify-between">
      <button type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
      <button type="button" @click="$emit('cancel')"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
    </div>
  </form>
</template>