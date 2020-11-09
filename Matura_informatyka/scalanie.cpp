//Algorytmy w praktyce Scalanie Egzamin maturalny — czerwiec 2018

#include <iostream>
#include <fstream>

using namespace std;

void zad4_1()
{
    fstream plik1;
    plik1.open("dane1.txt");
    fstream plik2;
    plik2.open("dane2.txt");
    int temp1, temp2, wyn = 0;
    for(int i = 1; i<=10000; i++)
    {
        plik1>>temp1;
        plik2>>temp2;
        if(i % 10 == 0)
        {
            if(temp1==temp2)
                wyn++;
        }
    }
    cout<<wyn<<endl;
}

void zad4_2()
{
    fstream plik1;
    plik1.open("dane1.txt");
    fstream plik2;
    plik2.open("dane2.txt");
    int temp1, temp2, wyn = 0;
    int parzyste1, parzyste2;
    for(int i = 1; i<=1000; i++)
    {
        parzyste1 = 0;
        parzyste2 = 0;

        for(int j = 1; j<=10; j++)
        {
            plik1>>temp1;
            plik2>>temp2;
            if(temp1 % 2 == 0)
                parzyste1++;
            if(temp2 % 2 == 0)
                parzyste2++;
        }
            if(parzyste1 == 5 && parzyste2 == 5)
                wyn++;
    }
    cout<<wyn<<endl;
}

void zad4_3()
{
    fstream plik1;
    plik1.open("dane1.txt");
    fstream plik2;
    plik2.open("dane2.txt");
    int temp1, temp2, wyn = 0;
    bool g = false;
    int t1 = 0, t2 = 0;
    int tab1[10], tab2[10];
    for(int i = 1; i<=1000; i++)
    {
        for(int j = 0; j<10; j++)
        {
            plik1>>temp1;
            plik2>>temp2;
            tab1[j] = temp1;
            tab2[j] = temp2;
        }
        for(int j = 0; j<10; j++)
        {
            for(int k = 0; k<10; k++)
            {
                if(tab1[j]==tab2[k])
                    g = true;
            }
            if(g) t1++;
        g = false;
        }

        for(int j = 0; j<10; j++)
        {
            for(int k = 0; k<10; k++)
            {
                if(tab2[j]==tab1[k])
                    g = true;
            }
            if(g) t2++;
        g = false;
        }
        if(t1==10 && t2==10)
            cout<<i<<endl;
        t1 = 0;
        t2 = 0;
        }
}

void zad4_4()
{
    fstream plik1;
    plik1.open("przyklad1.txt");
    fstream plik2;
    plik2.open("przyklad2.txt");
    int temp1, temp2, wyn = 0;
    int tab1[10], tab2[10];
    for(int i = 1; i<=5; i++)
    {
        for(int j = 0; j<10; j++)
        {
            plik1>>temp1;
            plik2>>temp2;
            tab1[j] = temp1;
            tab2[j] = temp2;
        }
        int indeks1 = 0, indeks2 = 0;
        while(indeks1<10 && indeks2<10)
        {
            if(tab1[indeks1]<tab2[indeks2])
            {
                cout<<tab1[indeks1]<<" ";
                indeks1++;
            }
            else
            {
                cout<<tab2[indeks2]<<" ";
                indeks2++;
            }

        }
        while(indeks1<10)
        {
            cout<<tab1[indeks1]<<" ";
            indeks1++;
        }
        while(indeks2<10)
        {
            cout<<tab2[indeks2]<<" ";
            indeks2++;
        }
        cout<<endl;
    }
}


int main()
{
    zad4_1();
    zad4_2();
    zad4_3();
    zad4_4();
    return 2;
}
