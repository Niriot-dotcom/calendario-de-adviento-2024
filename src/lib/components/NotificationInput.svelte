<script lang="ts">
  import { COLLECTIONS } from "$lib/constants/db";
  import { db } from "$lib/firebase";
  import { addDoc, collection, serverTimestamp } from "firebase/firestore";
  import { TelInput, normalizedCountries } from "svelte-tel-input";
  import type {
    DetailedValue,
    E164Number,
    CountryCode,
    TelInputOptions,
  } from "svelte-tel-input/types";
  import SuccessModal from "./SuccessModal.svelte";

  // E164 formatted value, usually you should store and use this.
  let value: E164Number | null = "";

  // Selected country
  let country: CountryCode = "MX";

  // Validity
  let valid: boolean = true;

  // Phone number details
  export let detailedValue: DetailedValue | null = null;

  export let options: TelInputOptions = {};
</script>

<div class="flex w-full items-center justify-center">
  <select
    class="form-select appearance-none
    block
    px-3
    py-1.5
    bg-clip-padding bg-no-repeat cursor-pointer
    text-agreen f10-latino rounded-s-full
    m-0"
    aria-label="Default select example"
    name="Country"
    bind:value={country}
  >
    <option value={null} hidden={country !== null}>Selecciona</option>
    {#each normalizedCountries as currentCountry (currentCountry.id)}
      <option
        value={currentCountry.iso2}
        selected={currentCountry.iso2 === country}
        aria-selected={currentCountry.iso2 === country}
      >
        {currentCountry.iso2} (+{currentCountry.dialCode})
      </option>
    {/each}
  </select>

  <TelInput
    {options}
    bind:country
    bind:valid
    bind:value
    bind:detailedValue
    placeholder=""
    class="block px-3 py-1.5 m-0
    bg-clip-padding bg-no-repeat cursor-pointer
    text-agreen f10-latino rounded-e-full
    {valid ? 'border border-gray-300 ' : 'border-2 border-ared'}"
  />
</div>

<div class="flex flex-col w-full items-center justify-center">
  {#if !valid}
    <p class="mt-2 mb-4 f10-latino text-ared">
      El número de teléfono no es válido.
    </p>
  {/if}

  <!-- <button
      type="submit"
      disabled={!valid}
      class="text-white flex items-center justify-center space-x-1 w-fit bg-agreen hover:bg-green-700 disabled:bg-gray-400 f5-latino rounded-full
  px-5 py-2 mt-1 mb-5"
    >
      <div class="">
        <img
          class="w-4 h-4"
          src="/images/ICONOS/whatsapp.png"
          alt="WHATSAPP ICON"
        />
      </div>

      <p class="">Recibir notificaciones</p>
    </button> -->

  <SuccessModal bind:value bind:valid />
</div>
