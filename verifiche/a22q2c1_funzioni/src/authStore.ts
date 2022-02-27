import { writable } from "svelte/store";
// import { UserInfo } from "firebase/app";

const authStore = writable<{
  isLoggedIn: boolean;
  studente?: any;
  firebaseControlled: boolean;
}>({
  isLoggedIn: false,
  firebaseControlled: false,
});

export default {
  subscribe: authStore.subscribe,
  set: authStore.set,
};
