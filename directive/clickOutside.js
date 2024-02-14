const ClickOutside = {
  mounted(el, binding) {
    const handleClickOutside = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value();
      }
    };
    document.addEventListener('click', handleClickOutside);
    el._clickOutsideEvent = handleClickOutside;
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutsideEvent);
  }
}
export default {
  install(app) {
    app.directive('clickOutside', ClickOutside)
  }
}
