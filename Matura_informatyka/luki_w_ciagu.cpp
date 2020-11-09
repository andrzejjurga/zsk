//Algorytmy w praktyce Luki w ci¹gu Próbny egzamin maturalny — kwiecieñ 2020

#include <iostream>
#include <fstream>
#include <cmath>

using namespace std;

void zad4_1()
{
    fstream plik;
    plik.open("dane4.txt");
    int temp1 = 0, temp2 = 0;
    plik>>temp1;
    int min = 1000, max = 0;
    while(plik>>temp2)
    {
        int k = abs(temp1-temp2);
        if(k>max)
            max = k;
        else if(k<min)
            min = k;
        temp1 = temp2;
    }
    cout<<min<<" "<<max<<endl;
}

void zad4_2()
{
    fstream plik;
    plik.open("dane4.txt");
    int temp1 = 0, temp2 = 0, k = -1, maxLength = -1, length = 1;
    plik>>temp1;
    int first, tempFirst, last;
    while(plik>>temp2)
    {
        if(k == abs(temp1-temp2))
            length++;
        else
        {
            if(length > maxLength)
            {
                maxLength = length + 1;
                first = tempFirst;
                last = temp1;
            }
            else
            {
                length = 1;
                tempFirst = temp1;
                k = abs(temp1-temp2);
            }
        }
        temp1 = temp2;
    }
    cout<<first<<" "<<last<<" "<<k<<" "<<maxLength<<endl;
}

void zad4_3()
{
    fstream plik;
    plik.open("dane4.txt");
    int temp1 = 0, temp2 = 0;
    plik>>temp1;
    int tabIndex[999] = {0};
    int tabWart[999] = {0};
    int max = 0;
    while(plik>>temp2)
    {
        int k = abs(temp1-temp2);
        int i = 0;
        while(i<999 && k!=tabIndex[i] && tabIndex[i]!=0)
        {
            i++;
        }
        tabWart[i]++;
        tabIndex[i] = k;
        temp1 = temp2;
    }
    for(int i = 0; i<999; i++)
    {
        if(tabWart[i]>max)
            max = tabWart[i];
    }
    for(int i = 0; i<999; i++)
    {
        if(tabWart[i]==max)
            cout<<tabIndex[i]<<" ";
    }

    cout<<endl<<max<<endl;
}


int main()
{
    zad4_1();
    zad4_2();
    zad4_3();
    return 0;
}
