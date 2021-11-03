#include <iostream>
#include <cmath>
#include <cassert>

using namespace std;

double quadrato(double x) {
  return x * x;
}

void testQuadrato() {
  assert(quadrato(2.0) == 4.0);
  assert(quadrato(-2.0) == 4.0);
  assert(quadrato(0.0) == 0.0);
  assert(quadrato(12.3) == 12.3 * 12.3);
}

double perimetro(double base_maggiore,
                 double base_minore,
                 double altezza) {
  double cateto = base_maggiore - base_minore;
  double ipotenusa = sqrt(
    quadrato(cateto) + quadrato(altezza)
  );
  return base_maggiore + altezza +
         base_minore + ipotenusa;
}

void testPerimetro() {
  assert(perimetro(1, 1, 1) == 4);
  assert(perimetro(4, 1, 4) == 14);
  assert(perimetro(15, 10, 12) == 50);
}

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

  cout << "Perimetro: " << perimetro(base_maggiore, base_minore, altezza) << endl;

  testQuadrato();
  testPerimetro();

  return 0;
}