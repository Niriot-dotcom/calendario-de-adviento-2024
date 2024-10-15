<script lang="ts">
  import { browser } from "$app/environment";
  import LateralMenu from "$lib/components/LateralMenu.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
  import { onMount } from "svelte";

  var isSafari: boolean;
  var isChrome: boolean;

  onMount(() => {
    isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(
        !window["safari"] ||
          (typeof safari !== "undefined" && window["safari"].pushNotification)
      );
    isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  });
</script>

<!-- BACKGROUND TEXTURE -->
<!-- <div
  class="w-full h-screen md:h-screen absolute inner-div box-border overflow-y-hidden bg-cover opacity-90"
  style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"
/> -->

<!-- LOGO -->
<WhiteLogo />

<!-- MENU BUTTON -->
<LateralMenu />

<div
  class="absolute inner-div box-border md:relative md:my-5 w-[calc(100%-24px)] h-full flex flex-col text-ared items-center justify-center"
>
  <p class="my-5 text-xl text-nowrap w-full">
    Agrega el calendario a tu pantalla de inicio
    <br />
    para acceder de manera rápida cada día
  </p>

  <!-- VIDEO -->
  <div
    class="w-11/12 sm:w-4/6 md:w-3/6 bg-ared rounded-xl flex justify-center items-center"
  >
    <p class="text-white w-full m-3">
      {isSafari ? "iOS" : "Chrome or something else"}
    </p>
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

<NextButton nextRoute="/inicio" />
