<script setup lang="ts">
import { ref } from "vue";
    const count = ref(0)
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <h5>
      This is from first page. 
    </h5>
  </div>
</template>