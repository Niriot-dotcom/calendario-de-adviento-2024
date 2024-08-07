<script lang="ts">
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import type { E164Number } from "libphonenumber-js";
  import HeaderAndLogo from "./HeaderAndLogo.svelte";
  import {
    addDoc,
    collection,
    getDocs,
    query,
    serverTimestamp,
    where,
  } from "@firebase/firestore";
  import { COLLECTIONS } from "$lib/constants/db";
  import { db } from "$lib/firebase";
  export let valid: boolean;
  export let value: E164Number | null;

  async function handleSubmit() {
    if (value === "") return;

    const q = query(
      collection(db, COLLECTIONS.Registro),
      where("telefono", "==", value)
    );
    const querySnapshot = await getDocs(q);

    // YA ESTA REGISTRADO ESE NUMERO
    if (querySnapshot.size > 0) {
      value = "";
      return;
    }

    await addDoc(collection(db, COLLECTIONS.Registro), {
      telefono: value,
      fechaUsuario: new Date(),
      serverTimestamp: serverTimestamp(),
    });

    value = "";
  }
</script>

<AlertDialog.Root closeOnEscape closeOnOutsideClick>
  <AlertDialog.Trigger>
    <button
      disabled={!valid}
      on:click={handleSubmit}
      type="submit"
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

      <p class="f10-latino">Recibir notificaciones</p>
    </button>
  </AlertDialog.Trigger>
  <AlertDialog.Content class="w-5/6 rounded-lg">
    <AlertDialog.Header>
      <!-- <HeaderAndLogo /> -->
      <!-- <div class="h-[14vh] md:h-[15vh] p-[3vh] z-10">
        <img
          class="w-full h-full object-contain"
          alt="LOGO VIANNEY INVIERNO"
          src="/images/ELEMENTOS/LOGO-MORADO.webp"
        />
      </div> -->

      <AlertDialog.Title>
        <p class="f6-latino text-agreen">¡Registro exitoso!</p>
        <p class="f5-latino leading-none text-agreen">
          Calendario disponible a partir del 1 de Diciembre del 2024
        </p>
      </AlertDialog.Title>
      <!-- <AlertDialog.Description>
        A partir del 01 de Diciembre del 2024 podrás acceder a nuestro
        calendario.
      </AlertDialog.Description> -->
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Action
        class="text-white bg-agreen hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-agreen font-medium rounded-lg text-sm inline-flex items-center px-8 py-2.5 text-center"
      >
        <!-- <button
          type="button"
          class="text-white bg-agreen hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-ared dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-8 py-2.5 text-center"
        >
          OK
        </button> -->
        <p class="f4-latino">OK</p>
      </AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
