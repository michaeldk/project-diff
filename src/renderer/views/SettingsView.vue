<template>
  <div>
    <h1 class="text-3xl mb-5">Settings</h1>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-6 py-3">Project</th>
            <th class="px-6 py-3">Path</th>
            <th class="px-6 py-3 text-right"><span class="sr-only">Actions</span> <router-link to="/add" class="text-sky-600 hover:text-sky-500"><FontAwesomeIcon :icon="faPlus" /></router-link></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Belparcel ACC</td>
            <td class="px-6 py-4">C:/prj/infomngt/coursiersacc-static-website</td>
            <td class="px-6 py-4 text-right text-sky-600 hover:text-sky-500"><router-link to="/settings">
                <FontAwesomeIcon :icon="faGear" />
              </router-link></td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Belparcel ACC</td>
            <td class="px-6 py-4">C:/prj/infomngt/coursiersacc-static-website</td>
            <td class="px-6 py-4 text-right text-sky-600 hover:text-sky-500"><router-link to="/settings">
                <FontAwesomeIcon :icon="faGear" />
              </router-link></td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Belparcel ACC</td>
            <td class="px-6 py-4">C:/prj/infomngt/coursiersacc-static-website</td>
            <td class="px-6 py-4 text-right text-sky-600 hover:text-sky-500"><router-link to="/settings">
                <FontAwesomeIcon :icon="faGear" />
              </router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
</script>