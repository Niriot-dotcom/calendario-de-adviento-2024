<script lang="ts">
  import "../app.css";

  // onMount(() => {
  //       let vendedoraId = $page.url.searchParams.get('adi');
  //       loadCart();
  //       loadUser();; // Carga el usuario al inicio
  //       loadVendedoraFromUrl(vendedoraId);
  //       mounted = true;
  //   });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <link rel="stylesheet" href="https://use.typekit.net/mmk2zvp.css" />
  <style>
    .cart-sidebar {
      opacity: 1 !important;
    }
  </style>

  <meta property="og:image" content="/images/share-image.png" />
</svelte:head>

<slot />
