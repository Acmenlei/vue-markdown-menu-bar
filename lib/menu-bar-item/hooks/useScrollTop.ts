import { onMounted, onUnmounted, ref } from "vue";
import { debounce } from "../../../utils";

export default function useScrollTop() {
  const scrollTop = ref(0);
  const cb = debounce(function () {
    scrollTop.value = (document.documentElement || document.body).scrollTop;
  }, 50);

  onMounted(() => {
    document.addEventListener("scroll" , cb);
  })

  onUnmounted(() => {
    document.removeEventListener("scroll" , cb);
  })
  return scrollTop;
}