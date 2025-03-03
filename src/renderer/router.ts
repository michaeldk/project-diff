import { createRouter, createWebHashHistory } from 'vue-router';
import CompareView from './views/CompareView.vue';
import { default as SettingsList } from './views/settings/ListView.vue';
import { default as SettingsAdd } from './views/settings/AddView.vue';
// import { default as SettingsEdit } from './views/settings/EditView.vue';

const router = createRouter({
  history: createWebHashHistory(), // Works with Vite
  routes: [
    { path: '/', component: CompareView },
    { path: '/settings', component: SettingsList },
    { path: '/add', component: SettingsAdd },
    // { path: '/edit', component: SettingsEdit },
  ],
});

export default router;
