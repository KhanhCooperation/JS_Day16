function tinhTong(){
    var n=document.querySelector("#giai-thua").value*1;
    sum=1;
    for(var i=1;i<=n;i++){
        sum*=i;
    }
    document.querySelector("#result").innerHTML=`Giai Thừa= ${sum}`;
}