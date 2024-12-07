<script lang="ts">
  import LateralMenu from "$lib/components/LateralMenu.svelte";
  import NextButton from "$lib/components/NextButton.svelte";
  import WhiteLogo from "$lib/components/WhiteLogo.svelte";
  import { onMount } from "svelte";

  var isSafari: boolean;
  var isChrome: boolean;
  let videoUrl: string;
  // let videoUrl: string = "/videos/GUARDAR-H.mp4";

  onMount(() => {
    // isSafari =
    //   /constructor/i.test(window.HTMLElement) ||
    //   (function (p) {
    //     return p.toString() === "[object SafariRemoteNotification]";
    //   })(
    //     !window["safari"] ||
    //       (typeof safari !== "undefined" && window["safari"].pushNotification)
    //   );
    // isChrome =
    //   !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    const userAgent = navigator.userAgent;
    isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    // TODO
    videoUrl = isSafari ? "/videos/TUTORIAL-IOS.mp4" : "/videos/GUARDAR-H.mp4";

    // enable autoplay
    setTimeout(() => {
      const videoElement = document.querySelector("video");
      videoElement!.muted = true; // Ensure it's muted
      videoElement!.playsInline = true; // Ensure inline playback
      videoElement!.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }, 1000);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("video");
    video!.muted = true;
    video!.playsInline = true;

    // Attempt autoplay
    video!.play().catch(() => {
      // Fallback: Start video on user interaction
      document.addEventListener(
        "click",
        () => {
          video!.play();
        },
        { once: true }
      );
    });
  });
</script>

<!-- LOGO -->
<WhiteLogo />

<!-- MENU BUTTON -->
<LateralMenu />

<div
  class="absolute inner-div box-border md:relative md:my-5 h-full flex flex-col items-center justify-center"
>
  <p class="my-5 text-xl f10-latino text-nowrap w-full leading-none">
    Agrega el calendario a tu pantalla de inicio
    <br />
    para acceder de manera rápida cada día
  </p>

  <!-- VIDEO -->
  <div
    class="w-11/12 mx-auto sm:w-4/6 md:w-3/6 bg-ared rounded-xl flex justify-center items-center"
  >
    <!-- data-poster-url={videoUrl.replace("mp4", "jpg")}
  data-video-urls="{videoUrl},{videoUrl.replace('mp4', 'webm')}" -->
    <div
      data-video-urls={videoUrl}
      data-autoplay="true"
      data-loop="true"
      data-wf-ignore="true"
      class="w-full h-full px-2 py-3"
    >
      <!-- style="background-image: url(&quot;{videoUrl.replace(
          'mp4',
          'jpg'
        )}&quot;)" -->
      <video
        autoplay
        loop
        muted
        playsinline
        preload="auto"
        controls={false}
        class="w-full h-full object-contain rounded-xl"
      >
        <source src={videoUrl} data-wf-ignore="true" />
        <!-- <source src={videoUrl.replace("mp4", "webm")} data-wf-ignore="true" /> -->
      </video>
    </div>
  </div>
</div>

<NextButton nextRoute="/inicio" />
