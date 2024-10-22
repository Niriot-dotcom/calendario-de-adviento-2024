import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";
import { AuthStore } from "../stores/AuthStore";
import { COLLECTIONS, type USER_SCHEMA } from "./constants/db";
import { db } from "./firebase/firebase.client";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function emailIsUnused(email: string) {
  // let query = await db.collection('users').where("e-mail", isEqualTo: email).get();
  // const docRef = doc(db, COLLECTIONS.Usuarios, user.uid);
  //     const docSnap = await getDoc(docRef);

  const q = query(
    collection(db, COLLECTIONS.Usuarios),
    where("email", "==", email)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.empty;
}

export function isStarAvailable(i: number) {
  // let currentDay: number;
  // let nextAvailableDay: number;
  // let dataFromUser: USER_SCHEMA;
  // AuthStore.subscribe((curr) => {
  //   dataFromUser = curr?.data;
  //   nextAvailableDay = dataFromUser.lastDay + 1;
  //   currentDay = curr?.currentDay;
  // });
  // return i < currentDay;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
  y?: number;
  x?: number;
  start?: number;
  duration?: number;
};

export const flyAndScale = (
  node: Element,
  params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;

  const scaleConversion = (
    valueA: number,
    scaleA: [number, number],
    scaleB: [number, number]
  ) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;

    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;

    return valueB;
  };

  const styleToString = (
    style: Record<string, number | string | undefined>
  ): string => {
    return Object.keys(style).reduce((str, key) => {
      if (style[key] === undefined) return str;
      return str + `${key}:${style[key]};`;
    }, "");
  };

  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

      return styleToString({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity: t,
      });
    },
    easing: cubicOut,
  };
};
