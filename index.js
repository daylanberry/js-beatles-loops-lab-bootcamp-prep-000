function theBeatlesPlay(musicians, instrument){
  var array = [];
  
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays the ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(factsArray){
  var array = []
  var i = 0;
  while (array.length < factsArray.length){
    array.push(factsArray[i] + '!!!')
    i++;
  }
  return array;
}
