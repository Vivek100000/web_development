function christmas(y)
{
var y1=new Date(y)
var cmas=y1.getFullYear()
if(y1.getMonth()>10 && y1.getDate()>25)
{
    cmas=cmas+1;
}
var y2=new Date(cmas,11,25)
const oneDay = 1000 * 60 * 60 * 24;
const diffInTime = y2.getTime()-y1.getTime();
var result=Math.ceil(diffInTime/oneDay)
return result
}
console.log(christmas("12/26/2004"))