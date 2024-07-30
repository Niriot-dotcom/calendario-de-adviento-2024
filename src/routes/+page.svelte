<script lang="ts">
</script>

<div
  class="w-screen h-[94vh] inner-div box-border overflow-y-hidden relative border-[28px] border-ared bg-cover flex flex-col text-center"
  style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
>
  <!-- LOGO -->
  <div class="h-[10vh] p-5">
    <img
      class="w-full h-full"
      alt="LOGO VIANNEY INVIERNO"
      src="/images/ELEMENTOS/LOGOTIPO_INVIERNO.svg"
    />
  </div>

  <!-- HEADER -->
  <div>
    <p class="font-ivy italic text-4xl">Calendario de Adviento</p>
    <p class="font-ivy italic text-3xl">Angelitos 2024</p>
  </div>

  <!-- ANGELITOS -->
  <!-- TODO tienen que ser absolute -->
  <div class="h-[30vh] flex justify-between">
    <img
      class="w-1/2 object-contain scale-x-flip"
      alt="ANGELITA"
      src="/images/PERSONAJES/ANGELITA.webp"
    />

    <img
      class="w-1/2 object-contain"
      alt="ANGELITO"
      src="/images/PERSONAJES/ANGELITO.webp"
    />
  </div>

  <!-- SUBTITLE -->
  <div class="font-latino">
    <p>¡La magia de la <span class="font-ivy">navidad</span></p>
    <p>está cada vez más cerca!</p>
  </div>

  <!-- SIGN UP / SIGN IN -->
  <div class="font-latino">
    <p>Para comenzar...</p>
    <p class="font-bold">Inicia sesión o regístrate en segundos</p>

    <!-- BUTTONS -->
    <div class="flex flex-col space-y-2 mt-3 items-center">
      <button
        class="px-4 bg-white rounded-xl w-1/2 h-12 text-nowrap flex space-x-2 items-center"
      >
        <img
          class="w-7 h-7"
          alt="GOOGLE ICON"
          src="/images/ICONOS/google.webp"
        />
        <span>Usar Google</span>
      </button>
      <button
        class="px-4 bg-white rounded-xl w-1/2 h-12 text-nowrap flex space-x-2 items-center"
      >
        <img
          class="w-7 h-7"
          alt="FACEBOOK ICON"
          src="/images/ICONOS/facebook.png"
        />
        <span>Usar Facebook</span>
      </button>
      <button
        class="px-4 bg-white rounded-xl w-1/2 h-12 text-nowrap flex space-x-2 items-center"
      >
        <img class="w-7 h-7" alt="EMAIL ICON" src="/images/ICONOS/email.webp" />
        <span>Usar mi correo</span>
      </button>
    </div>
  </div>
</div>
