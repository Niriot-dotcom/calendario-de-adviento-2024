<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import LaMagiaCopy from "$lib/components/LaMagiaCopy.svelte";
  import SignInUpForm from "$lib/components/SignInUpForm.svelte";
</script>

<div
  class="w-screen h-screen inner-div box-border overflow-y-hidden relative border-[12px] border-ared bg-cover flex flex-col text-center"
  style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
>
  <!-- HEADER & LOGO -->
  <HeaderAndLogo />

  <!-- ANGELITOS -->
  <div class="absolute flex w-full h-[40vh] top-1/3 transform -translate-y-1/3">
    <AngelitosHomepage firstPosition="BOTTOM" />
  </div>

  <div class="absolute flex flex-col bottom-0 w-full h-[40vh]">
    <!-- SUBTITLE -->
    <LaMagiaCopy />

    <!-- [COMPONENT] SIGN UP / SIGN IN  -->
    <SignInUpForm />
  </div>
</div>
