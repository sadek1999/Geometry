function takeInput(id){
    const value =parseFloat(document.getElementById(id).value);
    document.getElementById(id).value='';
    return value;
}