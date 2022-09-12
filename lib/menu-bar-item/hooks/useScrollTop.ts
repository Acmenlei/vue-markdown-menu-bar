import { onMounted, ref } from "vue";
import { debounce } from "../../../utils";

export default function useScrollTop() {
  const scrollTop = ref(0);

  onMounted(() => {
    document.addEventListener("scroll", debounce(function () {
      scrollTop.value = (document.documentElement || document.body).scrollTop;
    }, 50))
  })

  return scrollTop;
}