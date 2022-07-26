// factorial break
let factorial=1;
let producto=1;
while(true){
  factorial*=producto;
  producto++;
  if(producto===10){
    break;
  }
}
console.log(factorial);