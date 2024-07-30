<script lang="ts">
  import type { PageData } from "./$types";
  import NavigatorMenu from "$lib/components/navigatorMenu.svelte";
  import { Catalogs, type DatabasePage } from "$lib/constants/globalTypes";
  import EntradaVianney from "$lib/templates/EntradaVianney.svelte";
  import EdredonVoga from "$lib/templates/EdredonVoga.svelte";
  import JuegoDeEdredon from "$lib/templates/JuegoDeEdredon.svelte";
  import EdredonNovo from "$lib/templates/EdredonNovo.svelte";
  import EdredonNuut from "$lib/templates/EdredonNuut.svelte";
  import Cobertor from "$lib/templates/Cobertor.svelte";
  import AmbienteConMiniambiente from "$lib/templates/AmbienteConMiniambiente.svelte";
  import VariantesDeColor from "$lib/templates/VariantesDeColor.svelte";
  import Sublinea from "$lib/templates/Sublinea.svelte";
  import VisibleDetector from "$lib/components/visibleDetector.svelte";

  let visibleIds: string[] = [];
  function handleVisibleChange(event: any) {
    visibleIds = event.detail;
  }
  let relatedProducts: string[] = [];
  let selectedProduct: null | string = null;
  let showPopup = false;

  export let data: PageData;
  const handleImageClick = (sku: string, relatedProds: string[]) => {
    selectedProduct = sku;
    relatedProducts = relatedProds;
  };

  const groups: Record<string, DatabasePage[]> = data.props.groupedPages;
</script>

<VisibleDetector on:visibleChange={handleVisibleChange} />
<!-- entrada -->
<EntradaVianney
  backgroundVideo="../videos/vianney/Entrada-P7-Complementos.mp4"
  textImage="/images/vianney/Entrada-P7-Complementos.svg"
  storyMainPhrase="También está la sala, donde Luisa jugaba horas"
  storyCopy="y ahora sus hijos siguen disfrutando de ese espacio mientras juegan con su imaginación."
  backgroundColor="#e7ccd0"
/>

<!-- render pages -->
{#each Object.keys(groups) as group, i}
  {#if groups[group][0].pageTemplate == "AmbienteConMiniambiente"}
    {#each groups[group] as juego, i}
      <AmbienteConMiniambiente page={juego} {handleImageClick} />
    {/each}
  {:else if groups[group][0].pageTemplate == "Sublinea"}
    <Sublinea groupPages={groups[group]} title={group} {handleImageClick} />
  {:else if groups[group][0].pageTemplate == "VariantesDeColor"}
    <VariantesDeColor
      bind:visibleIds
      groupPages={groups[group]}
      title={group}
      {handleImageClick}
    />
  {/if}
{/each}

<NavigatorMenu
  catalog={Catalogs.VIANNEY}
  bind:relatedProducts
  bind:visibleIds
  bind:showPopup
  bind:selectedProduct
/>

<div>
  <script defer src="../js/webflowPage.js"></script>
  <script
    defer
    src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=643738a971c1d64a8bd7a90a"
    type="text/javascript"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"
  ></script>
  <script defer src="https://unpkg.com/split-type"></script>
  <script
    defer
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
  ></script>
  <script
    defer
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"
  ></script>
  <script defer src="../js/animations.js" type="text/javascript"></script>
  <script defer src="../js/webflow.js" type="text/javascript"></script>
</div>
