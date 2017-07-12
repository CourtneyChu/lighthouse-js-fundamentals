function lastIndexOf(array, value){
  var match = true;
  var answer = 0;
  for (var i = array.length -1; i >= value; i--){
    if (array[i] === value) {
  match = true;
  answer = i;
  break;
}
}
  if(match = true){
    return answer
} else {
  return -1;
}
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);