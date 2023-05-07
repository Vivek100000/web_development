function bd(y)
{
var y1=new Date(y)
var cy=y1.getFullYear()
if(y1.getMonth()>2)
cy=cy+1;
else if(y1.getMonth()==2 && y1.getDate()>31)
cy=cy+1;

var y2=new Date(cy,02,31)
const oneDay = 1000 * 60 * 60 * 24;
const diffInTime = y2.getTime()-y1.getTime();
var result=Math.ceil(diffInTime/oneDay)
return result
}
console.log(bd("01/04/2004"))