var op=[];
var count=1;
function fizzbuzz(num){
  while(count<=num){
    if(count%3===0 && count%5===0){
    op.push("fizzbuzz");
  }
  else if(count%3===0){
    op.push("fizz");
  }
  else if(count%5===0){
    op.push("buzz");
  }
  else{
    op.push(count)
  }
  count++;
  }
  
  console.log(op);
}
