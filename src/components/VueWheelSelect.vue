<template>
  <div
    ref="wheel"
    class="vue-wheel-select"
  >
    <div
      class="vws--scroller"
      ref="scroller"
      @scroll="settleScroll">
      <div
        :style="{
          'padding-top': `${padding}px`,
          'padding-bottom': `${padding}px`
        }">
        <SelectItem
          v-if="allowNullSelection"
          :height="optionHeight"
          :option="null"
          :selected="option === null"
          :getOptionLabel="() => noSelectionMessage"
          @click="selectedItem = null"
        />
        <SelectItem
          v-for="option in options"
          :key="option"
          :height="optionHeight"
          :selected="option === selectedItem"
          v-bind="{ getOptionLabel, option }"
          @click="selectedItem = option"
        />
      </div>
    </div>
    <div
      class="vws--overlay">
      <div
        :style="{'height': `${optionHeight}px`}"
        class="vws--center-bounds"/>
    </div>
  </div>
</template>
<script>
import SelectItem from './SelectItem.vue';

export default {
  components: {
    SelectItem,
  },

  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    optionHeight: {
      type: Number,
      default: 48,
    },
    getOptionLabel: {
      type: Function,
      default: key => key,
    },
    allowNullSelection: {
      type: Boolean,
      default: false,
    },
    noSelectionMessage: {
      type: String,
      default: 'Select an option',
    },
  },

  data() {
    return {
      scrollTimeout: null,
      wheelHeight: 0,
      scrollTop: 0,
      padding: 0,
      scrolledOption: null,
    };
  },

  watch: {
    value(value) {
      if (value === this.scrolledOption) return;
      this.scrollToValue(value);
    },
  },

  mounted() {
    this.wheelHeight = this.$refs.wheel.clientHeight;
    this.padding = (this.wheelHeight - this.optionHeight) / 2;
    this.scrollToValue(this.value);
    this.$nextTick(() => {
      this.$refs.scroller.classList.add('vws-smooth-scroll');
    });
  },

  computed: {
    selectedItem: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  methods: {
    settleScroll() {
      if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
      this.scrollTop = this.$refs.scroller.scrollTop;
      this.scrollTimeout = setTimeout(() => this.setValue(), 200);
    },
    setValue() {
      if (!this.$refs.wheel) return;
      const { scrollTop } = this.$refs.scroller;
      const middleScrollPos = (scrollTop + (this.wheelHeight / 2)) - this.padding;


      let idx = (middleScrollPos - (middleScrollPos % this.optionHeight)) / this.optionHeight;
      idx -= this.allowNullSelection ? 1 : 0;

      this.$emit('input', this.options[idx]);
      this.scrollToValue(this.options[idx]);
    },

    scrollToValue(value) {
      if (!this.$refs.scroller) return;
      this.scrolledOption = value;
      const selectedIdx = this.options.indexOf(value) + (this.allowNullSelection ? 1 : 0);
      this.$refs.scroller.scrollTop = selectedIdx * this.optionHeight;
    },
  },
};
</script>
<style lang="scss" scoped>

.vue-wheel-select {
  position: relative;

  -webkit-overflow-scrolling: touch;

  background: white;

  height: 100px;

  border: 1px solid #ced4da;
  border-radius: .25rem;


  .vws--scroller {
    height: 100%;
    overflow-y: scroll;

    // Removing the scrollbars
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    overflow-y: -moz-scrollbars-none;
    -ms-overflow-style: none;

  }

  .vws--overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    pointer-events: none;

    .vws--center-bounds {
      border-bottom: 1px solid #ced4da;
      border-top: 1px solid #ced4da;
      width: 100%;
    }
  }
}

//Adding a smooth scroll effect for when the component recenters the selected item after scroll
.vws-smooth-scroll {
  scroll-behavior: smooth;
}
</style>
