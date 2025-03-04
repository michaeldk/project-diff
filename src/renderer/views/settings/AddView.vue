<script setup lang="ts">
import type { Setting } from '../../../types/settings';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SettingForm from '../../components/SettingForm.vue';
import slug from 'slug';

const router = useRouter();

const setting = ref<Setting>({
  label: '',
  path: '',
  gitignore: false,
  additionalIgnores: '',
});

async function saveSetting() {
  await window.electronAPI.setSetting({ ...setting.value });
  router.push({ name: 'settings_list' });
}
</script>

<template>
  <div>
    <h1 class="text-3xl mb-5">New project</h1>
    <SettingForm v-model="setting" @submit="saveSetting" />
  </div>
</template>