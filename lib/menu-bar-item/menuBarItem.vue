<script setup lang='ts'>
import { IMenuBarItem } from "../../types"
import useScrollTop from "./hooks/useScrollTop"

const scrollTop = useScrollTop();

defineProps<{ MenuItem: IMenuBarItem }>();


</script>

<template>
  <div class="o_menu-bar_title" :level="MenuItem.level">
    <span :class="{o_active: scrollTop >= MenuItem.offset && scrollTop < MenuItem.offsetMax}">
      标题{{ MenuItem.title + MenuItem.title }}
    </span>
  </div>
</template>

<style scoped>
.o_menu-bar_title {
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 14px;
  width: 100%;
  position: relative;
  color: #333;
  margin-top: 12px;
}

.o_menu-bar_title span {
  display: block;
  text-align: left;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background .3s;
}

.o_menu-bar_title span:hover {
  background: #eee;
}

.o_menu-bar_title[level="1"] {
  width: 100%;
}

.o_menu-bar_title[level="2"] {
  width: 90%;
}

.o_menu-bar_title[level="3"] {
  width: 80%;
}

.o_menu-bar_title[level="4"] {
  width: 70%;
}

.o_menu-bar_title[level="5"] {
  width: 60%;
}

.o_menu-bar_title[level="6"] {
  width: 50%;
}

.o_active {
  color: rgb(0, 127, 255);
}

.o_active::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 60%;
  background: rgb(0, 127, 255);
  border-radius: 2px;
  transform: translate(-50%, 25%);
}
</style>