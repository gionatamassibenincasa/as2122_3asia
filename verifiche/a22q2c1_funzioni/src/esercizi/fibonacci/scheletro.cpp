/** Fibonacci
  * @autore: COGNOME NOME -- ${classe}
  * @data: ${giorno}
  */
#include <iostream>
#include <cmath>
using namespace std;

int Fibonacci(int n);
bool testFibonacci();

bool testFibonacci() {
  if (Fibonacci(0) != 1) return false;
  if (Fibonacci(1) != 1) return false;
  if (Fibonacci(2) != 2) return false;
  if (Fibonacci(3) != 3) return false;
  if (Fibonacci(10) != 55) return false;

  return true;
}

int main() {
  if (testFibonacci())
    cout << "Tutti i test sono stati superati" << endl;
  else
    cerr << "Almeno un test fallisce!!!" << endl;

  return 0;
}

int Fibonacci(int n) {

}
