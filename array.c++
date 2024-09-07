#include<iostream>
using namespace std;

void addtion(int a[],int n)
{
    int sum=0;
    for(int i=0;i<=n-1;i++)
    {
        sum=sum+a[i];
    }
     cout<<sum<<endl;
}


int main()
{
    int a[]={1,2,3,4,5};
    int n=sizeof(a)/sizeof(int);
    addtion(a,n);
}