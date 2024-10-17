<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import {
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
  } from "firebase/auth";
  import { AuthStore, AuthHandlers } from "../../../stores/AuthStore";
  import { auth } from "$lib/firebase/firebase.client";

  let email = "";
  let password = "";
  let confirmPass = "";
  let error = false;
  let register = false;
  let authenticating = false;
  let errorMsg = "Hubo un error, por favor verifica tus datos";

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
      console.log("err.code: ", err.code);
      if (err.code === "auth/invalid-login-credentials") {
        errorMsg = "Verifica tu correo o contraseña";
      }

      error = true;
      authenticating = false;
    }
  }

  function handleRegister() {
    register = !register;
    error = false;
    authenticating = false;
    errorMsg = "Hubo un error, por favor verifica tus datos";
  }

  async function handleLoginWithGoogle() {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());

      if ($AuthStore.currentUser) {
        window.location.href = register ? "/nombramiento" : "/inicio";
      }
    } catch (error) {}
  }

  async function handleLoginWithFacebook() {
    try {
      signInWithPopup(auth, new FacebookAuthProvider())
        .then((result) => {
          const user = result.user;
          console.log("FB user: ", user);

          if ($AuthStore.currentUser) {
            window.location.href = register ? "/nombramiento" : "/inicio";
          }
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
          console.log("FB error: ", error, email);
        });
    } catch (error) {
      console.log("catch FB error: ", error);
    }
  }
</script>

<!-- TODO -->
<div class="text-agreen flex flex-col space-y-1 mt-0 items-center w-full">
  <button
    on:click={handleLoginWithGoogle}
    class="px-5 bg-white rounded-xl w-1/2 h-8 text-nowrap flex space-x-2 items-center"
  >
    <img
      class="w-[2.5vh] h-[2.5vh]"
      alt="GOOGLE ICON"
      src="/images/ICONOS/google.webp"
    />
    <span class="f6-latino">Usar Google</span>
  </button>
  <button
    on:click={handleLoginWithFacebook}
    class="px-5 bg-white rounded-xl w-1/2 h-8 text-nowrap flex space-x-2 items-center"
  >
    <img
      class="w-[2.5vh] h-[2.5vh]"
      alt="FACEBOOK ICON"
      src="/images/ICONOS/facebook.png"
    />
    <span class="f6-latino">Usar Facebook</span>
  </button>

  <!-- EMAIL AND PASSWORD -->
  <Dialog.Root>
    <Dialog.Trigger
      class="px-5 bg-white rounded-xl w-1/2 h-8 text-nowrap flex space-x-2 items-center"
    >
      <img
        class="w-[2.5vh] h-[2.5vh]"
        alt="EMAIL ICON"
        src="/images/ICONOS/email.webp"
      />
      <span class="f6-latino">Usar mi correo</span>
    </Dialog.Trigger>

    <Dialog.Content
      class="bg-white flex flex-col justify-center items-center w-10/12 rounded-xl border-0"
      style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
    >
      <Dialog.Header>
        <Dialog.Title class="font-normal text-center">
          <p class="text-agreen f6-latino">
            {register ? "Registro" : "Iniciar sesión"}
          </p>
        </Dialog.Title>
        <Dialog.Description class="Description">
          {#if error}
            <p class="text-ared f10-latino">⚠️ {errorMsg}</p>
          {/if}
        </Dialog.Description>
      </Dialog.Header>

      <div class="w-11/12 md:w-8/12">
        <form class="flex flex-col space-y-2 items-center">
          <label class="w-full text-agreen f10-latino">
            <p class="text-agreen f10-latino">Correo electrónico</p>
            <input
              bind:value={email}
              type="email"
              placeholder="Correo electrónico"
              class="vinput focus:ring-2 focus:ring-ared focus:text-agreen focus:bg-gray-200"
            />
          </label>

          <label class="w-full text-agreen f10-latino">
            <p class="text-agreen f10-latino">Contraseña</p>
            <input
              bind:value={password}
              type="password"
              placeholder="Contraseña"
              class="vinput focus:ring-2 focus:ring-ared focus:text-agreen focus:bg-gray-200"
            />
          </label>
          {#if register}
            <label class="w-full text-agreen f10-latino">
              <p>Confirmar Contraseña</p>
              <input
                bind:value={confirmPass}
                type="password"
                placeholder="Contraseña"
                class="vinput focus:ring-2 focus:ring-ared focus:text-agreen focus:bg-gray-200"
              />
            </label>
          {/if}

          <button on:click={handleAuthenticate} type="submit" class="btnp">
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
    </Dialog.Content>
  </Dialog.Root>
</div>
