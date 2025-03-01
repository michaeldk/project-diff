import { createRouter, createWebHashHistory } from 'vue-router';
import CompareView from './views/CompareView.vue';
import SettingsView from './views/SettingsView.vue';
import AddProjectView from './views/AddProjectView.vue';

const router = createRouter({
  history: createWebHashHistory(), // Works with Vite
  routes: [
    { path: '/', component: CompareView },
    { path: '/settings', component: SettingsView },
    { path: '/add', component: AddProjectView },
  ],
});

export default router;
