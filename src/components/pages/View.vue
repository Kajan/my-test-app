<script setup lang="ts">
import { RouterView } from "vue-router";
import Tabs from "../Tabs.vue";
</script>

<template>
     <div>
        <h3>This is from ViewComponent</h3>
    </div>
    <Tabs>
        <div>
            <router-view></router-view>
        </div>
    </Tabs>
</template>