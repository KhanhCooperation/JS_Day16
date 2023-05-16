function tinhTong(){
    var x=document.querySelector("#enter-x").value*1;
    var n=document.querySelector("#enter-n").value*1;
    var sum=0
    for(var i=1; i<=n; i++){
        sum+=(Math.pow(x,i));
    }
    document.querySelector("#result").innerHTML=`Sum= ${sum}`;
}