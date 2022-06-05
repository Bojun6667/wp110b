function Average (a,b,c,d,e)
{
    var ar =[]
    var sum = a+b+c+d+e
    var average = sum / 5
    ar.push(average)

    return ar
}
console.log ('Average(1,2,3,4,5) => ' + Average(1,2,3,4,5))
console.log ('Average(5,7,16,23,100) => ' + Average(5,10,15,25,100))