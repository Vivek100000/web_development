function christmas()
{
var y1=new Date("11/24/2004")
var cmas=y1.getFullYear()
if(y1.getMonth()>=11 && y1.getDate()>25)
{
    cmas.setFullYear(cmas.getFullYear()+1); 
}
var y2=new Date(cmas,11,25)
const oneDay = 1000 * 60 * 60 * 24;
const diffInTime = y2.getTime()-y1.getTime();
var result=Math.ceil(diffInTime/oneDay)
return result
}
console.log(christmas())


