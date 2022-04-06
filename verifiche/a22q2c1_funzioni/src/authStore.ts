import { writable } from "svelte/store";
// import { UserInfo } from "firebase/app";

const authStore = writable<{
  isLoggedIn: boolean;
  studente?: any;
  firebaseControlled: boolean;
}>({
  isLoggedIn: eval('window.location.hostname == "localhost"'),
  firebaseControlled: eval('window.location.hostname == "localhost"'),
});

export default {
  subscribe: authStore.subscribe,
  set: authStore.set,
};
