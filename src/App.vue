<template>
  <div id="app">
    <h1>
      Vue Wheel Select
    </h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>
      Simple strings Array
    </h3>
    <code>
      [
        'Scarpa',
        'Black Diamond',
        'La Sportiva',
        'Tenaya',
        'Five Ten',
        'Mad Rock',
        'Evolv',
        'Red Chili'
      ]
    </code>
    <VueWheelSelect
      v-model="selectedBrand"
      :options="brandOptions"
      v-bind="{allowNullSelection}"/>
    <p>Selected value : {{ selectedBrand || 'null' }}</p>
    <h3>
      Objects array
    </h3>
    <code>
      [
        {
          id: 1,
          name: 'Scarpa',
        }, <br/>
        {
          id: 2,
          name: 'Black Diamond',
        }, <br/>
        {
          id: 3,
          name: 'La Sportiva',
        },<br/>
        {
          id: 4,
          name: 'Tenaya',
        }
      ]
    </code>
    <VueWheelSelect
      v-model="selectedComplexeBrand"
      :options="complexeBrandOptions"
      :get-option-label="getBrandLabel"
      :get-option-key="getBrandId"
      v-bind="{allowNullSelection}"/>
    <p>Selected value : {{ selectedComplexeBrand || 'null' }}</p>
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
      allowNullSelection: true,
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
      selectedBrand: null,
      complexeBrandOptions: [
        {
          id: 1,
          name: 'Scarpa',
        },
        {
          id: 2,
          name: 'Black Diamond',
        },
        {
          id: 3,
          name: 'La Sportiva',
        },
        {
          id: 4,
          name: 'Tenaya',
        },
      ],
      selectedComplexeBrand: null,
    };
  },
  methods: {
    getBrandLabel(brand) {
      return brand.name;
    },
    getBrandId(brand) {
      return brand.id;
    },
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
.vue-wheel-select {
  margin-top: 16px;
}
</style>
