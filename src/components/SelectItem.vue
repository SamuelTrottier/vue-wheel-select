<template>
  <div
    :style="{'height': `${height}px`}"
    :class="{'vws-selected': selected, 'vws-null-option': nullOption}"
    class="vws--select-item"
    @click="$emit('click')"
  >
    {{ getOptionLabel(option) }}
  </div>
</template>
<script>
export default {
  props: {
    option: {
      type: null,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
    height: {
      type: Number,
      default: 48,
    },
    getOptionLabel: {
      type: Function,
      default: value => value,
    },
  },

  computed: {
    nullOption() {
      return this.option === null;
    },
  },
};
</script>
<style lang="scss" scoped>
.vws--select-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 8px;

  transition: background-color 0.5s ease;
  &:hover:not(.selected) {
    background-color: #f8f8f8;
  }

  &.vws-selected {
    background-color: #efefef;
  }
  &.vws-null-option {
    color: #888;
  }

}
</style>
