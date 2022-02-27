<script lang="ts">
  //import { onMount } from "svelte";
  import { AceEditor } from "svelte-ace";
  import "brace/mode/c_cpp";
  import "brace/theme/chrome";
  import "brace/ext/language_tools";
  import "brace/snippets/c_cpp";
  //onMount(() => {});

  import { Esercizio, generaEsercizi } from "./esercizi";
  const esercizi: Array<Esercizio> = generaEsercizi("3 A SIA", "2022-03-02");
  import authStore from "./authStore";
  import { consegnaCompito } from "./db";
  // import "JSCPP";
  const options: any = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: false,
  };
  const vc_normal: string =
    "min-height: 25px; background-color: grey; color: azure;";
  const vc_error: string =
    "min-height: 25px; background-color: red; color: yellow;";

  // Import the functions you need from the SDKs you need
  import { initializeApp, getApps, getApp } from "firebase/app";
  import { getFirestore, collection, addDoc } from "firebase/firestore";
  import {
    getAuth,
    getRedirectResult,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8ZJJioIlN-5_QfqV8yNjqPGbBxfVTIY4",
    authDomain: "raccoglicompiti.firebaseapp.com",
    projectId: "raccoglicompiti",
    storageBucket: "raccoglicompiti.appspot.com",
    messagingSenderId: "336748289396",
    appId: "1:336748289396:web:856c25be3b927a289e2021",
    measurementId: "G-K16NLG6KYK",
  };
  const firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(firebaseApp);
  console.log(firebaseApp, db);

  authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
    if (!isLoggedIn && firebaseControlled) {
      //await goto("/login");
    }
  });
  // const analytics = getAnalytics(firebaseApp);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.languageCode = "it";

  const login = () => {
    console.log("Procedura di login");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        studente = result.user;
        authStore.set({
          isLoggedIn: user !== null,
          studente: user,
          firebaseControlled: true,
        });
        console.log(studente);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  let studente = auth.currentUser;

  async function raccolta() {
    const colRef = collection(db, "compito");
    console.log(colRef);
    await addDoc(colRef, {
      nome: nome,
      cognome: cognome,
      email: "",
      istanteConsegna: new Date(),
      punti: 0,
      json: JSON.stringify(ambienti),
    });
    return 0;
  }

  function writeUserData(): void {
    console.log("Invio");
    consegnaCompito(ambienti, studente);
    /*
	  set(ref(db, "compito/" + Date()), {
      cognome: cognome,
      nome: nome,
      email: nome + "." + "cognome" + "@savoiabenincasa.it",
      istanteConsegna: Date(),
      json: JSON.stringify(esercizi),
      punti: 0,
    });*/
  }

  class Ambiente {
    src: string;
    vconsole: string;
    vconsole_style: string;
    indice: number;
    chiaveLocalStorage: string;
    // Per gestione localstorage
    // sporco: boolean;
    constructor(i: number, esercizi: Array<Esercizio>) {
      this.indice = i;
      this.chiaveLocalStorage = "sorgente_" + this.indice;
      let savedSrc = localStorage.getItem(this.chiaveLocalStorage);
      if (savedSrc) {
        this.src = savedSrc;
      } else {
        this.src = esercizi[i].scheletro;
      }
      this.vconsole = "";
      this.vconsole_style = vc_normal;
      // this.sporco = false;
    }
    public esegui(): void {
      this.vconsole = "";
      localStorage.setItem(this.chiaveLocalStorage, this.src);
      try {
        JSCPP.run(this.src, "", {
          stdio: {
            write: (s) => {
              this.vconsole += s;
              console.log(s);
            },
          },
        });
        this.vconsole_style = vc_normal;
      } catch (err) {
        this.vconsole_style = vc_error;
        this.vconsole += err;
      }
      // forza aggiornamenti
      ambienti = ambienti;
    }

    public ripristina(): void {
      this.src = esercizi[this.indice].scheletro;
      this.vconsole = "";
      this.vconsole_style = vc_normal;
      // forza aggiornamenti
      ambienti = ambienti;
    }
  }

  let nome = "";
  let cognome = "";
  let classe = "3A SIA";
  const giorno = "2022-03-02";
  const n = esercizi.length;
  let ambienti: Ambiente[] = new Array(n);
  for (let i = 0; i < n; i++) {
    ambienti[i] = new Ambiente(i, esercizi);
  }

  /*
  let mail_sub;
  let mail_body;
  $: mail_sub = "Compito 3A " + nome + " " + cognome;
  $: mail_body = JSON.stringify(ambienti);
  */
  /*
     <AceEditor
      on:selectionChange={(obj) => console.log(obj.detail)}
      on:paste={(obj) => console.log(obj.detail)}
      on:input={(obj) => console.log(obj.detail)}
      on:focus={() => console.log("focus")}
      on:documentChange={(obj) =>
        console.log(`document change : ${obj.detail}`)}
      on:cut={() => console.log("cut")}
      on:cursorChange={() => console.log("cursor change")}
      on:copy={() => console.log("copy")}
      on:init={(editor) => console.log(editor.detail)}
      on:commandKey={(obj) => console.log(obj.detail)}
      on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
      on:blur={() => console.log("blur")}
      width="100%"
      height="600px"
      lang="c_cpp"
      theme="chrome"
      bind:value={ambienti[indice].src}
      {options}
    />
*/
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
    crossorigin="anonymous"
  />
  <!--script
    src="https://raw.githubusercontent.com/felixhao28/JSCPP/gh-pages/dist/JSCPP.es5.min.js"></script-->
  <script
    src="https://cdn.jsdelivr.net/npm/JSCPP@2.0.6/dist/JSCPP.es5.min.js"></script>
  <title>Compito C/C++</title>
</svelte:head>

<h1>Compito {classe} - {giorno} - C/C++</h1>

{#if studente}
  <h2>2. Giochi numerici di Giovanni Omonovo</h2>

  <p>
    Giovanni è un progettista che vuole costuire un calcolatore programmabile
    che sappia realizzare le operazioni aritmetiche con i numeri naturali.
  </p>
  <p>
    Egli progetta una CPU che include solo tre funzioni primitive per operare
    con i numeri naturali:
  </p>
  <ol>
    <li>
      <pre><code>zero(n)</code></pre>
      che restituisce vero se n = 0,
    </li>
    <li>
      <pre><code>piuUno(n)</code></pre>
      che restituisce n + 1, e
    </li>
    <li>
      <pre><code>menoUno(n)</code></pre>
      che restituisce n - 1 se n &gt; 0.
    </li>
  </ol>

  <p>
    Aggiunge ad un compilatore C++ le istruzioni per il suo linguaggio macchina
    ma è in difficoltà nello scrivere la libreria in C++ per definire le
    seguenti operazioni tra numeri naturali:
  </p>
  <ul>
    <li>
      <pre><code>addizione(n, m)</code></pre>
      , che restituisce n + m,
    </li>
    <li>
      <pre><code>sottrazione(n, m)</code></pre>
      , che restituisce n - m,
    </li>
    <li>
      <pre><code>moltiplicazione(n, m)</code></pre>
      , che restituisce n * m, e
    </li>
    <li>
      <pre><code>divisione(n, m)</code></pre>
      , che restituisce il numero q tale che n = q * m + r, dove 0 &leq; r &lt; m.
    </li>
    <li>
      <pre><code>potenza(n, m)</code></pre>
      , che restituisce n elevato alla m-esima potenza.
    </li>
    <li>
      <pre><code>fattoriale(n)</code></pre>
      , che restituisce il fattoriale di n.
    </li>
    <li>
      <pre><code>Fibonacci(n)</code></pre>
      , che l'n-esimo elemento della successione di Fibonacci.
    </li>
  </ul>

  <p>
    Giovanni scopre di poter estendere le operazioni del suo computer per una
    rappresentazione i numeri in virgola mobile. Riesce a scrivere realizzare le
    operazioni di moltiplicazione e differenza e deve aggiungere il reciproco
    usano una nota formula iterativa.
  </p>

  {#each esercizi as esercizio, indice}
    {#if indice > 1}
      <hr />
    {/if}

    <h3>Es. {indice + 1} -- {esercizio.progetto}</h3>
    <p>{@html esercizio.testo}</p>
    <AceEditor
      width="100%"
      height="600px"
      lang="c_cpp"
      theme="chrome"
      bind:value={ambienti[indice].src}
      {options}
    />

    <button on:click={ambienti[indice].esegui.bind(ambienti[indice])}
      >Esegui</button
    >
    <button on:click={ambienti[indice].ripristina.bind(ambienti[indice])}
      >Ripristina</button
    >
    <pre style={ambienti[indice].vconsole_style}>{ambienti[indice]
        .vconsole}</pre>
  {/each}

  <hr />

  <h2>3. Invia il compito</h2>

  <button on:click={writeUserData}>
    <!--a
      href={`mailto:gionata.massi@savoiabenincasa.it?subject=${mail_sub}&body=${mail_body}`}
	-->
    Invia
    <!--/a-->
  </button>
{:else}
  <p>
    Per visualizzare il compito devi autenticarti con il tuo account Google
    (@savoiabenincasa.it).
  </p>
  <p>Premi il tasto Login per continuare...</p>
  <button on:click={login}>Login</button>
{/if}
