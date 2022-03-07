/** Potenza
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
