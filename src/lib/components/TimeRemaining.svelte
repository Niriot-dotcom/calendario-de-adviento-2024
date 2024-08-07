<script lang="ts">
  import { getRemainingTime } from "$lib/utils/getRemainingTime";
  import { onMount } from "svelte";

  export let testingHours: boolean = false;
  let timeRemaining = "";
  let secondsPassed = 0;

  onMount(() => {
    const updateTimer = () => {
      timeRemaining = getRemainingTime(testingHours, secondsPassed);
      // TODO remove secondsPassed, it is for testing chronometer
      secondsPassed -= 1;
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  });
</script>

<div class="my-0 text-agreen">
  <p class="f6-latino">Faltan</p>
  <p class="f8-ivy leading-tight">{timeRemaining}</p>
</div>
