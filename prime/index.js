var n=prompt();
var count=0;
for (var i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==2){
    console.log("n is prime");
}
else{
    console.log("n is not prime")
}