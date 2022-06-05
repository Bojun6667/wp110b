function primenumber(n)
{
    var conter =0
    for (var i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            conter = conter+1
        }
    }
    if (conter==2) return true
    else return false
}

console.log ('primenumber(17) => ' +primenumber(17))
console.log ('primenumber(21) => ' +primenumber(21))
