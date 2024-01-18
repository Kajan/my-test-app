<script setup lang="ts">
import { RouterView } from "vue-router";

console.log('Reached the vue component');

</script>

<template>
    <div>
        <h3>This is from ViewComponent</h3>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>