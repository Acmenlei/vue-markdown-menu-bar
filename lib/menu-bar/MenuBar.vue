<script setup lang='ts'>
import MenuBarItem from "../menu-bar-item/MenuBarItem.vue"
import useMenuBarTitleConfigura from "./hooks/useMenuBarTitle"

const props = defineProps({
  body: {
    type: String,
    required: true
  }
})

const oMenuBarTitleData = useMenuBarTitleConfigura(props.body);
</script>

<template>
  <div class="o_navigator_menu">
    <h3 class="o_menu_title">目录</h3>
    <div class="o_menu_bar_container">
      <MenuBarItem v-for="MenuItem in oMenuBarTitleData" :MenuItem="MenuItem" />
    </div>
  </div>
</template>

<style scoped>
.o_navigator_menu {
  width: 220px;
  color: #333;
  background: #f8f8f8;
  position: fixed;
  right: 0;
  top: 10px;
  border-radius: 2px;
  padding: 10px 10px;
  font-family: monospace, 'Courier New', Courier;
}

.o_navigator_menu .o_menu_title {
  margin: 0;
  margin: 0 10px;
  padding-bottom: 10px;
  text-align: left;
  border-bottom: 1px solid rgb(230, 230, 230);
}

.o_menu_bar_container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>