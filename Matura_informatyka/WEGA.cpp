//Algorytmy w praktyce WEGA Egzamin maturalny — maj 2018

#include <iostream>
#include <fstream>
#include <string>

using namespace std;

void zad4_1()
{
    string temp;
    ifstream plik;
    plik.open("przyklad.txt");
    for(int i = 1; i<=1000; i++)
    {
        plik >> temp;
        if(i % 40 == 0)
            cout<<temp[9];
    }

}
void zad4_2()
{
    int tab[25] = {0};
    string temp, slowo = "";
    int dif = 0;
    ifstream plik;
    plik.open("przyklady.txt");
    while(plik >> temp)
    {
        for(int i = 0; i<25; i++)
            tab[i]=0;
        for(int i = 0; i < temp.length(); i++)
            {
                tab[(int)temp[i]-'A']++;
            }
        int ile = 1;
        for(int i = 0 ; i<25;i++)
            if(tab[i]>0)
                ile++;
        if(ile>dif)
        {
            dif = ile;
            slowo = temp;
        }
    }
    cout<<slowo<<" "<<dif;
}
void zad4_3()
{
    string temp;
    ifstream plik;
    plik.open("przyklad.txt");
    while(plik >> temp)
    {
    int max = 0, min = 1000;
        for(int i = 0; i < temp.length(); i++)
            {
                if((int)temp[i]>max)
                    max = (int)temp[i];
                else if((int)temp[i]<min)
                    min = (int)temp[i];
            }
        if(max-min<=10)
            cout<<temp<<endl;
    }

}


int main()
{
    zad4_1();
    cout<<endl;
    zad4_2();
    cout<<endl;
    zad4_3();
    return 0;
}
