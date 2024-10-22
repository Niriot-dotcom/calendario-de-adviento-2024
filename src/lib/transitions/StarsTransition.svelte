<script lang="ts">
  import { cubicIn } from "svelte/easing";
  import {
    fade,
    type EasingFunction,
    type TransitionConfig,
  } from "svelte/transition";
  import { PlayMagic } from "$lib/constants/sounds";

  export let duration = 300;

  type Params = {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
  };
  type Options = {
    direction?: "in" | "out" | "both";
  };

  function scale(
    node: Element,
    { delay = 0, duration = 300, easing = cubicIn }: Params = {},
    { direction = "both" }: Options = {}
  ): TransitionConfig {
    direction === "out" && PlayMagic();

    return {
      delay,
      duration,
      easing,
      css: (t) => `
        scale: ${t};
        // rotate: ${t}turn;
      `,
    };
  }
</script>

<!-- {#key key} -->
<!-- <div in:fade={{ duration, delay: duration }} out:fade={{ duration }}> -->
<div
  class="w-full h-full"
  in:scale={{ duration, delay: duration }}
  out:scale={{ duration }}
>
  <slot />
</div>
<!-- {/key} -->
