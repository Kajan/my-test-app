<script setup lang="ts">
// import { AuthState } from "@okta/okta-auth-js";
//import { useAuth } from "@okta/okta-vue";
import {   ref } from "vue";

    const count = ref(0)
    //const authState = inject<ShallowRef<AuthState>>('okta.authState');

    console.log('authState')

    // const $auth = useAuth();

    // const logout = async () => {
    //   await $auth.signOut();
    // } 
</script>

<template>
  <div class="card">
    <p>
      This is from the FirstPage. 
    </p>
    Welcome back  Click the button below to increase the count or click to logout. <br/> 
    <button type="button" @click="count++">count is {{ count }}</button>
    <!-- <Button @click="logout()" type="text">Logout</Button> -->
  </div> 
</template>
<style>
  button{
    margin: 0 0.5rem;
    background-color: lightgrey;
  }
</style>