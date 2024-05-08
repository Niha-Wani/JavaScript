var x=0;
function increment()
{
    x=x+1;
    document.getElementById("count").innerText=x;
}
function save()
{
    document.getElementById("save").textContent += x + " - ";
    document.getElementById("count").textContent=0;
    x=0;
}
