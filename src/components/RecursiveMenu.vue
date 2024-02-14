<template>
  <ul class="menu">
    <li
      v-for="item in data"
      :key="item.key"
      class="menu-tree"
      :class="{ active: item.isOpen }"
      @click.stop="toggleSideNav(item)"
    >
      <p :class="{ 'text': item.isOpen }">{{ item.text }}</p>
      <RecursiveMenu v-if="item.children && item.isOpen" :data="item.children" />
    </li>
  </ul>
</template>

<script setup>
import RecursiveMenu from './RecursiveMenu.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const toggleSideNav = clickNode => {
  closeAll(props.data, clickNode)
  clickNode.isOpen = !clickNode.isOpen
}

const closeAll = (items, clickNode) => {
  items.forEach(tree => {
    if (tree.children) {
      closeAll(tree.children, clickNode)
    }
    if (tree !== clickNode && tree.isOpen) {
      tree.isOpen = false
    }
  })
}
</script>

<style scoped>
.menu {
  color: rgb(255, 255, 255, 1);
}
.menu-tree {
  padding: 15px;
}
.active {
  background-color: rgb(128, 128, 128, 1);
}
.text {
  color: rgb(254, 254, 84, 1);
}
</style>
