function filter357 (a,b)
{
    var array = []
    for (var i=a;a<=b;a++)
    {
        if(a%3!=0 && a%5!=0 && a%7!=0) array.push(a)
    }
    return array
}
console.log ('filter357(5,10) = '+ '['+filter357(5,10)+']')
console.log ('filter357(5,15) = '+ '['+filter357(5,15)+']')
