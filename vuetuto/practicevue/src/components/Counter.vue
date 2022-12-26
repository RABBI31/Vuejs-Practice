<template>
  <div>
    <button @click="increment">
    Increment is: {{ state.count }}
  </button>

  <button @click="decrement">
    Decrement is: {{ state.count }}
  </button>
  </div>
  
</template>

<script>
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    function increment() {
      state.count++;
    }
    function decrement() {
      state.count--;
    }

    return {
      state,
      increment,
      decrement
    };
  },
};
</script>

<style scoped>
div{
  display: flex;
}
button {
  margin: 10px;
  font-size: 24px;
  padding: 5px;
  gap: 10px;
}
</style>
