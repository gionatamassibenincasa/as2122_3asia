/** Reciproco
 * @autore: COGNOME NOME -- ${classe}
 * @data: ${giorno}
 */
#include <cmath>
#include <iostream>
using namespace std;

double reciproco(double x);
bool testReciproco();

bool testReciproco() {
  if (fabs(reciproco(1) - 1.) > 1E-5)
    return false;
  if (fabs(reciproco(2) - 1. / 2) > 1E-5)
    return false;
  if (fabs(reciproco(3) - 1. / 3) > 1E-5)
    return false;
  if (fabs(reciproco(4) - 1. / 4) > 1E-5)
    return false;
  if (fabs(reciproco(10) - 1. / 10) > 1E-5)
    return false;

  return true;
}

int main() {
  if (testReciproco())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}

double reciproco(const double x) {
  // Precondizioni:
  // x != 0 e
  // 0 < r < 2 / a
  double r = 1. / 25;
  for (...; ...; ...) {
    r = ...;
  }
  return r;
}