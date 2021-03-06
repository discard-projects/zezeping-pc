/* eslint-disable */
const pageScroll = (function () {
  const fn = function (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  let islock = false
  return {
    lock: (el) => {
      if (islock) return;
      islock = true;
      (el || document).addEventListener('mousewheel', fn, true)
    },
    unlock: (el) => {
      islock = false;
      (el || document).removeEventListener('mousewheel', fn, true)
    }
  }
})()
export default pageScroll
