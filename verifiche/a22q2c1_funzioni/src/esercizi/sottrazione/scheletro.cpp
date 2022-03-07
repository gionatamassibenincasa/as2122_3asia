/** Sottrazione
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
using namespace std;

int sottrazione(int n, int m);
bool testSottrazione();
bool zero(int n);
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

bool zero(int n) { return n == 0; }

int piuUno(int n) { return n + 1; }

int menoUno(int n) { return n - 1; }

int sottrazione(int n, int m) {
  if (...(...))
   return ...;
  else
   return ...);
}
