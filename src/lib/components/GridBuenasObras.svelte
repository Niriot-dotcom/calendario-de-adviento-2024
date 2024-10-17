<script lang="ts">
  import { goto } from "$app/navigation";
  import type { USER_SCHEMA } from "$lib/constants/db";
  import { AuthStore } from "../../stores/AuthStore";
  import AngelitosHomepage from "./AngelitosHomepage.svelte";

  let currentDay: number;
  let nextAvailableDay: number;

  let dataFromUser: USER_SCHEMA;
  AuthStore.subscribe((curr) => {
    dataFromUser = curr?.data;
    nextAvailableDay = dataFromUser.lastDay + 1;
    currentDay = curr?.currentDay;
  });
</script>

<!-- GRID BUENAS OBRAS -->
<div class="flex space-x-8 w-[100vh] h-[80vh] z-10 mt-[8vh]">
  <!-- IZQUIERDO -->
  <div class="grid grid-cols-1 grid-rows-6 w-[25vh] h-full z-10">
    <div></div>
    {#each [1, 12, 13, 23, 24] as number, _}
      {#if number <= currentDay && number <= nextAvailableDay}
        <button
          on:click={() => goto(`/inicio/${number}`)}
          disabled={number !== nextAvailableDay || number > currentDay}
          class="w-full h-full relative"
        >
          <div
            class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="object-contain {nextAvailableDay === number
                ? 'grayscale-img'
                : ''}"
              alt="star"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        </button>
      {/if}
    {/each}
  </div>

  <!-- CENTER -->
  <div class="grid grid-cols-1 grid-rows-3 w-[110vh] h-full z-10 space-y-0">
    <div
      class="w-[30vh] h-2/3 place-self-center grid grid-rows-2 relative self-start"
    >
      <button
        on:click={() => goto(`/inicio/3`)}
        disabled={3 !== nextAvailableDay || 3 > currentDay}
        class="w-full h-full relative self-end"
      >
        {#if 3 <= currentDay && 3 <= nextAvailableDay}
          <div
            class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="w-full h-full object-contain {nextAvailableDay === 3
                ? 'grayscale-img'
                : ''}"
              alt="star"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        {/if}
      </button>

      <div class="w-full h-full flex space-x-8">
        <button
          on:click={() => goto(`/inicio/2`)}
          disabled={2 !== nextAvailableDay || 2 > currentDay}
          class="w-1/2 h-full relative"
        >
          {#if 2 <= currentDay && 2 <= nextAvailableDay}
            <div
              class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <img
                class="w-full h-full object-contain {nextAvailableDay === 2
                  ? 'grayscale-img'
                  : ''}"
                alt="star"
                src="/images/ELEMENTOS/ESTRELLA.webp"
              />
            </div>
          {/if}
        </button>

        <button
          on:click={() => goto(`/inicio/4`)}
          disabled={4 !== nextAvailableDay || 4 > currentDay}
          class="w-1/2 h-full relative"
        >
          {#if 4 <= currentDay && 4 <= nextAvailableDay}
            <div
              class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <img
                class="object-contain {nextAvailableDay === 4
                  ? 'grayscale-img'
                  : ''}"
                alt="star"
                src="/images/ELEMENTOS/ESTRELLA.webp"
              />
            </div>
          {/if}
        </button>
      </div>
    </div>

    <div class="w-full h-full">
      <div class="w-full h-1/2 grid grid-cols-4 grid-rows-1" dir="rtl">
        {#each [8, 9, 10, 11] as number, i}
          <button
            on:click={() => goto(`/inicio/${number}`)}
            disabled={number !== nextAvailableDay || number > currentDay}
            class="relative w-full h-full"
          >
            {#if number <= currentDay && number <= nextAvailableDay}
              <div
                class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              >
                <img
                  class="object-contain {nextAvailableDay === number
                    ? 'grayscale-img'
                    : ''}"
                  alt="star"
                  src="/images/ELEMENTOS/ESTRELLA.webp"
                />
              </div>
            {/if}
          </button>
        {/each}
      </div>
      <div class="w-full h-1/2 grid grid-cols-4 grid-rows-1">
        {#each [14, 15, 16, 17] as number, i}
          <button
            on:click={() => goto(`/inicio/${number}`)}
            disabled={number !== nextAvailableDay || number > currentDay}
            class="relative w-full h-full"
          >
            {#if number <= currentDay && number <= nextAvailableDay}
              <div
                class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              >
                <img
                  class="object-contain {nextAvailableDay === number
                    ? 'grayscale-img'
                    : ''}"
                  alt="star"
                  src="/images/ELEMENTOS/ESTRELLA.webp"
                />
              </div>
            {/if}
          </button>
        {/each}
      </div>
    </div>

    <div class="w-full h-full grid grid-cols-3 grid-rows-1 relative">
      {#each [22, 25, 21] as number, i}
        <button
          on:click={() => goto(`/inicio/${number}`)}
          disabled={number !== nextAvailableDay || number > currentDay}
          class="w-full h-5/6 relative {number === 25
            ? 'self-end'
            : ''} order-{i}"
        >
          {#if number <= currentDay && number <= nextAvailableDay}
            <div
              class="{number === 25
                ? 'w-[10vh] h-[10vh]'
                : 'w-[8vh] h-[8vh]'} absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <img
                class="object-contain {nextAvailableDay === number
                  ? 'grayscale-img'
                  : ''}"
                alt="star"
                src="/images/ELEMENTOS/ESTRELLA.webp"
              />
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>

  <!-- DERECHO -->
  <div class="grid grid-cols-1 grid-rows-6 w-[25vh] h-full z-10">
    {#each [5, 6, 7, 18, 19, 20] as number, i}
      {#if number <= currentDay && number <= nextAvailableDay}
        <button
          on:click={() => goto(`/inicio/${number}`)}
          disabled={number !== nextAvailableDay || number > currentDay}
          class="w-full h-full relative"
        >
          <div
            class="w-[8vh] h-[8vh] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          >
            <img
              class="object-contain {nextAvailableDay === number
                ? 'grayscale-img'
                : ''}"
              alt="star"
              src="/images/ELEMENTOS/ESTRELLA.webp"
            />
          </div>
        </button>
      {/if}
    {/each}
  </div>
</div>
