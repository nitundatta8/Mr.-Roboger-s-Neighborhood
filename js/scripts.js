
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
    replaceStr = strArray;
  }
 return replaceStr;

}

function isNumber(num){
  if( num !== '' && num>0 && !isNaN(num)){
   return true;
  }
  else{
    return false;
  }
}

$(document).ready(function() {
  $("#intro").submit(function(event){
     event.preventDefault();
     var num = $("#demo").val();
     if(num === ''){
       alert("Please enter a number");
       return;
     }
     if(!isNumber(num)){
      alert("Please enter a valid number");
      $("#demo").val('');
      return;
     }
     var result = createRange(parseInt(num));
     
     $("#output").text(result.join(','));
  });
  
});


