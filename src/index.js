import VueWheelSelect from './components/VueWheelSelect.vue';

export default {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('vue-wheel-select', VueWheelSelect);
  },
};
