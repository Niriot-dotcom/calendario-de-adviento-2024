<script lang="ts">
  import type { PageData } from "./$types";
  import NavigatorMenu from "$lib/components/navigatorMenu.svelte";
  import { Catalogs } from "$lib/constants/globalTypes";
  import EntradaVianney from "$lib/templates/EntradaVianney.svelte";
  import Sublinea from "$lib/templates/Sublinea.svelte";
  import Almohadas from "$lib/templates/Almohadas.svelte";
  import ProtectoresDeColchon from "$lib/templates/ProtectoresDeColchon.svelte";
  import VariantesDeColor from "$lib/templates/VariantesDeColor.svelte";
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

  const groups: Record<string, []> = data.props.groupedPages;
  const { pillowsPages, mattressProtectorsPages } = data.props;
</script>

<VisibleDetector on:visibleChange={handleVisibleChange} />
<!-- entrada -->
<EntradaVianney
  backgroundVideo="../videos/vianney/Entrada-P6-Basicos.mp4"
  textImage="/images/vianney/Entrada-P6-Basicos.svg"
  storyMainPhrase="Tender la cama con su mamá"
  storyCopy="le despierta las mismas emociones de la infancia aún con el paso del tiempo."
  backgroundColor="#eaf3ed"
/>

<Almohadas pages={pillowsPages} {handleImageClick} />

<!-- render pages -->
{#each Object.keys(groups) as group, i}
  {#if groups[group][0].pageTemplate == "Sublinea"}
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

<ProtectoresDeColchon pages={mattressProtectorsPages} {handleImageClick} />

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
