import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'app',
  state: () => ({
    sideNavStatus: false
  }),
  actions: {
    toggleSideNav() {
      this.sideNavStatus = !this.sideNavStatus
    }
  }
})
