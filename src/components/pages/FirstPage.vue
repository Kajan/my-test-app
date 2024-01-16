<script setup lang="ts">
import { ref } from "vue";
    const count = ref(0)
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      This is from first page. 
    </p>
  </div>
</template>