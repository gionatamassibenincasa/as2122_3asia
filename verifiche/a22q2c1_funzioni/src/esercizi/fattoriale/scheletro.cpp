/** Potenza
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
