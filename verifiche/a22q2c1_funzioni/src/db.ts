import firebase from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

export type Esercizio = {
  progetto: string;
  scheletro: string;
  testo: string;
  soluzione: string;
  punteggio: number;
};

export type Compito = {
  nome: string;
  email: string;
  istanteConsegna?: Timestamp;
  punti: number;
  json: string;
};

export const consegnaCompito = async (compito: Compito, user: any) => {
  console.table(compito);
  console.table({ displayName: user.displayName, email: user.email });
  const consegna: Compito = {
    nome: user.displayName,
    email: user.email,
    istanteConsegna: Timestamp.now(),
    punti: 0,
    json: JSON.stringify(compito),
  };
  const db = await getFirestore();
  const compitoRef = await collection(db, "compito");
  console.log(compitoRef);
  await addDoc(compitoRef, consegna);
  alert("Compito consegnato");

  return compitoRef;
};
