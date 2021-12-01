/**
 * @file tipo_float.cpp
 * @author Gionata Massi (gionata.massi@savoiabenincasa.it)
 * @brief Esempi di tipi di dato e loro dimensione in byte
 * @version 0.1
 * @date 2021-12-01
 * 
 * @copyright Copyright (c) 2021
 * 
 */

#include <iostream>
using namespace std;

int main()
{
    float f = 1.23456789;
    double d = -1.23456789012345;
    long double ld = -1.23456789012345E300;

    cout
        << "f (float): " << f << endl
        << "d (double): " << d << endl
        << "ld (long double): " << ld << endl;

    cout << "Un float occupa " << sizeof(float) << " byte" << endl;
    cout << "Un double occupa " << sizeof(double) << " byte" << endl;
    cout << "Un long double occupa " << sizeof(long double) << " byte" << endl;

    return 0;
}
