<script lang="ts">
  import SearchPallete from "$lib/components/searchPallete.svelte";
  import PopupCompra from "$lib/components/popupCompra.svelte";
  import Footer from "$lib/components/footer.svelte";
  import { user } from "$lib/firebase";
  import { fly, fade } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  import PopupAuth from "$lib/components/popupAuth.svelte";
  import CatalogDetail from "$lib/components/catalogDetail.svelte";
  import {
    cartStore,
    removeFromCart,
    updateQuantity,
  } from "$lib/components/cartLogic.js";
  import { onMount } from "svelte";
  import {
    CATALOGS_DESCRIPTIONS,
    CATALOGS_NAMES,
    URLS,
  } from "$lib/constants/strings";

  let showCart = false;
  let showCatalogDetail = false;
  let catalogDetail = "invierno";
  let cartItems = [];
  let pageInfo: string = "";
  let loggedAdi: any;
  let mounted = false;
  onMount(() => {
    loggedAdi = localStorage.getItem("adi");
    mounted = true;
  });

  cartStore.subscribe((value) => {
    cartItems = value;
  });
  $: subtotal = cartItems.reduce(
    (acc, item) => acc + item.price.basePrice * item.quantity,
    0,
  );

  function toggleCart() {
    if (typeof gtag !== "undefined") {
      gtag("event", "open_cart", {
        event_category: "navigation",
        event_label: "cart",
      });
    }

    showCart = !showCart;
  }

  function handleRemove(productId) {
    removeFromCart(productId);
  }

  function handleQuantityChange(productId, event) {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(productId, newQuantity);
  }

  $: subtotal = cartItems.reduce(
    (acc, item) => acc + item.price.basePrice * item.quantity,
    0,
  );
  // number of items in cart

  function formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // No decimales
      maximumFractionDigits: 0, // No decimales
    }).format(price);
  }

  let compra = false;

  function handleCompra() {
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", {
        send_to: "G-EJZYDKKDJK",
        value: subtotal,
        currency: "MXN",
      });
    }
    showCart = false;
    compra = true;
  }

  function handleShowCatalogDetail(catalog) {
    showCatalogDetail = !showCatalogDetail;
    catalogDetail = catalog;
  }

  let mobileMenuOpen = false;
  function handleOpenMenuMobile() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  let searchPalleteOpen = false;
  function handleOpenSearchPallete() {
    if (typeof gtag !== "undefined") {
      gtag("event", "search", {
        event_category: "search",
        event_label: "search_query",
      });
    }
    searchPalleteOpen = !searchPalleteOpen;
  }

  // Animacion de menu
  let desktopMenuOpen = false;
  function handleOpenMenuDesktop() {
    desktopMenuOpen = true; // Open the menu

    setTimeout(() => {
      desktopMenuOpen = false; // Close the menu after 5 seconds
    }, 5000);
  }

  let popupAuthOpen = false;
  function handleOpenPopupAuth() {
    if (typeof gtag !== "undefined") {
      gtag("event", "open_login", {
        event_category: "search",
        event_label: "login_popup",
      });
    }
    if (!$user) {
      // If the user is not logged in, toggle the auth popup
      popupAuthOpen = !popupAuthOpen;
    } else if (desktopMenuOpen) {
      // If the user is logged in and the desktop menu is open, close the desktop menu
      popupAuthOpen = !popupAuthOpen;
      desktopMenuOpen = false;
    } else {
      // If the user is logged in and the desktop menu is not open, open the desktop menu
      handleOpenMenuDesktop();
    }
  }

  function handleOpenPopupAuthMobile() {
    if (typeof gtag !== "undefined") {
      gtag("event", "open_login", {
        event_category: "search",
        event_label: "login_popup",
      });
    }
    popupAuthOpen = !popupAuthOpen;
    mobileMenuOpen = false;
  }

  async function logout() {
    try {
      await user.logout();
      // Sesión cerrada correctamente
      desktopMenuOpen = false; // Close t
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
    }
  }
</script>

<svelte:head>
  <title>Catálogos Web | Vianney</title>
  <meta property="og:image" content="/images/share-image.png" />
