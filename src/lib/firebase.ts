import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyApmPfeaM7obHHx8ytLuQqpQLrGetZ5Do4",
  authDomain: "mx-vianney-001.firebaseapp.com",
  databaseURL: "https://mx-vianney-001.firebaseio.com",
  projectId: "mx-vianney-001",
  storageBucket: "mx-vianney-001.appspot.com",
  messagingSenderId: "676687949327",
  appId: "1:676687949327:web:839027a1a7e7cb412f7d7a",
  measurementId: "G-CZLXZFJJJZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
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
