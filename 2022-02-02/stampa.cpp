#include <iostream>
using namespace std;

void stampa_array(float A[], int len) {
  cout << "{";
  if (len > 0)
    cout << A[0];
  for (int i = 1; i < len; i++)
    cout << ", " << A[i];
  cout << "}" << endl;
}

int main() {
  float voti[5] = {6, 9, 3, 3, 9};
  stampa_array(voti, sizeof(voti) / sizeof(float));
  return 0;
}