// create a function for clearAll
function clrData()
{
    document.getElementById("result").value="";
}
// create a function for sliceData
function sliceData()
{
    var slc=document.getElementById("result").value;
    var res=slc.slice(0,-1);
    document.getElementById("result").value=res;
}
// create a function for take input values
function inpData(val)
{
    document.getElementById("result").value+=val;

}
// create a function for airthmatic calculation
function finalResult()
{
    let x=document.getElementById("result").value;  
    let y=eval(x);
    document.getElementById("result").value=+y;
}
// create a function for square
function sqr()
{
 var sq=document.getElementById("result").value;
 var res=Math.pow(sq,2);
 document.getElementById("result").value=+res;

}
// create a function for squareRoot
function sqrRoot()
{
 var sq=document.getElementById("result").value;
 var res=Math.sqrt(sq);
 document.getElementById("result").value=+res;

}