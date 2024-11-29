function addvalue(val){
    let v=document.getElementById('screen')
    v.value=v.value+val;
}
function cal(val){
    let v=document.getElementById('screen').value
    try{
    let result=eval(v)
    document.getElementById('res').value=result;
    }catch(error){
        document.getElementById('res').value='Error';
    }
}
function reset(){
    location.reload();
}