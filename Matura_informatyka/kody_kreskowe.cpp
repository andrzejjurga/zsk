//Algorytmy w praktyce Kody kreskowe Egzamin maturalny — czerwiec 2015
#include <iostream>
#include <fstream>

using namespace std;

int sumaP(int temp)
{
    int sum = 0;
    while(temp>0)
    {
        sum += temp % 10;
        temp/=100;
    }
    return sum;
}

int sumaN(int temp)
{
    int sum = 0;
    while(temp>0)
    {
        temp/=10;
        sum += temp % 10;
        temp/=10;
    }
    return sum;
}

string translate(int temp)
{
    string tab[10]={"10101110111010", "11101010101110", "10111010101110", "11101110101010", "10101110101110", "11101011101010", "10111011101010", "10101011101110", "11101010111010", "10111010111010"};
    return tab[temp];
}

void zad6_1()
{
    fstream plik;
    plik.open("kody.txt");
    int temp;
    while(plik>>temp)
    {
        cout<<sumaP(temp)<<" "<<sumaN(temp)<<endl;
    }

}
void zad6_2()
{
    fstream plik;
    plik.open("kody.txt");
    int temp;
    int sumaKontr;
    while(plik>>temp)
    {
        sumaKontr = 3 * sumaP(temp) + sumaN(temp);
        sumaKontr = sumaKontr % 10;
        sumaKontr = 10 - sumaKontr;
        sumaKontr = sumaKontr % 10;
        cout<<sumaKontr<<" "<<translate(sumaKontr)<<endl;
    }
}
void zad6_3()
{
    fstream plik;
    plik.open("kody.txt");
    int temp;
    int sumaKontr;
    string kod;
    string kod6, kod5, kod4, kod3, kod2, kod1, kontr;
    while(plik>>temp)
    {
        sumaKontr = 3 * sumaP(temp) + sumaN(temp);
        sumaKontr = sumaKontr % 10;
        sumaKontr = 10 - sumaKontr;
        sumaKontr = sumaKontr % 10;
        kontr = translate(sumaKontr);
        kod6 = translate(temp%10);
        temp/=10;
        kod5 = translate(temp%10);
        temp/=10;
        kod4 = translate(temp%10);
        temp/=10;
        kod3 = translate(temp%10);
        temp/=10;
        kod2 = translate(temp%10);
        temp/=10;
        kod1 = translate(temp%10);
        kod = "11011010" + kod1 + kod2 + kod3 + kod4 + kod5 + kod6 + kontr + "11010110";
        cout<<kod<<endl;

    }
}

int main()
{
    zad6_3();

    return 2;
}
