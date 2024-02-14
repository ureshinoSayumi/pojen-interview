<template>
  <div class="header">
    <div
      class="icon"
      @click.stop="app.toggleSideNav()"
    >
    </div>
  </div>
</template>

<script setup>
import { appStore } from '@/store/app'
const app = appStore()

</script>

<style scoped>
.header {
  display: flex;
  background-color: rgba(255, 255, 255, 1);
  height: 60px;
}
.icon {
  width: 40px;
  height: 40px;
  margin-left: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("@/assets/icon/icon_hambuger@2x.png")
}
</style>
