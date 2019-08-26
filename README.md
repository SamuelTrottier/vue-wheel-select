# vue-wheel-select

A simple scrolling select and touch compatible component.

**[DEMO](https://SamuelTrottier.github.io/vue-wheel-select/)**

## Installation

```bash
# npm
npm install vue-wheel-select --save

# Yarn
yarn add vue-wheel-select
```

## Usage
#### Minimal example
```html
<template>
  <div>
    <VueWheelSelect
      v-model="selectedBrand"
      :options="brands"
      allowNullSelection
    />
  </div>
</template>

<script>
  import VueWheelSelect from 'vue-wheel-select';

  export default {
    data () {
      return {
        selectedBrand: null,
        brands: [
          'Scarpa',
          'Black Diamond',
          'La Sportiva',
          'Tenaya',
          'Five Ten',
          'Mad Rock',
          'Evolv',
          'Red Chili',
        ],
      }
    },
    components: {
      VueWheelSelect
    }
  }
</script>
```

## Available props
The component accepts these props:

| Attribute        | Type                                            | Default              | Description      |
| :---             | :---:                                           | :---:                | :---             |
| v-model / value  | Any              | Set or Get selected value (required) |
| options           | Array                                          | `null`       | Select options (required)  s|
| optionHeight           | Number                                    | 48  | Height of a single selectable item |
| getOptionLabel | Function | Returns the option | Function called to display the label of each options |
| getOptionKey | Function | Returns the option | Function called to set the option key |
| allowNullSelection | Boolean | false | Add a null option |
| nullSelectionMessage | String | 'Select an option' | Text to display for the null option |