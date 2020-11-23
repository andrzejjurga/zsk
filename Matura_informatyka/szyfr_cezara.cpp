#include <iostream>
#include <fstream>
#include <cmath>

using namespace std;

void zad6_1()
{
    fstream plik;
    ofstream wyj;
    plik.open("dane_6_1.txt");
    wyj.open("wyniki_6_1.txt");
    string temp;
    int k = 107 % 26;
    while(plik>>temp)
    {
        for(int i = 0; i<temp.length(); i++)
        {
            temp[i]+=k;
            if(temp[i]>90)
                temp[i]-=26;
        }
        wyj<<temp<<endl;
    }
}

void zad6_2()
{
    fstream plik;
    ofstream wyj;
    plik.open("dane_6_2.txt");
    wyj.open("wyniki_6_2.txt");
    string temp;
    int k;
    while(plik>>temp)
    {
        plik>>k;
        k = k % 26;
        for(int i = 0; i<temp.length(); i++)
        {
            temp[i]-=k;
            if(temp[i]<65)
                temp[i]+=26;
        }
        wyj<<temp<<endl;
    }
}

void zad6_3()
{
    fstream plik;
    ofstream wyj;
    plik.open("dane_6_3.txt");
    wyj.open("wyniki_6_3.txt");
    string temp, temp2;
    int k;
    while(plik>>temp)
    {
        plik>>temp2;
        bool d = true;
        k = temp2[0] - temp[0];
        if(k<0)
            k = k + 26;
        for(int i = 0; i<temp.length(); i++)
        {
            temp2[i]-=k;
            if(temp2[i]<65)
                temp2[i]+=26;
        }
        {
        for(int i = 0; i<temp.length(); i++)
            if(temp[i] != temp2[i])
                d = false;
        }
        if(!d)
            wyj<<temp<<" "<<temp2<<endl;
        cout<<endl;
    }
}


int main()
{

    zad6_1();
    zad6_2();
    zad6_3();
    return 2;
}
