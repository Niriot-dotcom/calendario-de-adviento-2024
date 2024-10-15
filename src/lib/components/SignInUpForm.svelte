<script lang="ts">
  import { getRemainingTime } from "$lib/utils/getRemainingTime";
  import AuthForm from "./auth/AuthForm.svelte";
</script>

<div class="text-ared f5-latino w-full h-full">
  {#if getRemainingTime() === "0"}
    <p>Para comenzar...</p>
  {/if}
  <p class="f6-latino">Inicia sesión o regístrate en segundos</p>

  <!-- BUTTONS -->
  <div class="text-agreen flex flex-col space-y-2 mt-0 items-center w-full">
    <!-- <button
      class="px-5 bg-white rounded-xl w-1/2 h-10 text-nowrap flex space-x-2 items-center"
    >
      <img class="w-7 h-7" alt="GOOGLE ICON" src="/images/ICONOS/google.webp" />
      <span class="f6-latino">Usar Google</span>
    </button>
    <button
      class="px-5 bg-white rounded-xl w-1/2 h-10 text-nowrap flex space-x-2 items-center"
    >
      <img
        class="w-7 h-7"
        alt="FACEBOOK ICON"
        src="/images/ICONOS/facebook.png"
      />
      <span class="f6-latino">Usar Facebook</span>
    </button>
    <button
      on:click={() => (showAuth = true)}
      class="px-5 bg-white rounded-xl w-1/2 h-10 text-nowrap flex space-x-2 items-center"
    >
      <img class="w-7 h-7" alt="EMAIL ICON" src="/images/ICONOS/email.webp" />
      <span class="f6-latino">Usar mi correo</span>
    </button> -->

    <AuthForm />
  </div>
</div>