</svelte:head>

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
-->
<div class="min-h-full">
  <!--
    When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars

    Menu open: "fixed inset-0 z-40 overflow-y-auto", Menu closed: ""
  -->
  <header
    class="bg-white shadow-sm lg:static lg:overflow-y-visible ring-1 ring-gray-200"
    style="position: sticky; top: 0; width: 100vw; max-width:100% !important; left: 0; z-index: 10;"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12"
      >
        <div
          class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden"
        >
          <!-- Mobile menu button -->
          <button
            on:click={handleOpenMenuMobile}
            type="button"
            class="relative mr-2 inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vianney-500"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open menu</span>

            {#if !mobileMenuOpen}
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            {:else}
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            {/if}
          </button>
        </div>
        <div
          class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2 py-2"
        >
          <div class="flex items-center">
            <a href="/" class="flex flex-row items-center align-middle">
              <img src="../images/favicon.png" class="h-10 w-10" alt="" />
              <h2
                class="ml-4 pr-3 sm:pr-0 block text-base font-semibold text-gray-900"
              >
                Catálogos Web
              </h2>
            </a>
          </div>
        </div>
        <div class="min-w-0 sm:flex-1 md:px-8 lg:px-0 xl:col-span-8">
          <div
            class="flex items-center px-0 sm:px-6 py-2 sm:py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0"
          >
            <div class="w-full">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <svg
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <!-- <button
                  on:click={handleOpenSearchPallete}
                  id="search"
                  class="block sm:w-full w-10 min-h-[44px] sm:min-h-0 cursor-pointer text-left truncate rounded-xl border-0 bg-white py-1.5 pl-10 pr-1 sm:pr-3 ring-1 ring-inset ring-white sm:ring-gray-300 text-gray-400 text-base sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vianney-500 focus:bg-gray-100"
                >
                  <span class="hidden sm:block">Buscar</span>
                </button> -->
              </div>
            </div>
          </div>
        </div>

        <div
          class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-2"
        >
          <!-- Profile dropdown -->
          <div class="relative ml-2 flex-shrink-0">
            <div>
              <button
                on:click={handleOpenPopupAuth}
                type="button"
                class="relative inline-flex items-center whitespace-nowrap rounded-xl px-2 py-2 text-sm font-semibold text-vianney-600 hover:bg-gray-100 sm:px-3"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <!-- Placeholder icon, show/hide based on listbox state. -->
                <svg
                  class="h-6 w-6 flex-shrink-0 text-gray-300 sm:-ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                    clip-rule="evenodd"
                  />
                </svg>
                <!-- if user is logged in show the email -->
                <span class="hidden sm:ml-2 max-w-[140px] sm:truncate sm:block"
                  >{$user ? $user.email : "Iniciar sesión"}</span
                >
              </button>
            </div>

            {#if desktopMenuOpen}
              <div
                in:fly={{ y: -10, duration: 300, easing: cubicOut }}
                out:fly={{ y: -10, duration: 300, easing: cubicIn }}
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <button
                  on:click={handleOpenPopupAuth}
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0">Administrar perfil</button
                >

                <button
                  on:click={logout}
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2">Cerrar sesión</button
                >
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    {#if mobileMenuOpen}
      <nav
        in:fly={{ y: -10, duration: 300, easing: cubicOut }}
        out:fly={{ y: -10, duration: 300, easing: cubicIn }}
        class="lg:hidden"
        aria-label="Global"
      >
        <div
          class="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4 text-gray-700"
        >
          <a
            href="/"
            aria-current="page"
            class="bg-vianney-400 text-vianney-600 block rounded-md py-2 px-3 text-base font-medium"
            >Catálogos</a
          >
          <button
            on:click={handleOpenPopupAuthMobile}
            class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
            >{$user ? "Administrar perfil" : "Iniciar sesión"}</button
          >
          <button
            on:click={toggleCart}
            class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
            >Carrito</button
          >
          <a
            href="#"
            class="hover:bg-gray-50 hidden rounded-md py-2 px-3 text-base font-medium"
            >Decoradora IA</a
          >
        </div>
        <div class="border-t hidden border-gray-200 pt-4">
          <div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
            <div class="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class=" text-gray-700 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                />
              </svg>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">
                Mis Colecciones
              </div>
            </div>
          </div>
          <div class="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >Favoritos</a
            >
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >Recámara</a
            >
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >Sala</a
            >
          </div>
        </div>
      </nav>
    {/if}
  </header>

  <div class=" pt-4 sm:pt-10 pb-6">
    <div
      class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8"
    >
      <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
        <nav aria-label="Sidebar" class="sticky top-4 divide-y divide-gray-300">
          <div class="space-y-1 pb-8">
            <!-- Current: "bg-gray-200 text-gray-900", Default: "text-gray-700 hover:bg-gray-50" -->
            <a
              href="#"
              class="bg-vianney-400 text-vianney-600 group flex items-center rounded-md px-3 py-2 text-sm font-medium"
              aria-current="page"
            >
              <svg
                class="text-vianney-600 -ml-1 mr-3 h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <span class="truncate">Catálogos</span>
            </a>

            <button
              on:click={handleOpenPopupAuthMobile}
              class="text-gray-700 w-full hover:bg-gray-100 group flex items-center rounded-md px-3 py-2 text-sm font-medium"
            >
              <svg
                class="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="truncate text-gray-700"
                >{$user ? "Administrar perfil" : "Iniciar sesión"}</span
              >
            </button>

            <button
              on:click={toggleCart}
              class="text-gray-700 w-full hover:bg-gray-100 group flex items-center rounded-md px-3 py-2 text-sm font-medium"
            >
              <svg
                class="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke=""
                aria-hidden="true"
              >
                <g>
                  <path
                    id="Icon"
                    d="M3 3.7395H5L5.4 5.7395M7 13.7395H17L21 5.7395H5.4M7 13.7395L5.4 5.7395M7 13.7395L4.70711 16.0324C4.07714 16.6624 4.52331 17.7395 5.41421 17.7395H17M17 17.7395C15.8954 17.7395 15 18.6349 15 19.7395C15 20.8441 15.8954 21.7395 17 21.7395C18.1046 21.7395 19 20.8441 19 19.7395C19 18.6349 18.1046 17.7395 17 17.7395ZM9 19.7395C9 20.8441 8.10457 21.7395 7 21.7395C5.89543 21.7395 5 20.8441 5 19.7395C5 18.6349 5.89543 17.7395 7 17.7395C8.10457 17.7395 9 18.6349 9 19.7395Z"
                    stroke="#94a3b8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <span class="truncate">Carrito</span>
            </button>

            <!--
            <a href="#" class="text-gray-700 hover:bg-gray-100 group flex items-center rounded-md px-3 py-2 text-sm font-medium">
              <svg class="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              
              <span class="truncate">Decoradora IA</span>
            </a>-->
          </div>
          <!--
          <div class="pt-10">
            <p class="px-3 text-sm font-medium text-gray-500" id="communities-headline">Mis Colecciones</p>
            <div class="mt-3 space-y-1" aria-labelledby="communities-headline">
              <a href="#" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span class="truncate">Favoritos</span>
              </a>
              <a href="#" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span class="truncate">Recámara</span>
              </a>
              <a href="#" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span class="truncate">Comedor</span>
              </a>
              <a href="#" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span class="truncate">Sala</span>
              </a>
              <a href="#" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span class="truncate">Cocina</span>
              </a>
              <a href="#" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span class="truncate">Estudio</span>
              </a>
              <a href="#" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span class="truncate">Jardín</span>
              </a>
              <a href="#" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                <span class="truncate">Baño</span>
              </a>
            </div>
          </div>
          -->
        </nav>
      </div>
      <main class="lg:col-span-9 xl:col-span-10">
        <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
        <div class="bg-white">
          <div class="mx-auto max-w-2xl sm:px-4 lg:max-w-7xl lg:px-4">
            <h2 id="products-heading" class="sr-only">Catálogos Web</h2>

            <div
              class="grid grid-cols-2 px-4 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 pb-12"
            >
              {#each CATALOGS_NAMES as catalog}
                <a
                  on:click|preventDefault={() =>
                    handleShowCatalogDetail(catalog)}
                  href={CATALOGS_DESCRIPTIONS[catalog].url}
                  data-sveltekit-reload
                  class="group p-2 bg-white rounded-xl"
                  style="box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 8px;"
                >
                  <div
                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2"
                  >
                    <img
                      src={CATALOGS_DESCRIPTIONS[catalog].image}
                      alt=""
                      class="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div
                    class="mt-4 px-1 flex items-center justify-between text-base font-medium text-gray-900"
                  >
                    <h3>
                      {CATALOGS_DESCRIPTIONS[catalog].title}
                      {CATALOGS_DESCRIPTIONS[catalog].year}
                    </h3>
                    <p class="font-bold px-1 text-vianney-600">→</p>
                  </div>
                  <p class="mb-1 px-1 text-sm text-vianney-600">Ver catálogo</p>
                </a>
              {/each}

              <!-- More products... -->
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>

<Footer />
<CatalogDetail bind:showCatalogDetail bind:catalogDetail />

<PopupCompra bind:showCompra={compra} />
<PopupAuth bind:showLogin={popupAuthOpen} />

<!-- SEARCH WITH ALGOLIA -->
<div class="{searchPalleteOpen ? 'block' : 'hidden'} pointer-events-none">
  <div
    class="{searchPalleteOpen
      ? 'opacity-100'
      : 'opacity-0'} transition-opacity ease duration-500 pointer-events-auto"
  >
    <SearchPallete bind:showSearch={searchPalleteOpen} />
  </div>
</div>

<div>
  <style>
    .borderDiv {
      display: none !important;
    }
  </style>
</div>

{#if showCart}
  <div
    class="relative"
    style="z-index: 900;"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0"></div>

    <div class="fixed inset-0 overflow-hidden">
      <div
        class="absolute inset-0 overflow-hidden"
        transition:fade={{ duration: 500 }}
        style="background-color: rgba(0, 0, 0, 0.5);"
      >
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
        >
          <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
          <div class="pointer-events-auto w-screen max-w-md">
            <div
              transition:fly={{ x: 400, duration: 500 }}
              class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
            >
              <div class="px-6 pt-6 py-4">
                <div class="flex items-start justify-between">
                  <h2
                    class="text-lg font-semibold leading-6 text-gray-900"
                    id="slide-over-title"
                  >
                    Carrito
                  </h2>
                  <div class="ml-3 flex h-7 items-center">
                    <button
                      on:click={toggleCart}
                      type="button"
                      class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-vianney-500"
                    >
                      <span class="absolute -inset-2.5"></span>
                      <span class="sr-only">Close panel</span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6"
              >
                <div>
                  <dl class="space-y-4">
                    <div class="flex items-center justify-between">
                      <dt class="text-base font-medium text-gray-700">
                        Subtotal
                      </dt>
                      <dd class="ml-4 text-base font-medium text-gray-700">
                        {formatPrice(subtotal)}
                      </dd>
                    </div>
                  </dl>
                  <p class="mt-1 text-sm text-gray-500">
                    {loggedAdi
                      ? "Los detalles de tu pedido seran enviados a tu ADI."
                      : "Te enviaremos a vianney.com.mx para terminar tu pedido."}
                  </p>
                </div>
                <div class="">
                  <div class="mt-6">
                    <button
                      on:click={handleCompra}
                      type="submit"
                      class="w-full rounded-md border border-transparent bg-vianney-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-vianney-700 focus:outline-none focus:ring-2 focus:ring-vianney-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >{loggedAdi
                        ? "Hacer pedido a mi ADI"
                        : "Comprar ahora"}</button
                    >
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-200">
                <div class="px-6">
                  <!-- Tab component -->
                  <nav class="-mb-px flex justify-center space-x-6">
                    <!-- Current: "border-vianney-500 text-vianney-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                    <span
                      class="border-vianney-500 text-vianney-600 whitespace-nowrap border-b-2 px-1 pb-2 text-sm font-medium"
                      >Articulos en el carrito</span
                    >
                  </nav>
                </div>
              </div>
              <ul
                role="list"
                class="divide-y divide-gray-200 border-b border-gray-200 px-4 w-full overflow-y-auto"
              >
                {#each cartItems as item (item.product.id)}
                  <li class="flex py-2 sm:py-6 cursor-pointer align-middle">
                    <!-- Puedes ajustar las rutas de las imágenes según la estructura de tu objeto -->
                    <div class="flex-shrink-0">
                      <img
                        src="{URLS.tienda}{item.product.Id}.jpg"
                        alt={item.product.Name}
                        class="h-14 w-14 rounded-md object-cover object-center"
                      />
                    </div>
                    <div class="ml-2 flex flex-1 flex-col sm:ml-2">
                      <div>
                        <div class="flex justify-between">
                          <div class="flex" style="flex-direction: column">
                            <div
                              class="font-medium text-gray-700 hover:text-gray-800 text-sm capitalize mr-2"
                            >
                              {item.product.Name}
                              {item.product.VariantProduct
                                ? "/ " + item.product.VariantProduct
                                : ""}
                            </div>
                            <select
                              bind:value={item.quantity}
                              on:change={(event) =>
                                handleQuantityChange(item.product.id, event)}
                              style="max-width: 40px"
                              class="rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-vianney-500 focus:outline-none focus:ring-1 focus:ring-vianney-500 sm:text-sm"
                            >
                              <option
                                style="display: none;"
                                selected
                                value={item.quantity}>{item.quantity}</option
                              >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                            </select>
                          </div>
                          <div class="mt-4 sm:mt-0">
                            <div class="absolute right-0 top-0"></div>
                            <div
                              id="remove-btn"
                              class="px-1 py-1 mr-2 text-gray-500 hover:bg-gray-100 rounded-sm"
                              style="max-height: 32px;"
                              on:click={() => handleRemove(item.product.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
