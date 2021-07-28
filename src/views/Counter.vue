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
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
  },
};
</script>
