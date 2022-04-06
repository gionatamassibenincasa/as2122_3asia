<script lang="ts">
  //import { onMount } from "svelte";
  import { AceEditor } from "svelte-ace";
  import "brace/mode/c_cpp";
  import "brace/theme/chrome";
  import "brace/ext/language_tools";
  import "brace/snippets/c_cpp";
  import esercizi from "./esercizi.json";
  import authStore from "./authStore";
  import { consegnaCompito } from "./db";

  import { initializeApp, getApps, getApp } from "firebase/app";
  import { getFirestore, collection, addDoc } from "firebase/firestore";
  import {
    getAuth,
    getRedirectResult,
    signInWithPopup,
    GoogleAuthProvider,
    setPersistence,
    browserSessionPersistence,
    onAuthStateChanged,
  } from "firebase/auth";
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
    Toast,
  } from "sveltestrap";
  const firebaseConfig = {
    apiKey: "AIzaSyB8ZJJioIlN-5_QfqV8yNjqPGbBxfVTIY4",
    authDomain: "raccoglicompiti.firebaseapp.com",
    projectId: "raccoglicompiti",
    storageBucket: "raccoglicompiti.appspot.com",
    messagingSenderId: "336748289396",
    appId: "1:336748289396:web:856c25be3b927a289e2021",
    measurementId: "G-K16NLG6KYK",
  };
  let isLocal = eval('window.location.hostname == "localhost"');
  const firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(firebaseApp);
  authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
    if (!isLoggedIn && firebaseControlled) {
      //await goto("/login");
    }
  });
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    authStore.set({
      isLoggedIn: user !== null,
      studente: user,
      firebaseControlled: true,
    });
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return login();
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  auth.languageCode = "it";

  function login() {
    console.log("Procedura di login");
    if (studente !== null) return;
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        studente = result.user;
        authStore.set({
          isLoggedIn: result.user !== null,
          studente: result.user,
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
  }
  let studente = auth.currentUser;

  const options: any = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: false,
  };
  const vc_normal: string =
    "min-height: 25px; background-color: grey; color: azure;";
  const vc_error: string =
    "min-height: 25px; background-color: red; color: yellow;";

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
  const giorno = "2022-04-06";
  const n = esercizi.length;
  let ambienti: Ambiente[] = new Array(n);
  for (let i = 0; i < n; i++) {
    ambienti[i] = new Ambiente(i, esercizi);
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
  />
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
<Container>
  <Row>
    <Col><h1>Compito {classe} - {giorno} - C/C++</h1></Col>
  </Row>
</Container>
{#if studente || isLocal}
  <Container>
    <Row>
      <Col>
        <h2>Giochi numerici di Giovanni Omonovo</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Giovanni è un progettista che vuole costuire un calcolatore
          programmabile che sappia realizzare le operazioni aritmetiche con i
          numeri naturali.
        </p>
        <p>
          Egli progetta una CPU che include solo tre funzioni primitive per
          operare con i numeri naturali:
        </p>
      </Col>
    </Row>
    <Row>
      <ListGroup>
        <ListGroupItem
          ><pre><code>zero(n)</code></pre>
          che restituisce vero se n = 0,
        </ListGroupItem>
        <ListGroupItem
          ><pre><code>piuUno(n)</code></pre>
          che restituisce n + 1, e</ListGroupItem
        >
        <ListGroupItem
          ><pre><code>menoUno(n)</code></pre>
          che restituisce n - 1 se n &gt; 0.</ListGroupItem
        >
      </ListGroup>
    </Row>

    <Row>
      <Col>
        Aggiunge ad un compilatore C++ le istruzioni per il suo linguaggio
        macchina ma è in difficoltà nello scrivere la libreria in C++ per
        definire le seguenti operazioni tra numeri naturali:
      </Col>
      <ListGroup>
        <ListGroupItem>
          <pre><code>addizione(n, m)</code></pre>
          , che restituisce n + m,
        </ListGroupItem>
        <ListGroupItem>
          <pre><code>sottrazione(n, m)</code></pre>
          , che restituisce n - m,
        </ListGroupItem>
        <ListGroupItem>
          <pre><code>moltiplicazione(n, m)</code></pre>
          , che restituisce n * m, e
        </ListGroupItem>
        <ListGroupItem>
          <pre><code>divisione(n, m)</code></pre>
          , che restituisce il numero q tale che n = q * m + r, dove 0 &leq; r &lt;
          m.
        </ListGroupItem>
        <ListGroupItem>
          <pre><code>potenza(n, m)</code></pre>
          , che restituisce n elevato alla m-esima potenza.
        </ListGroupItem>
        <ListGroupItem>
          <pre><code>fattoriale(n)</code></pre>
          , che restituisce il fattoriale di n.
        </ListGroupItem>
        <ListGroupItem>
          <pre><code>Fibonacci(n)</code></pre>
          , che restituisce l'n-esimo elemento della successione di Fibonacci.
        </ListGroupItem>
      </ListGroup>
    </Row>
    <Row>
      <Col>
        Giovanni scopre di poter estendere le operazioni del suo computer per
        una rappresentazione i numeri in virgola mobile. Riesce a scrivere
        realizzare le operazioni di moltiplicazione e differenza e deve
        aggiungere il reciproco usando una nota formula iterativa.
      </Col>
      <ListGroup>
        <ListGroupItem>
          <pre><code>float reciproco(float x)</code></pre>
          , che calcola il reciproco di x.
        </ListGroupItem>
      </ListGroup>
    </Row>
    <Row>
      <Col>
        Giovanni scopre anche il metodo di Erone di Alessandria per il calcolo
        della radice in virgola mobile e la fornisce come metodo di libreria per
        tale calcolo.
      </Col>
      <ListGroup>
        <ListGroupItem>
          <pre><code>float radq(float x)</code></pre>
          , che calcola la radice quadrata di x.
        </ListGroupItem>
      </ListGroup>
    </Row>
  </Container>
  <Container>
    {#each esercizi as esercizio, indice}
      <Row>
        <Col>
          <Card class="mb-3">
            <CardHeader>
              <CardTitle
                >Es. {indice + 1} &mdash; {@html esercizio.progetto.substr(
                  3,
                  esercizio.progetto.length - 7
                )}</CardTitle
              >
            </CardHeader>
            <CardBody>
              <CardSubtitle>{@html esercizio.testo}</CardSubtitle>
              <CardText>
                <AceEditor
                  width="100%"
                  height="600px"
                  lang="c_cpp"
                  theme="chrome"
                  bind:value={ambienti[indice].src}
                  {options}
                />
              </CardText>

              <Button
                color="danger"
                on:click={ambienti[indice].esegui.bind(ambienti[indice])}
                >Esegui</Button
              >
              <Button
                color="warning"
                on:click={ambienti[indice].ripristina.bind(ambienti[indice])}
                >Ripristina</Button
              >
            </CardBody>
            <CardFooter
              ><pre style={ambienti[indice].vconsole_style}>{ambienti[indice]
                  .vconsole}</pre></CardFooter
            >
          </Card>
        </Col>
      </Row>
    {/each}
  </Container>

  <Container>
    <Row>
      <h2>Invia il compito</h2>
    </Row>
    <Row>
      <Button color="primary" on:click={consegnaCompito(ambienti, studente)}
        >Consegna</Button
      >
    </Row>
    <!--a
        href={`mailto:gionata.massi@savoiabenincasa.it?subject=${mail_sub}&body=${mail_body}`}
    -->
  </Container>
{:else}
  <p>
    Per visualizzare il compito devi autenticarti con il tuo account Google
    (@savoiabenincasa.it).
  </p>
  <p>Premi il tasto Login per continuare...</p>
  <button on:click={login}>Login</button>
{/if}

<style>
  pre,
  code {
    display: inline;
    color: rgb(255, 0, 127);
  }
</style>
