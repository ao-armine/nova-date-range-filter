<template>
  <div>
    <h3 class="text-sm uppercase tracking-wide text-80 bg-30 p-3">{{ filter.name }}</h3>

    <div class="p-2">
      <input
        class="w-full form-control form-input form-input-bordered"
        :disabled="disabled"
        :class="{'!cursor-not-allowed': disabled}"
        :value="value"
        ref="datePicker"
        type="text"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
<script>
import flatpickr from "flatpickr";
import "../../airbnb-modified.css";
import { Armenian } from "../locales/hy.js";

export default {
  props: {
    resourceName: {
      type: String,
      required: true
    },
    filterKey: {
      type: String,
      required: true
    }
  },

  data: () => ({ flatpickr: null }),

  computed: {
    placeholder() {
      return this.filter.placeholder || this.__("Pick a date range");
    },

    value() {
      if (
        typeof this.filter.currentValue === "object" &&
        this.filter.currentValue.length >= 2
      ) {
        return (
          moment(this.filter.currentValue[0]).format(
            this.toMomentsFormat(this.dateFormat)
          ) +
          " " +
          this.separator +
          " " +
          moment(this.filter.currentValue[1]).format(
            this.toMomentsFormat(this.dateFormat)
          )
        );
      }
      return this.filter.currentValue || null;
    },
    filter() {
      return this.$store.getters[`${this.resourceName}/getFilter`](
        this.filterKey
      );
    },
    disabled() {
      return this.filter.disabled;
    },
    separator() {
      return this.filter.separator || "-";
    },

    dateFormat() {
      return this.filter.dateFormat || "Y-m-d";
    },

    twelveHourTime() {
      return this.filter.twelveHourTime;
    },

    enableTime() {
      return this.filter.enableTime;
    },

    enableSeconds() {
      return this.filter.enableSeconds;
    },

    locale() {
      //overwriting `rangeSeparator` for keeping range after closing filter
      if (this.filter.locale === "hy") {
        Armenian.rangeSeparator = ` ${this.separator} `;

        return Armenian;
      } else {
        return { rangeSeparator: ` ${this.separator} ` };
      }
    }
  },

  mounted() {
    const self = this;
    this.$nextTick(() => {
      this.flatpickr = flatpickr(this.$refs.datePicker, {
        enableTime: this.enableTime,
        enableSeconds: this.enableSeconds,
        onClose: this.handleChange,
        dateFormat: this.dateFormat,
        inline: true,
        allowInput: true,
        mode: "range",
        time_24hr: !this.twelveHourTime,
        onReady() {
          self.$refs.datePicker.parentNode.classList.add("date-filter");
        },
        locale: this.locale
      });
    });
  },

  methods: {
    handleChange(value) {
      value = value.map(value => {
        return moment(value).format(this.toMomentsFormat(this.dateFormat));
      });
      this.$store.commit(`${this.resourceName}/updateFilterState`, {
        filterClass: this.filterKey,
        value
      });
      this.$emit("change");
    },
    toMomentsFormat(format) {
      var res = format;
      res = res.replace("Y", "YYYY");
      res = res.replace("m", "MM");
      res = res.replace("d", "DD");
      return res;
    }
  }
};
</script>
<style scoped>
.\!cursor-not-allowed {
  cursor: not-allowed !important;
}
</style>
