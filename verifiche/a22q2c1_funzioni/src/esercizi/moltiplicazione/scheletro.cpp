/** Moltiplicazione
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
