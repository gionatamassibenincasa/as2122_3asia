/** Moltiplicazione efficiente
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
