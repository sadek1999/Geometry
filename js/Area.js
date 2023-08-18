document.getElementById("btn-triangle").addEventListener('click',function(){
    const base =takeInput("Base-finld")
    const hight =takeInput("btn-hight")
    const areaTotal = 0.5*base*hight;
    setArea("tArea",areaTotal);
    
})
function rectangleArea(){
    const width =takeInput("width-fild");
    const hight=takeInput('length-fild')
    const rectangleArea=width*hight;
    setArea("rArea",rectangleArea);
   
    
}
function parallelogramArea(){
    const base=takeInput("parallelogram-Base")
    const hight=takeInput("parallelogram-length")
    const parallelogramArea=base*hight;
    setArea("pArea",parallelogramArea)
}