function Factorial(n)
{
    var a=1
    for (var i=1;i<=n;i++)
    {
        a=a*i
        console.log(a)
    }
    return a
}
console.log("10!="+Factorial(10))
console.log("5!="+Factorial(5))
console.log("3!="+Factorial(3))