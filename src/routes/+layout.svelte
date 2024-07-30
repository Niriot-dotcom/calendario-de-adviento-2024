
  
  <script lang="ts">
     import "../app.css"
     import { loadCart } from '$lib/components/cartLogic.js';
     import { loadVendedoraFromUrl } from '$lib/components/vendedoraLogic.js';
     import { loadUser } from '$lib/components/userLogic.js';
     import { onMount } from "svelte";

     import { page } from '$app/stores';
     import type { Page } from '$app/types';
  // get url params from page
  let mounted = false;

  $: {
 const page_path = ($page as Page).route.id;

 if (mounted && window.gtag) {
 gtag('config', 'G-EJZYDKKDJK', { page_path });
 }
 }


  onMount(() => {
        let vendedoraId = $page.url.searchParams.get('adi');
        loadCart();
        loadUser();; // Carga el usuario al inicio
        loadVendedoraFromUrl(vendedoraId);
        mounted = true;
    });
  </script>
<svelte:head>
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EJZYDKKDJK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EJZYDKKDJK');
</script>
<!-- Hotjar Tracking Code for Catálogos Web Vianney -->
<script>
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3795602,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
<!-- script message bird -->
<!-- <script>  var MessageBirdChatWidgetSettings = {     widgetId: 'a013423b-56c3-4d55-8d45-40bccefaa36e',     initializeOnLoad: true,   };  !function(){"use strict";if(Boolean(document.getElementById("live-chat-widget-script")))console.error("MessageBirdChatWidget: Snippet loaded twice on page");else{var e,t;window.MessageBirdChatWidget={},window.MessageBirdChatWidget.queue=[];for(var i=["init","setConfig","toggleChat","identify","hide","on","shutdown"],n=function(){var e=i[d];window.MessageBirdChatWidget[e]=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];window.MessageBirdChatWidget.queue.push([[e,i]])}},d=0;d<i.length;d++)n();var a=(null===(e=window)||void 0===e||null===(t=e.MessageBirdChatWidgetSettings)||void 0===t?void 0:t.widgetId)||"",o=function(){var e,t=document.createElement("script");t.type="text/javascript",t.src="https://livechat.messagebird.com/bootstrap.js?widgetId=".concat(a),t.async=!0,t.id="live-chat-widget-script";var i=document.getElementsByTagName("script")[0];null==i||null===(e=i.parentNode)||void 0===e||e.insertBefore(t,i)};"complete"===document.readyState?o():window.attachEvent?window.attachEvent("onload",o):window.addEventListener("load",o,!1)}}();</script> -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link rel="stylesheet" href="https://use.typekit.net/mmk2zvp.css">
    <style>
      .cart-sidebar{
        opacity: 1 !important;
      }
    </style>

  <meta property="og:image" content="/images/share-image.png" />
</svelte:head>



<slot/>
