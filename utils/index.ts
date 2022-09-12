export function scrollTo(targetTop: number = 0) {
  const documentBody: HTMLElement = document.documentElement || document.body;
  // 计算gap
  let GAP = Math.abs(documentBody.scrollTop - targetTop) / 20,
    currentScrollTop = 0,
    _GAP = GAP,
    preScrollTop = -1;

  function scrollHelper() {
    currentScrollTop = documentBody.scrollTop;
    // 距离目标还有多远
    let currentDistance = currentScrollTop - targetTop;
    // 1. 超过了最大最小值
    // 2. 刚好走完了
    if (preScrollTop == currentScrollTop || currentDistance == 0) {
      return;
    }
    preScrollTop = currentScrollTop;

    window.requestAnimationFrame(function () {
      GAP = currentDistance > 0 ? _GAP : -_GAP;
      currentScrollTop -= GAP;
      // 如果距离比较小那么直接定位即可
      if (Math.abs(currentDistance) < _GAP) {
        documentBody.scrollTop = targetTop;
        return;
      }
      documentBody.scrollTop = currentScrollTop;
      Math.abs(currentDistance) > 0 && scrollHelper();
    });
  }
  scrollHelper();
}