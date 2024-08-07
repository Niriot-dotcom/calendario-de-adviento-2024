<script lang="ts">
  import LateralMenu from "$lib/components/LateralMenu.svelte";
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
</script>

<div
  class="w-screen h-screen bg-no-repeat md:h-screen inner-div box-border overflow-y-hidden relative border-[12px] border-ared flex flex-col text-center items-center justify-center"
  style="background-image: url('/images/FONDOS/CASA.webp'); float: left; background-size: 100vw; background-size: cover; background-position: center;"
>
  <!-- BACKGROUND TEXTURE -->
  <div
    class="w-full h-screen md:h-screen absolute inner-div box-border overflow-y-hidden bg-cover opacity-90"
    style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
  />

  <!-- LOGO -->
  <WhiteLogo />

  <!-- MENU BUTTON -->
  <LateralMenu />

  <div
    class="absolute md:relative md:my-5 w-full h-full flex flex-col text-ared items-center justify-center"
  >
    <p class="my-5 text-xl text-nowrap w-full">
      Agrega el calendario a tu pantalla de inicio
      <br />
      para acceder de manera rápida cada día
    </p>

    <!-- VIDEO -->
    <div class="md:w-2/6 md:h-2/6 bg-ared rounded-xl">
      <!-- <div
        data-poster-url={backgroundVideo.replace("mp4", "jpg")}
        data-video-urls="{backgroundVideo},{backgroundVideo.replace(
          'mp4',
          'webm'
        )}"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        class="w-full h-full"
      >
        <video
          autoplay
          loop
          muted
          playsinline
          style="background-image: url(&quot;{backgroundVideo.replace(
            'mp4',
            'jpg'
          )}&quot;)"
          data-wf-ignore="true"
          class="w-full h-full object-cover"
        >
          <source src={backgroundVideo} data-wf-ignore="true" />
          <source
            src={backgroundVideo.replace("mp4", "webm")}
            data-wf-ignore="true"
          />
        </video>
      </div> -->
    </div>
  </div>
</div>
