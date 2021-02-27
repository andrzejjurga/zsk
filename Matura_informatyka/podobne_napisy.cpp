#include <iostream>
#include <string>
#include <fstream>

using namespace std;

void zad1()
{
    fstream plik;
    plik.open("napisy.txt");
    string temp1, temp2;
    int wyn = 0;
    while(plik>>temp1)
    {
        plik>>temp2;
        if(temp1.length()>=temp2.length() * 3)
            wyn++;
        else if(temp1.length() * 3 <= temp2.length())
            wyn++;
    }
    cout<<wyn<<endl;
}

void zad2()
{
    fstream plik;
    plik.open("napisy.txt");
    string temp1, temp2;
    int podciag = 0;
    while(plik>>temp1)
    {
        plik>>temp2;
        if(temp1.length()<temp2.length())
        {
            int i = 0;
            bool theSame = true;
            while(i<temp1.length())
            {
                if(temp1[i]!=temp2[i])
                    theSame = false;
                i++;
            }
            if(theSame)
            {
                cout<<temp1<<" "<<temp2<<" ";
                for(int j = i; j<temp2.length();j++)
                    cout<<temp2[j];
            cout<<endl;
            }
        }
    }
}

void zad3()
{
    fstream plik;
    plik.open("napisy.txt");
    string temp1, temp2;
    int longest = 0;
    int tempLongest = 0;
    int i;
    while(plik>>temp1)
    {
        plik>>temp2;
        i = 0;

        while(temp1.length() - i >= 0 && temp2.length() - i >= 0 && temp1[temp1.length()-i]==temp2[temp2.length()-i])
        {
            i++;
        }
        i--;
        if(i>longest)
            longest = i;
    }
    cout<<longest<<endl;
    plik.close();
    plik.open("napisy.txt");
    int j = 0;
    bool theSame = true;
    while(plik>>temp1)
    {
        plik>>temp2;
        if(temp1.length()>=longest && temp2.length()>=longest)
        {
            j = 0;
            theSame = true;
            while(j<=longest && theSame==true)
            {
                if(temp1[temp1.length()-j]!=temp2[temp2.length()-j])
                    theSame = false;
                j++;
            }
            if(theSame)
                cout<<temp1<<" "<<temp2<<endl;
        }
    }

}

int main(){

    zad1();
    zad2();
    zad3();
    return 2;
}
