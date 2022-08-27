function fib(n){
    var arr=[];
    var a=0;
    var b=1;
    if(n===1){
        arr.push(a);
    }
    else if(n===2){
        arr.push(a,b);
    }
    else{
        arr.push(a,b);
        for(var i=2;i<n;i++){
            arr.push(arr[arr.length -2]+arr[arr.length -1]);
        }
    }
    return arr;
}

//fib(5)
