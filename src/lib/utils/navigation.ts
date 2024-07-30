import {
  getNextPage,
  getPreviousPage,
} from "$lib/components/currentCatalogPage";

export function getCurrentCatalog() {
  if (window) {
    const path = window.location.pathname;
    const segments = path.split("/");
    return segments[1];
  }
}

export function navigateToNextPage() {
  if (typeof gtag !== "undefined") {
    gtag("event", "next_page", {
      event_category: "navigation",
      event_label: "next_page",
    });
  }
  let currentUrl = window.location.pathname;
  let nextPage = getNextPage(currentUrl);
  let baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  window.location.href = `${window.location.origin}${baseUrl}/${nextPage}`;
}

export function navigateToPreviousPage() {
  if (typeof gtag !== "undefined") {
    gtag("event", "prev_page", {
      event_category: "navigation",
      event_label: "prev_page",
    });
  }
  let currentUrl = window.location.pathname;
  let previousPage = getPreviousPage(currentUrl);
  let baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  window.location.href = `${window.location.origin}${baseUrl}/${previousPage}`;
}
