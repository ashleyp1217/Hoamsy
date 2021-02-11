var i;
for( i=1; i<=100; i++){
  if (i%3==0 & i%5!=0){
    console.log(i + " Hoamsy")
  }
  else if (i%5==0 & i%3!=0){
    console.log(i + " IsCool")
  }
  else if(i%5==0 & i%3==0){
    console.log(i + " HoamsyIsCool")
  }
  else{
    console.log(i)
  }

}
