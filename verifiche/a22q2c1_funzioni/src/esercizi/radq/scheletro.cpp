/** Radq
 * @autore: COGNOME NOME -- ${classe}
 * @data: ${giorno}
 */
#include <cmath>
#include <iostream>
using namespace std;

float testRadq();
float radq(float);

int main() {
  const float pt = testRadq();
  cout << "Punteggio: " << pt * 10 << endl;
  if (pt == 1.)
    cout << "Tutti i test sono stati superati" << endl;

  return 0;
}

float testRadq() {
  int nTest = 0, testSuperati = 0;
  for (int i = 0; i < 10; i++) {
    nTest++;
    float r = radq(i * i);
    // la tolleranza è valutata tra i quadrati
    if (fabs(r * r - i * i) < 0.001)
      testSuperati++;
    else
      cout << "Test fallito: radq(" << i * i << "), ottengo: " << radq(i * i)
           << endl;
  }
  return (float)testSuperati / nTest;
}

bool accurata(float stima, float radicando) {
  return fabs(stima * stima - radicando) < 0.001;
}

//
// MODIFICA SOLO QUESTA FUNZIONE
//
float radq(float x) {
  float stima = 1.;
  while (!accurata(stima, x)) {
    stima = ...;
  }
  return ...;
}