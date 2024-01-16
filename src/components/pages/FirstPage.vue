<script setup lang="ts">
import { AuthState } from "@okta/okta-auth-js";
import { useAuth } from "@okta/okta-vue";
import { ShallowRef, inject, ref,  } from "vue";
    const count = ref(0)
    const authState = inject<ShallowRef<AuthState>>('okta.authState');
    console.log('authState')

    const $auth = useAuth();

    const logout = async () => {
      await $auth.signOut();
    } 
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <h5>
      This is from first page. 
      User Name is {{ authState?.idToken?.claims.name }}
    </h5>
    <Button @click="logout()" type="text">Logout</Button>
  </div>

  
</template>