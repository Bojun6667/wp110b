function factor (n)
{
    var ar=[]
    for(var i=1;i<=n;i++)
    {
        while (n!=i)
        {
            if (n%i==0 && i!=1)
            {
                ar.push(i)
                n=n/i
                console.log (n)
            }
            else break
        }
        if(n==i)ar.push(n)
    }
    return ar
}
console.log(factor(16))