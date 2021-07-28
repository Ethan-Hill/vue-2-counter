<template>
  <div id="app">
    <Counter :count="count" />
    <br />
    <button @click="increaseCount">Increase</button>
  </div>
</template>

<script>
import Counter from "@/components/Counter";
export default {
  components: {
    Counter,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increaseCount() {
      this.$store.dispatch("increment");
    },
  },
};
</script>
