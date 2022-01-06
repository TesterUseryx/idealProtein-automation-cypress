export function randomName(isText = true, numberOfDigits = null) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(isText){
    for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }else{
    text = Math.random().toFixed(numberOfDigits+1).split('.')[1]
  }
  return text
}



