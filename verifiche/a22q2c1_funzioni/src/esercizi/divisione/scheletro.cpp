/** Divisione
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
