import { onMounted, ref } from "vue";

export default function useScrollTop() {
  const scrollTop = ref(0);

  onMounted(() => {
    document.addEventListener("scroll", debounce(function () {
      scrollTop.value = (document.documentElement || document.body).scrollTop;
    }, 50))
  })

  return scrollTop;
}

function debounce(cb: Function, delay: number) {
  let timer: any = null;
  return function (this: any, ...args: any[]) {
    const _this = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(_this, args);
    }, delay)
  }
}