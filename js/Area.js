document.getElementById("btn-triangle").addEventListener('click',function(){
    const base =takeInput("Base-finld")
    const hight =takeInput("btn-hight")
    const areaTotal = 0.5*base*hight;
    document.getElementById("tArea").innerText = areaTotal;
})