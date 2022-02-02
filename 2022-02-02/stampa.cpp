#include <iostream>
using namespace std;

int main() {
  float voti[5] = {6, 9, 3, 3, 9};
  cout << "{" << voti[0];
  for (int i = 1; i < 5; i++)
    cout << ", " << voti[i];
  cout << "}" << endl;

  return 0;
}