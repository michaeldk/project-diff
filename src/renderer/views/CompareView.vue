<template>
  <div>
    <h1 class="text-3xl mb-5">Select projects to compare</h1>
    <div class="flex gap-4 items-end">
      <div class="max-w-xs w-full">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source
          project</label>
        <select id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Belparcel ACC</option>
          <option>Belparcel PRD</option>
          <option>Expats ACC</option>
          <option>Expats PRD</option>
        </select>
      </div>
      <div class="max-w-xs w-full">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target
          project</label>
        <select id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Belparcel ACC</option>
          <option>Belparcel PRD</option>
          <option>Expats ACC</option>
          <option>Expats PRD</option>
        </select>
      </div>
      <button type="submit"
        class="text-white border border-blue-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 leading-normal">Compare</button>
    </div>
    <div class="grid grid-cols-compare gap-4 mt-5">
      <div class="col">text-sky-500</div>
      <div class="col">
        <div class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
            <div class="text-gray-500 dark:text-gray-400">
              src/test.html
            </div>
          </div>
          <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <div id="wysiwyg-example"
              class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
              test
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
            <div class="text-gray-500 dark:text-gray-400">
              src/test.html
            </div>
          </div>
          <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <div id="wysiwyg-example"
              class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
              test
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>