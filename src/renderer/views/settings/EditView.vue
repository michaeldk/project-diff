<script setup lang="ts">
import type { Setting } from '../../../types/settings';

import SettingForm from '../../components/SettingForm.vue';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import slug from 'slug';

const route = useRoute()

const setting = ref<Setting>({
  label: '',
  path: '',
  gitignore: false,
  additionalIgnores: '',
});

onMounted(async () => {
  console.log('Fetching setting...');
  setting.value = await window.electronAPI.getSetting(route.params.key);
  console.log('Fetched:', setting.value);
})

async function saveSetting() {
  return await window.electronAPI.editSetting(route.params.key, { ...setting.value });
}
</script>

<template>
  <div>
    <h1 class="text-3xl mb-5">Edit project "{{ setting.label }}"</h1>
    <SettingForm v-model="setting" @submit="saveSetting" />
  </div>
</template>