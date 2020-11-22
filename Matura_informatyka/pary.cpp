#include <iostream>
#include <fstream>

using namespace std;

bool pierwsza(int x)
{
    if(x<=1)
        return false;
    if(x==2)
        return true;
    for(int i = 2; i<x; i++)
        if(x % i == 0)
            return false;
    return true;
}

void zad4_1()
{
    fstream plik;
    plik.open("pary.txt");
    int temp;
    string temp2;
    while(plik>>temp)
    {
        if(temp % 2 == 0 && temp>4)
        {
            bool d = false;
            int x = 2;
            while(x<temp && d == false)
            {
                if(pierwsza(x) == true && pierwsza(temp-x) == true)
                {
                    d = true;
                    cout<<temp<<" "<<x<<" "<<temp-x<<endl;
                }
                else
                    x++;
            }
        }
        plik>>temp2;
    }
}

void zad4_2()
{
    fstream plik;
    plik.open("pary.txt");
    string temp;
    int temp2;
    plik>>temp2;

    int maxA = 0;
    char max = '#';
    int currentA = 1;
    char current = '#';

    while(plik>>temp)
    {
        for(int i = 1; i < temp.length(); i++)
        {
            if(temp[i] == temp[i-1])
            {
                currentA++;
                current = temp[i];
            }
            else
            {
                if(currentA>maxA)
                {
                    max = temp[i-1];
                    maxA = currentA;
                }
                currentA = 1;
                current = temp[i];
            }
        }
        for(int j = 0; j<maxA; j++)
            cout<<max;
        cout<<" "<<maxA<<endl;
        maxA = 0;

        plik>>temp2;
    }
}

void zad4_3()
{
    fstream plik;
    plik.open("pary.txt");
    int liczba1, liczba;
    string slowo1, slowo;

    while(plik>>liczba)
    {
        plik>>slowo;
        if(liczba == slowo.length())
            break;
    }



    while(plik>>liczba1)
    {
        plik>>slowo1;
        if(liczba1 == slowo1.length() && liczba1 == liczba)
        {
            if(slowo1<slowo)
            {
                slowo = slowo1;
                liczba = liczba1;
            }
        }
    }
    cout<<liczba<<" "<<slowo;
}

int main()
{
    zad4_1();
    zad4_2();
    zad4_3();
    return 2;
}
