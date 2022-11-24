<script setup lang='ts'>
import { IMenuBarItem } from "../../types";
import { scrollTo } from "../../utils";
import MenuBarItem from "../menu-bar-item/MenuBarItem.vue"
import useMenuBarTitleConfigura from "./hooks/useMenuBarTitle"

const { width, body } = defineProps<{
  body: string,
  width: number | string,
  menuTitle?: string
}>();
const emits = defineEmits(["MenuBarClick"])

const oMenuBarTitleData = useMenuBarTitleConfigura(body);

function handlerClick(MenuItem: IMenuBarItem) {
  scrollTo(MenuItem.offset);
  emits("MenuBarClick", MenuItem);
}

</script>

<template>
  <div class="o_navigator_menu" :style="{
    width: typeof width === 'number' ? width + 'px' : width
  }">
    <h3 class="o_menu_title">{{ menuTitle || "目录" }}</h3>
    <div class="o_menu_bar_container">
      <MenuBarItem v-for="MenuItem in oMenuBarTitleData" :MenuItem="MenuItem" @click.native="handlerClick(MenuItem)" />
    </div>
  </div>
</template>

<style scoped>
.o_navigator_menu {
  color: #333;
  background: #fff;
  border-radius: 5px;
  padding: 10px 10px;
  font-family: monospace, 'Courier New', Courier;
  max-height: 100vh;
  overflow: auto;
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