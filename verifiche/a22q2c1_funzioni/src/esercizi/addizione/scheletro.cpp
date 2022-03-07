/** Addizione
 * @autore: COGNOME NOME -- ${classe}
 * @data: ${giorno}
 */
#include <iostream>
using namespace std;

int main() {
  const float pt = testAddizione();
  cout << "Punteggio: " << pt * 10 << endl;
  if (pt == 1.)
    cout << "Tutti i test sono stati superati" << endl;

  return 0;
}

float testAddizione() {
  int nTest = 0, testSuperati = 0;
  for (int i = 0; i < 10; i++) {
    nTest++;
    if (addizione(i, 0) == i)
      testSuperati++;
    nTest++;
    if (addizione(i, 1) == i + 1)
      testSuperati++;
    nTest++;
    if (addizione(i, 4) == i + 4)
      testSuperati++;
  }
  return (float)testSuperati / nTest;
}

bool zero(int n) { return n == 0; }

int piuUno(int n) { return n + 1; }

int menoUno(int n) { return n - 1; }

//
// MODIFICA SOLO QUESTA FUNZIONE
//
int addizione(int n, int m) {
  if (zero(m))
    return n;
  else
    return addizione(...(...), ...(...));
}