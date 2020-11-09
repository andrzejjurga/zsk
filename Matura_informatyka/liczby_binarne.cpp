//Algorytmy w praktyce Liczby binarne Egzamin maturalny — maj 2015

#include <iostream>
#include <fstream>
#include <cmath>


using namespace std;

void zad6_1()
{
    fstream plik;
    plik.open("liczby.txt");
    int wyn = 0;
    string temp;
    while(plik>>temp)
    {
        if(temp[temp.length()-1]=='8')
            wyn++;
    }
    cout<<wyn<<endl;
}

void zad6_2()
{
    fstream plik;
    plik.open("liczby.txt");
    int wyn = 0;
    string temp;
    bool k =false;
    while(plik>>temp)
    {
        k = false;
        if(temp[temp.length()-1]=='4')
        {
            k = true;
            for(int i = 0; i<temp.length()-1;i++)
                if(temp[i]=='0')
                    k = false;
        }
        if(k==true)
            wyn++;

    }
    cout<<wyn<<endl;
}

void zad6_3()
{
    fstream plik;
    plik.open("liczby.txt");
    int wyn = 0;
    string temp;
    while(plik>>temp)
    {
        if(temp[temp.length()-1]=='2' && temp[temp.length()-2]=='0')
            wyn++;
    }
    cout<<wyn<<endl;
}

int conversion(long long int zmienna,int pod)
{
    int wyn = 0, i = 0;
    while(zmienna>0)
    {
        wyn+=(zmienna%10)*pow(pod, i);
        zmienna/=10;
        i++;
    }
    return wyn;
}


void zad6_4()
{
    fstream plik;
    plik.open("liczby.txt");
    int wyn = 0;
    long long int temp;
    while(plik>>temp)
    {
        if(temp%10==8)
            wyn+=conversion(temp/10, temp%10);
    }
    cout<<wyn<<endl;
}

void zad6_5()
{
    fstream plik;
    plik.open("liczby.txt");
    int max = 0;
    long long int maxCode = 0;
    int min = 9999;
    long long int minCode = 0;
    long long int temp;
    while(plik>>temp)
    {
        int k = conversion(temp/10, temp%10);
        if(k>max)
        {
            max = k;
            maxCode = temp;
        }
        else if(k<min)
        {
            min = k;
            minCode = temp;
        }
    }
    cout<<maxCode<<" "<<max<<" "<<minCode<<" "<<min<<endl;
}


int main(){

    zad6_1();
    zad6_2();
    zad6_3();
    zad6_4();
    zad6_5();
    return 2;
}
