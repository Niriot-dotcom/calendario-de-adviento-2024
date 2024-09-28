<script lang="ts">
  import AngelitosHomepage from "$lib/components/AngelitosHomepage.svelte";
  import HeaderAndLogo from "$lib/components/HeaderAndLogo.svelte";
  import NextButton from "$lib/components/NextButton.svelte";

  let nombreAngelita: string = "";
  let nombreAngelito: string = "";

  function handleChangeAngelita(newName: string) {
    nombreAngelita = newName;
  }
  function handleChangeAngelito(newName: string) {
    nombreAngelito = newName;
  }
</script>

<svelte:head>
  <title>Nombramiento</title>
  <meta name="description" content="Nombramiento de Angelitos" />
</svelte:head>

<!-- HEADER & LOGO -->
<HeaderAndLogo />

<!-- ANGELITOS -->
<div
  class="absolute flex justify-between w-full h-[35vh] top-[40%] transform -translate-y-[40%]"
>
  <AngelitosHomepage
    isAngelitoFirst
    firstPosition="TOP"
    angelitosSize="w-5/6"
  />
</div>

<div
  class="absolute md:relative md:my-5 flex flex-col bottom-0 w-full h-[40vh]"
>
  <!-- FOOTER -->
  <div class="f5-latino my-5 text-agreen">
    <p class="leading-none">Para comenzar nombra a tus Angelitos,</p>
    <p class="leading-none">
      ellos <span class="f6-latino">te acompañarán durante el Adviento.</span>
    </p>
  </div>

  <!-- TEXT FIELDS -->
  <div
    class="flex flex-col space-y-5 w-full items-center justify-center text-agreen"
  >
    <!-- ANGELITA -->
    <div class="flex flex-col md:w-2/6">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="latino-xl text-nowrap">Nombra a tu Angelita:</label>
      <input
        on:input={(e) => handleChangeAngelita(e.target.value)}
        value={nombreAngelita}
        name="nombre-angelita"
        class="bg-white rounded-full px-3 py-1"
      />
    </div>

    <!-- ANGELITO -->
    <div class="flex flex-col md:w-2/6">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="latino-xl text-nowrap">Nombra a tu Angelito:</label>
      <input
        on:input={(e) => handleChangeAngelito(e.target.value)}
        value={nombreAngelito}
        name="nombre-angelita"
        class="bg-white rounded-full px-3 py-1"
      />
    </div>
  </div>
</div>

<NextButton nextRoute="/indicaciones" />
