//Algorytmy w praktyce Piksele Egzamin maturalny — maj 2017

#include <iostream>
#include <fstream>
#include <math.h>

using namespace std;

void zad6_1()
{
     int tab[200][320];
    ifstream plik;
    int max = 0, min = 250;
    plik.open("dane.txt");
    for(int i = 0; i < 200; i++)
    {
        for(int j = 0; j < 320 ; j++)
        {
            plik >> tab[i][j];
            if(tab[i][j] > max)
                max = tab[i][j];
            else if(tab[i][j] < min)
                min = tab[i][j];
        }
    }

    cout<<max<<" "<<min<<endl;
}

void zad6_2()
{
    int tab[200][320];
    ifstream plik;
    int wyn = 0;
    plik.open("dane.txt");
    for(int i = 0; i < 200; i++)
        for(int j = 0; j < 320 ; j++)
            plik >> tab[i][j];
    for(int i = 0; i < 200; i++)
    {
        bool u = true;
        int left = 0, right = 319;
        while(left<right && u == true)
        {
            if(tab[i][left]!=tab[i][right])
                u = false;
            left++;
            right--;
        }
        if (u == false)
            wyn++;
    }

    cout<<wyn<<endl;
}

void zad6_3()
{
     int tab[200][320];
    ifstream plik;
    plik.open("dane.txt");
    int wyn = 0;
    for(int i = 0; i < 200; i++)
        for(int j = 0; j < 320 ; j++)
            plik >> tab[i][j];
    for(int i = 0; i < 200; i++)
        for(int j = 0; j < 320 ; j++)
        {
            if(i>0 && abs(tab[i][j]-tab[i-1][j])>128)
                wyn++;
            else if(j<319 && abs(tab[i][j]-tab[i][j+1])>128)
                wyn++;
            else if(i<199 && abs(tab[i][j]-tab[i+1][j])>128)
                wyn++;
            else if(j>0 && abs(tab[i][j]-tab[i][j-1])>128)
                wyn++;
        }
    cout<<wyn<<endl;
}

void zad6_4()
{
    int tab[200][320];
    ifstream plik;
    plik.open("dane.txt");
    for(int i = 0; i < 200; i++)
        for(int j = 0; j < 320 ; j++)
            plik >> tab[i][j];

    int length = 0, temp = 1;
    for(int j = 0; j < 320 ; j++)
        for(int i = 0; i < 199; i++)
        {
            if(tab[i+1][j]!=tab[i][j])
            {
                if(temp > length)
                    length = temp;
                temp = 0;
            }
            temp++;
        }

    cout<<length<<endl;
}

int main()
{
    zad6_1();
    zad6_2();
    zad6_3();
    zad6_4();
    return 0;
}
