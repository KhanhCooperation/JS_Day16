
function Generate(){
    for(var i=1; i<=10;i++){
        if(i%2!=0){
            document.querySelector("#result").innerHTML+=`<div class="bg-primary p-1">Div Lẻ ${i} </div>`;
        }else{
            document.querySelector("#result").innerHTML+=`<div class="bg-danger p-1">Div chẵn ${i} </div>`;
        }
    }
}