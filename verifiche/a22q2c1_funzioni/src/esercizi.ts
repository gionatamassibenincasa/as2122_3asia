//import { read } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";



export interface Esercizio {
  progetto: string;
  scheletro: string;
  testo: string;
  soluzione: string;
}

export const generaEsercizi = function (
  classe: string,
  giorno: string
): Array<Esercizio> {
  let eserciziMarkdown: Array<Esercizio> = [
    {
      progetto:
        "Addizione - usare solo le tre primitive zero, piuUno e menoUno",
      scheletro: `/** Addizione
 * @autore: COGNOME NOME -- ${classe}
 * @data: ${giorno}
 */
#include <iostream>
using namespace std;

int addizione(int n, int m);
bool testAddizione();
int zero(int n);
int piuUno(int n);
int menoUno(int n);

int main() {
  if (testAddizione())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}

bool testAddizione() {
  for (int i = 0; i < 10; i++) {
    if (addizione(i, 0) != i)
      return false;
    if (addizione(i, 1) != i + 1)
      return false;
    if (addizione(i, 4) != i + 4)
      return false;
  }
  return true;
}

int zero(int n) { return n == 0; }

int piuUno(int n) { return n + 1; }

int menoUno(int n) { return n - 1; }

int addizione(int n, int m) {
  if (zero(...))
    return ...;
  else
    return addizione(piuUno(...), ...(...));
}
`,
      testo: `Realizza la funzione \`int addizione(int n, int m)\` sapendo che
$n \\oplus m = 
\\begin{cases}
   n &\\text{se } m = 0 \\\\
   (n + 1) \\oplus (m - 1) &\\text{altrimenti }
\\end{cases}$.`,
      soluzione: "",
    },
    {
      progetto:
        "Sottrazione - usare solo le tre primitive zero, piuUno e menoUno",
      scheletro: `/** Sottrazione
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
using namespace std;

int sottrazione(int n, int m);
bool testSottrazione();
int zero(int n);
int piuUno(int n);
int menoUno(int n);

int main() {
  if (testSottrazione())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}
     
bool testSottrazione() {
  for (int i = 4; i < 10; i++) {
    if (sottrazione(i, 0) != i)
      return false;
    if (sottrazione(i, 1) != i - 1)
      return false;
    if (sottrazione(i, 4) != i - 4)
      return false;
  }

  return true;
}

int zero(int n) { return n == 0; }

int piuUno(int n) { return n + 1; }

int menoUno(int n) { return n - 1; }

int sottrazione(int n, int m) {
  if (...(...))
   return ...;
  else
   return ...);
}
`,
      testo: `Realizza la funzione \`int sottrazione(int n, int m)\` sapendo che
$n \\ominus m = 
\\begin{cases}
    n &\\text{se } m = 0 \\\\
    (n - 1) + (m - 1) &\\text{altrimenti }
\\end{cases}$.`,
      soluzione: "",
    },
    {
      progetto:
        "Moltiplicazione - usare le primitive che preferisci tranne `*`",
      scheletro: `/** Moltiplicazione
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
using namespace std;

int moltiplicazione(int n, int m);
bool testMoltiplicazione();

int main() {
  if (testMoltiplicazione())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;
   
  return 0;
}
     
bool testMoltiplicazione() {
  for (int i = 0; i < 5; i++) {
    if (moltiplicazione(i, 0) != 0)
      return false;
    if (moltiplicazione(i, 1) != i)
      return false;
    if (moltiplicazione(i, 2) != i * 2)
     return false;
    if (moltiplicazione(i, 3) != i * 3)
     return false;
  }

  return true;
}

int moltiplicazione(int n, int m) {
  if (...)
    return 0;
  else
    return ... moltiplicazione(..., ...);
}
`,
      testo: `Realizza la funzione \`int moltiplicazione(int m, int n)\` sapendo che
$n \\odot m = 
\\begin{cases}
    0 &\\text{se } m = 0 \\\\
    n + \\left( n \\odot \\left( m - 1 \\right) \\right) &\\text{altrimenti }
\\end{cases}$.`,
      soluzione: "",
    },
    {
      progetto: `Moltiplicazione efficiente - usare le primitive che preferisci tranne \`*\`.`,
      scheletro: `/** Moltiplicazione efficiente
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
using namespace std;
bool pari(int n);
int doppio(int n);
int meta(int n);
int moltiplicazioneEff(int n, int m);
bool testMoltiplicazioneEff();

int main() {
  if (testMoltiplicazioneEff())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}

int chiamate;

bool testMoltiplicazioneEff() {
  const int n = 5;
  chiamate = 0;
  for (int i = 0; i < n; i++) {
    if (moltiplicazioneEff(i, 0) != 0)
      return false;
    // n chiamate
    if (moltiplicazioneEff(i, 1) != i)
      return false;
    // 2 n chiamate
    if (moltiplicazioneEff(i, 127) != i * 127)
      return false;
      // n * 14 chiamate
  }
  
  return (chiamate <= 17 * n);
}

bool pari(int n) { return !(n % 2); }

int doppio(int n) { return n << 1; }

int meta(int n) { return n >> 1; }

int moltiplicazioneEff(int n, int m) {
  chiamate++; //< solo per controllare l'efficienza
  if (...)
    return ...;
  if (...)
    return ...(..., ...);
  else
    return ... + ...(..., ...);
}
`,
      testo: `Realizza la funzione \`int moltiplicazioneEff(int n, int m)\` sapendo che
$n \\odot m = 
\\begin{cases}
  n                           &\\text{se } m = 0 \\\\
  (2 \\cdot n) \\odot (m / 2) & \\text{se pari}(m)\\\\ 
  n + \\left( n \\odot \\left( m - 1 \\right) \\right) &\\text{altrimenti }
\\end{cases}$.`,
      soluzione: "",
    },
    {
      progetto: "Divisione - usare solo le primitive `zero`, `+`, `-` e `<`",
      scheletro: `/** Divisione
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
using namespace std;

int divisione(int n, int m);
bool testDivisione();

int main() {
  if (testDivisione())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}

bool testDivisione() {
  for (int i = 1; i < 5; i++) {
    if (!divisione(10, i) == 10 / i)
      return false;
  }

  return true;
}

int divisione(int n, int m) {
  if (...)
    return ...;
  else
    return ... + divisione(..., ...);
}
`,
      testo: `Realizza la funzione \`int divisione (int n, int m)\` sapendo che
$n \\oslash m = 
\\begin{cases}
  0                         &\\text{se } n < m \\\\
  1 + ( (n - m) \\oslash m) &\\text{altrimenti }
\\end{cases}$.`,
      soluzione: "",
    },
    {
      progetto: "Potenza - usa le primitive che preferisci, tranne `pow`",
      scheletro: `/** Potenza
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
#include <cmath>
using namespace std;

int potenza(int n, int m);
bool testPotenza();

int main() {
  if (testPotenza())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;
    
  return 0;
}

bool testPotenza() {
  for (int i = 1; i < 5; i++) {
    if (potenza(1, i) != pow(1, i)) return false;
    if (potenza(2, i) != pow(2, i)) return false;
    if (potenza(10, i) != pow(10, i)) return false;
  }
  return true;
}

int potenza(int n, int m) {
  ...
}
`,
      testo: `Realizza la funzione \`int potenza(int n, int m)\`. Non ci sono limiti.
Si usi:

$n^m = \\begin{cases}
  1                             & \\text{se } m = 0\\\\
  n \\cdot \\left( n^{m-1} \\right)  & \\text{altrimenti}
\\end{cases}
$

oppure:

$n^m = \\underbrace{n \\cdot n \\cdot \\cdots \\cdot n}_{m \\text{ volte}}$
`,
      soluzione: "",
    },
    {
      progetto: "PotenzaEff - usa le primitive che preferisci, tranne `pow`",
      scheletro: `/** PotenzaEff
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <cmath>
#include <iostream>
using namespace std;

int potenzaEff(int n, int m);
bool testPotenzaEff();
bool pari(int n);
int quadrato(int n);
int meta(int n);

int main() {
  if (testPotenzaEff())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;


return 0;
}

int chiamate;

bool testPotenzaEff() {
  for (int i = 0; i < 5; i++) {
    if (potenzaEff(1, i) != pow(1, i))
      return false;
    if (potenzaEff(2, i) != pow(2, i))
      return false;
    if (potenzaEff(10, i) != pow(10, i))
      return false;
  }
  // Controlla il numero di chiamate
  chiamate = 0;
  potenzaEff(2, 31);
  return (chiamate <= 10);
}

int quadrato(int n) { return n * n; }
bool pari(int n) { return !(n % 2); }
int meta(int n) { return n >> 1; }

int potenzaEff(int n, int m) {
  chiamate++; //< per controllo efficienza
  if (...)
    return ...;
  if (...(...))
    return potenzaEff(..., ...);
  else
    return ... * potenzaEff(..., ...);
}
`,
      testo: `Realizza la funzione \`int potenzaEff(int n, int m)\` secondo il modello. Non ci sono limiti.
$n^m = \\begin{cases}
  1                             & \\text{se } m = 0\\\\
  \\left(n^2\\right)^{\\frac{m}{2}}  & \\text{se pari}(m)\\\\
  n \\cdot \\left( n^{m-1} \\right)  & \\text{altrimenti}
\\end{cases}
$`,
      soluzione: "",
    },
    {
      progetto: "fattoriale - usa le primitive che preferisci",
      scheletro: `/** Potenza
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
#include <cmath>
using namespace std;

int fattoriale(int n);
bool testFattoriale();

bool testFattoriale() {
  for (int i = 1; i < 5; i++) {
    if (potenza(1, i) != tgamma(i + 1) return false;
  }

  return true;
}

int main() {
  if (testFattoriale())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}

int fattoriale(int n) {

}
`,
      testo: `Realizza la funzione \`int fattoriale(int n)\`. Non ci sono limiti tranne soluzioni analoghe alla funzione di test.
Si usi:
Si usi:

$n! = \\begin{cases}
  1                             & \\text{se } n = 0\\\\
  n \\cdot \\left( n-1 \\right)!  & \\text{altrimenti}
\\end{cases}
$

oppure:

$n! = \\underbrace{n \\cdot (n-1) \\cdot (n-2)\\cdots \\cdot 1}_{n \\text{ volte}}$


`,
      soluzione: "",
    },
    {
      progetto: "Fibonacci - usa le primitive che preferisci",
      scheletro: `/** Fibonacci
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
#include <cmath>
using namespace std;

int Fibonacci(int n);
bool testFibonacci();

bool testFibonacci() {
  if (Fibonacci(0) != 1) return false;
  if (Fibonacci(1) != 1) return false;
  if (Fibonacci(2) != 2) return false;
  if (Fibonacci(3) != 3) return false;
  if (Fibonacci(10) != 55) return false;

  return true;
}

int main() {
  if (testFibonacci())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}

int Fibonacci(int n) {

}
`,
      testo: `Realizza la funzione \`int Fibonacci(int n)\` che restituisce l'elemento in posizione \`n\` della successione di Fibonacci.
Non ci sono limiti tranne l'uso della funzione di test.
Si consideri la seguente definizione ricorsiva ma si è liberi di scegliere la realizzazione:

Si usi:

$F(n) = \\begin{cases}
  1                             & \\text{se } n < 2\\\\
  F(n-2) + F(n-1)  & \\text{altrimenti}
\\end{cases}
$
`,
      soluzione: "",
    },
    {
      progetto: "Reciproco",
      testo: `Si vuole calcolare il reciproco del valore $x$, $\\frac{1}{x}$.
È noto che si può calcolare usando solo moltiplicazioni e differenze
tra numeri con la virgola, applicando in un ciclo la formula:
$x_{k+1} = x_k \cdot (2 - \nu \cdot x_k).$

Si scriva la funzione \`double reciproco(double x)\` che calcola il reciproco
di un numero x usando 10 iterazioni e stima iniziale del reciproco $x_0 = \\frac{1.0}{25}$.
      `,
      scheletro: `/** Reciproco
 * @autore: COGNOME NOME -- ${classe}
 * @data: ${giorno}
 */
#include <cmath>
#include <iostream>
using namespace std;

double reciproco(double x);
bool testReciproco();

bool testReciproco() {
  if (fabs(reciproco(1) - 1.) > 1E-5)
    return false;
  if (fabs(reciproco(2) - 1. / 2) > 1E-5)
    return false;
  if (fabs(reciproco(3) - 1. / 3) > 1E-5)
    return false;
  if (fabs(reciproco(4) - 1. / 4) > 1E-5)
    return false;
  if (fabs(reciproco(10) - 1. / 10) > 1E-5)
    return false;

  return true;
}

int main() {
  if (testReciproco())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}

double reciproco(const double x) {
  // Precondizioni:
  // x != 0 e
  // 0 < r < 2 / a
  double r = 1. / 25;
  for (...; ...; ...) {
    r = ...;
  }
  return r;
}`,
      soluzione: "",
    },
  ];
  const eserciziHTML: Array<Esercizio> = eserciziMarkdown.map(
    (esercizio: Esercizio) => {
      return {
        progetto: esercizio.progetto,
        scheletro: esercizio.scheletro,
        soluzione: esercizio.soluzione,
        testo: unified()
          .use(remarkParse)
          .use(remarkMath)
          .use(remarkRehype)
          .use(rehypeKatex)
          .use(rehypeStringify)
          .processSync(esercizio.testo)
          .toString(),
      };
    }
  );
  return eserciziHTML;
};
//export default esercizi;
