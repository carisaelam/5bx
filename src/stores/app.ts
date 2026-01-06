import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    appName: '5BX App',
    visits: 0,
  }),
  actions: {
    increment() {
      this.visits++;
    },
  },
  persist: true,
});
