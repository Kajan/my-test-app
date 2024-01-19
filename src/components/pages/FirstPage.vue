<script setup lang="ts">
import { AuthState } from "@okta/okta-auth-js";
import { useAuth } from "@okta/okta-vue";
import {   ShallowRef, inject, ref } from "vue";

    const count = ref(0)
    const authState = inject<ShallowRef<AuthState>>('okta.authState');
    
    console.log('Reached the First page.');
    console.log('authState', authState?.value);

    const $auth = useAuth();

    const logout = async () => {
      await $auth.signOut();
      console.log('after signout auth state', authState?.value);  
      await $auth.closeSession();
      console.log('after closing session auth state', authState?.value);  
      window.location.origin;
    } 
</script>

<template>
  <div class="card">
    <p>
      This is from the FirstPage. 
    </p>
    Welcome back <h5> {{ authState?.idToken?.claims.name }} </h5> Click the button below to increase the count or click to logout. <br/>
    <button type="button" @click="count++">count is {{ count }}</button>
    <button @click="logout()" >Logout</button>
  </div> 
</template>
<style>
  button{
    margin: 0 0.5rem;
    background-color: lightgrey;
  }
</style>