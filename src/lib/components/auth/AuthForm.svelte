<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import { AuthStore, AuthHandlers } from "../../../stores/AuthStore";

  let email = "";
  let password = "";
  let confirmPass = "";
  let error = false;
  let register = false;
  let authenticating = false;

  async function handleAuthenticate() {
    if (authenticating) {
      return;
    }
    if (!email || !password || (register && !confirmPass)) {
      error = true;
      return;
    }
    authenticating = true;

    try {
      if (register && password === confirmPass) {
        await AuthHandlers.signup(email, password);
      } else {
        await AuthHandlers.login(email, password);
      }

      if ($AuthStore.currentUser) {
        window.location.href = register ? "/nombramiento" : "/inicio";
      }
    } catch (err) {
      console.log("There was an auth error", err);
      error = true;
      authenticating = false;
    }
  }

  function handleRegister() {
    register = !register;
  }
</script>

<!-- <button
  class="px-5 bg-white rounded-xl w-1/2 h-10 text-nowrap flex space-x-2 items-center"
>
  <img class="w-7 h-7" alt="GOOGLE ICON" src="/images/ICONOS/google.webp" />
  <span class="f6-latino">Usar Google</span>
</button> -->
<!-- <button
  class="px-5 bg-white rounded-xl w-1/2 h-10 text-nowrap flex space-x-2 items-center"
>
  <img class="w-7 h-7" alt="FACEBOOK ICON" src="/images/ICONOS/facebook.png" />
  <span class="f6-latino">Usar Facebook</span>
</button> -->

<!-- EMAIL AND PASSWORD -->
<Dialog.Root>
  <Dialog.Trigger
    class="px-5 bg-white rounded-xl w-1/2 h-10 text-nowrap flex space-x-2 items-center"
  >
    <img class="w-7 h-7" alt="EMAIL ICON" src="/images/ICONOS/email.webp" />
    <span class="f6-latino">Usar mi correo</span>
  </Dialog.Trigger>

  <Dialog.Content
    class="bg-white flex flex-col justify-center items-center w-10/12 rounded-xl border-0"
    style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
  >
    <Dialog.Header>
      <Dialog.Title class="text-agreen f6-latino">
        {register ? "Registro" : "Iniciar sesión"}
      </Dialog.Title>
      <Dialog.Description>
        {#if error}
          <p class="error">Tus credenciales no son correctas.</p>
        {/if}
      </Dialog.Description>
    </Dialog.Header>

    <div class="w-11/12 md:w-8/12">
      <form class="flex flex-col space-y-2 items-center">
        <label class="w-full">
          <p class="text-agreen f10-latino">Correo electrónico</p>
          <input
            bind:value={email}
            type="email"
            placeholder="Correo electrónico"
            class="vinput"
          />
        </label>

        <label class="w-full">
          <p class=" text-agreen f10-latino">Contraseña</p>
          <input
            bind:value={password}
            type="password"
            placeholder="Contraseña"
            class="vinput focus:ring-2 focus:ring-ared"
          />
        </label>
        {#if register}
          <label class="w-full">
            <p class="">Confirmar contraseña</p>
            <input
              bind:value={confirmPass}
              type="password"
              placeholder="Contraseña"
              class="bg-white rounded-full px-3 py-1 w-full focus:border-ared focus:ring-ared"
            />
          </label>
        {/if}

        <button
          on:click={handleAuthenticate}
          type="submit"
          class="min-w-36 rounded-xl mt-5 px-5 py-2 text-white bg-ared flex justify-center items-center transition-all ease-linear duration-200"
        >
          {#if authenticating}
            <div class="loader"></div>
          {:else}
            <p>{register ? "Registrarme" : "Iniciar sesión"}</p>
          {/if}
        </button>
      </form>

      <!--  -->
      <div class="flex flex-col items-center text-agreen mt-5">
        {#if register}
          <div class="flex">
            <p>
              ¿Ya tienes una cuenta?
              <button class="underline" on:click={handleRegister}>
                Inicia sesión
              </button>
            </p>
          </div>
        {:else}
          <div class="flex">
            <p>
              ¿No tienes una cuenta?
              <button class="underline" on:click={handleRegister}>
                Regístrate
              </button>
            </p>
          </div>
        {/if}
      </div>
    </div>

    <!-- <Dialog.Footer>
      <Button type="submit">Save changes</Button>
    </Dialog.Footer> -->
  </Dialog.Content>
</Dialog.Root>

<style>
  .loader {
    width: 20px;
    aspect-ratio: 1;
    position: relative;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    inset: 0;
    background: #ffb940;
    box-shadow: 0 0 0 50px;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }
  .loader:after {
    animation: l5 1s infinite;
    transform: perspective(300px) translateZ(0px);
  }
  @keyframes l5 {
    to {
      transform: perspective(300px) translateZ(150px);
      opacity: 0;
    }
  }
</style>
