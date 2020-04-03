



function createRange(number){
  var numArray = [];
  for(var index=0; index<=number ; index++){
    var replaceVal = replace(index);
    numArray.push(replaceVal);
  }
  console.log(numArray)
  return numArray;
}

function replace(num){
  var str = num.toString();
  var strArray = str.split('');
  var replaceStr ="";
  if(strArray.includes('3')){
     replaceStr = "Won't you be my neighbor?";
     return replaceStr;
  }else if(strArray.includes('2')){
    replaceStr = "Boop!";
    return replaceStr;
  }else if(strArray.includes('1')){
  replaceStr = "Beep!";
  return replaceStr;
  }else{
    replaceStr = strArray
  }
return replaceStr;

}

var result = replace(13);
result

// function findHightestValDigit(numInput){
//   var str = numInput.toString();
//   var strArray = str.split('');
//   var maxNum = 0;
//   for(var i=0; i<strArray.length; i++){
//     var val = parseInt(strArray[i]);
//     if(val > maxNum) {
//       maxNum = val;
//     }
//   }
//   return maxNum;
// }

$(document).ready(function() {
  $("#intro").submit(function(event){
     event.preventDefault();
     var num = $("#demo").val();
     var result = createRange(parseInt(num));
     $("#output").text(result.join(','));
  });
  
});


