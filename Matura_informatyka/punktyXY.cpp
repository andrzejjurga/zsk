//Algorytmy w praktyce	Punkty XY	Egzamin maturalny — czerwiec 2017
#include <iostream>
#include <fstream>
#include <cmath>

using namespace std;

bool pierwsza(int a)
{
    bool temp = false;
    for(int i = 2; i<a; i++)
        if(a % i == 0)
            return temp;
    if(a != 1)
        temp = true;
    return temp;
}
        //plik>>temp;
        //cout<<"x: "<<temp;
        //plik>>temp;
        //cout<<" y:"<<temp<<endl;

void zad4_1()
{
    fstream plik;
    plik.open("punkty.txt");
    int temp;
    int wyn = 0;
    for(int i = 0; i<1000; i++)
    {
        plik>>temp;
        if(pierwsza(temp))
        {
            plik>>temp;
            if(pierwsza(temp))
            {
                wyn++;
            }
        }
        else
        {
            plik>>temp;
        }

    }
    cout<<wyn<<endl;
}

void zad4_2()
{
    fstream plik;
    plik.open("punkty.txt");
    int temp;
    int wyn = 0;
    bool k = true;
    for(int i = 0; i<1000; i++)
    {
        int tab1[10] = {0};
        int tab2[10] = {0};
        plik>>temp;
        while(temp > 0)
        {
            tab1[temp%10] = 1;
            temp/=10;
        }
        plik>>temp;
        while(temp > 0)
        {
            tab2[temp%10] = 1;
            temp/=10;
        }
        k = true;
        for(int i = 0; i<10; i++)
            if(tab1[i]!=tab2[i])
                k = false;
        if(k)
            wyn++;

    }
    cout<<wyn<<endl;
}

void zad4_3()
{
    fstream plik;
    plik.open("punkty.txt");
    double xa, ya, xb, yb;
    double k = 0.0;
    int tabX[1000];
    int tabY[1000];
    for(int i = 0; i<1000; i++)
    {
        plik>>tabX[i];
        plik>>tabY[i];
    }
    for(int i = 0; i<1000; i++)
        for(int j = 0; j <1000; j++)
        {
            if(sqrt(pow(tabX[j] - tabX[i],2)+pow(tabY[j] - tabY[i],2))>k)
            {
                xa = tabX[i];
                ya = tabY[i];
                xb = tabX[j];
                yb = tabY[j];
                k = sqrt(pow(tabX[j] - tabX[i],2)+pow(tabY[j] - tabY[i],2));
            }
        }

    cout<<xa<<" "<<ya<<endl;
    cout<<xb<<" "<<yb<<endl;
    cout<<k<<endl;
}

void zad4_4()
{
    fstream plik;
    plik.open("punkty.txt");
    int tempX, tempY;
    int wyna = 0, wynb = 0, wync = 0;
    for(int i = 0; i<1000; i++)
    {
        plik>>tempX;
        plik>>tempY;
        if(tempX<5000 && tempY<5000)
            wyna++;
        if(tempX==5000 && tempY<=5000)
            wynb++;
        if(tempX<=5000 && tempY==5000)
            wynb++;
        if(tempX>5000 || tempY>5000)
            wync++;

    }
    cout<<wyna<<" "<<wynb<<" "<<wync<<endl;
}



int main(){

    zad4_1();
    zad4_2();
    zad4_3();
    zad4_4();

return 2;
}
