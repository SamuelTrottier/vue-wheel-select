<template>
  <div id="app">
    <h1>
      Vue Wheel Select
    </h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <VueWheelSelect
      v-model="selectedBrand"
      :options="brandOptions"/>
    <p>Selected value : {{ selectedBrand }}</p>
  </div>
</template>

<script>
import VueWheelSelect from './components/VueWheelSelect.vue';

export default {
  name: 'app',
  components: {
    VueWheelSelect,
  },
  data() {
    return {
      brandOptions: [
        'Scarpa',
        'Black Diamond',
        'La Sportiva',
        'Tenaya',
        'Five Ten',
        'Mad Rock',
        'Evolv',
        'Red Chili',
      ],
      selectedBrand: 'Black Diamond',
    };
  },


};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
