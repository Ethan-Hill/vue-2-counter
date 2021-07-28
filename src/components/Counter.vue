<template>
  <h1>You have clicked the button {{ count }}</h1>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
}
</script>
