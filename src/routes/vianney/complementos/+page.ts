// @ts-nocheck
import type { PageLoad } from "./$types";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "$lib/firebase";
import { VianneyCollectionName } from "$lib/constants/DB";

export type VisibleIds = string[];

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
  const q = query(
    collection(db, VianneyCollectionName),
    where("productSection", "==", "Página 7 / Complementos"),
    where("pageStatus", "==", "Activa"),
  );
  const querySnapshot = await getDocs(q);
  var pages: any = [];
  querySnapshot.forEach((doc) => {
    pages.push(doc.data());
  });
  pages.sort((a, b) => (a.productOrder > b.productOrder ? 1 : -1));

  let groupedPages = {};
  for (const page of pages) {
    if (page.pageTemplate == "") continue;

    if (groupedPages[page.productType] === undefined) {
      groupedPages[page.productType] = [page];
    } else {
      groupedPages[page.productType].push(page);
    }
  }

  return { props: { groupedPages } };
};
