var sum=0;
for (var i=1; sum<=10000; i++){
    sum+=i;
    if(sum>=10000){
        document.querySelector("#result").innerHTML=`Số nguyên dương nhỏ nhất: ${i}`;
    }
}