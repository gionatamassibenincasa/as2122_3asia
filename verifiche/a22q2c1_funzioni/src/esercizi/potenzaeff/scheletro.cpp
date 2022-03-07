/** PotenzaEff
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
