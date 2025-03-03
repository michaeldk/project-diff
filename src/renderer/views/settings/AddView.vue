<script setup lang="ts">
import type { Setting } from '../../../types/settings';

import { ref } from 'vue';
import SettingForm from '../../components/SettingForm.vue';
import slug from 'slug';

const setting = ref<Setting>({
  label: '',
  path: '',
  gitignore: false,
  additionalIgnores: [],
});

async function saveSetting() {
  console.log('Saving setting:', setting);
  return await window.electronAPI.setSetting(slug(setting.value.label), setting.value);
}
</script>

<template>
  <div>
    <h1 class="text-3xl mb-5">New project</h1>
    <SettingForm v-model="setting" @submit="saveSetting" @cancel="$router.push('/settings')" />
  </div>
</template>