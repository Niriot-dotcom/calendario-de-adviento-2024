import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
import { writable, type Writable } from "svelte/store";
import { auth } from "$lib/firebase/firebase.client";
import type { USER_SCHEMA } from "$lib/constants/db";

interface IAuthStore {
  isLoading: boolean;
  currentUser: { uid: string; email: string } | null;
  data: USER_SCHEMA;
}

export const AuthStore: Writable<IAuthStore> = writable({
  isLoading: true,
  currentUser: null,
  data: {
    username: "",
    email: "",
    angelitaName: "",
    angelitoName: "",
    lastDay: 0,
  },
});

export const AuthHandlers = {
  signup: async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  },
  login: async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  },
  logout: async () => {
    await signOut(auth);
  },

  // TODO?
  resetPassword: async (email: string) => {
    console.log("WE ARE HERE", email);
    if (!email) {
      console.log("inHERE");
      return;
    }
    await sendPasswordResetEmail(auth, email);
  },
  updatePassword: async (password: string) => {
    await updatePassword(auth.currentUser!, password);
  },
};
