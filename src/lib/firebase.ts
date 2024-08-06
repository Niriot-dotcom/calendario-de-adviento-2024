import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyC1sdvih0LN8KqrQ4D4_EofUXVMJ8LjOEw",
  authDomain: "adviento-49305.firebaseapp.com",
  projectId: "adviento-49305",
  storageBucket: "adviento-49305.appspot.com",
  messagingSenderId: "401036873005",
  appId: "1:401036873005:web:6db8753a086240f7bc17a4",
  measurementId: "G-R4E2QD2BJ5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
    }
  };

  return {
    subscribe,
    logout,
  };
}

export const user = userStore();
