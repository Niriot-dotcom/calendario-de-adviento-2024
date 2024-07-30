// @ts-nocheck
import type { PageLoad } from "./$types";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "$lib/firebase";
import { VianneyCollectionName } from "$lib/constants/DB";

export type VisibleIds = string[];

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
  const q = query(
    collection(db, VianneyCollectionName),
    where("productSection", "==", "Página 1 / Juegos de Edredón"),
    where("pageStatus", "==", "Activa"),
  );
  const querySnapshot = await getDocs(q);
  var pages: any = [];
  querySnapshot.forEach((doc) => {
    pages.push(doc.data());
  });
  pages.sort((a, b) => (a.productOrder > b.productOrder ? 1 : -1));

  // TODO remove
  // pages = [
  //   {
  //     SKU: "88597",
  //     pageTitle: "Mango",
  //     pageSubtitle: "Funda de sillon Niza",
  //     pageCopys: [],
  //     pageResources: [],
  //     pageRelatedProducts: [],
  //   },
  //   {
  //     SKU: "88597",
  //     pageTitle: "Estambul",
  //     pageSubtitle: "Edredon",
  //     pageCopys: [],
  //     pageResources: ["#", "#dde7ce"],
  //     pageRelatedProducts: [],
  //     complSheets: ["88559"],
  //     complCurtains: ["87448"],
  //     complPillowCovers: ["88479"],
  //     complDecoration: ["87376"],
  //   },
  //   {
  //     SKU: "88597",
  //     pageTitle: "Puebla",
  //     pageSubtitle: "Jgo de Cocina",
  //     pageCopys: [],
  //     // pageResources: ["#", "DOBLE", "COMPLEMENTOS"],
  //     // pageResources: ["#", "HORIZONTAL", "COMPLEMENTOS"],
  //     // pageResources: ["#", "VERTICAL", "COMPLEMENTOS"],
  //     // pageResources: ["#", "DOBLE", "VARIANTES"],
  //     // pageResources: ["#", "HORIZONTAL", "VARIANTES"],
  //     pageResources: ["#", "VERTICAL", "VARIANTES"],
  //     pageRelatedProducts: [],
  //     complSheets: ["88559"],
  //     complCurtains: ["87448"],
  //   },
  // ];

  return {
    props: {
      pages,
    },
  };
};
