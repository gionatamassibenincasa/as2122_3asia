#include <iostream>
#include <cmath>

using namespace std;

/*
perimetro_trapezio_rettangolo
  dati in input base_maggiore, base_minore e altezza di un trapezio rettangolo, calcolare e scrivere in output il perimetro;
  si provi l’algoritmo per verificare le relazioni ingresso/uscita:  {(1,1,1)↦4,(4,1,4)↦14,(15,10,12)↦50} .
*/
int main() {
  double base_maggiore,
         base_minore,
         altezza;
  // Lettura del valore base_maggiore
  cout << "Base maggiore: ";
  cin >> base_maggiore;
  // Lettura del valore base_minore
  // Ripete la richiesta fintanto che base_maggiore < base_minore
  do {
    cout << "Base minore: ";
    cin >> base_minore;
  } while(base_maggiore < base_minore);
  // Lettura del valore altezza
  cout << "Altezza: ";
  cin >> altezza;

  double cateto = base_maggiore - base_minore;
  double ipotenusa = sqrt(
    cateto * cateto + altezza * altezza
  );
  double perimetro = base_maggiore +
                     altezza +
                     base_minore +
                     ipotenusa;
  cout << "Perimetro: " << perimetro << endl;

  return 0;
}