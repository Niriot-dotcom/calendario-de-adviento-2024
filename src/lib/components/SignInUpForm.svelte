<script lang="ts">
  import { getRemainingTime } from "$lib/utils/getRemainingTime";
  import AuthForm from "./auth/AuthForm.svelte";
</script>

<div class="text-ared f5-latino w-full h-full">
  {#if getRemainingTime() === "0"}
    <p>Para comenzar...</p>
  {/if}
  <p class="f6-latino">Inicia sesión o regístrate en segundos</p>

  <AuthForm />
</div>
