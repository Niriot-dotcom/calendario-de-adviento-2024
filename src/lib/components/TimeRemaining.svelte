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

<div class="my-5 text-agreen">
  <p class="font-latino-43-bold">Faltan</p>
  <!-- <p class="font-ivy text-7xl">{getRemainingTime(testingHours)}</p> -->
  <p class="font-ivy text-7xl">{timeRemaining}</p>
</div>
