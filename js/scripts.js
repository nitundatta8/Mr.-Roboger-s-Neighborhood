
function createRange(number,name){
  var numArray = [];
  for(var index=0; index<=number ; index++){
    var replaceVal = replace(index,name);
    numArray.push(replaceVal);
  }
  console.log(numArray)
  return numArray;
}

function replace(num,name){
  var str = num.toString();
  var strArray = str.split('');
  var replaceStr ="";
  if(strArray.includes('3')){
     replaceStr = "Won't you be my neighbor?" + name;
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
  $("#output").hide();
  $("#intro").submit(function(event){
     event.preventDefault();
     var num = $("#demo").val();
     $("#demo").val('');
     if(num === ''){
       alert("Please enter a number");
       return;
     }
     if(!isNumber(num)){
      alert("Please enter a valid number");
      return;
     }
     var inputName = $("#name").val();
     $("#name").val('');
     var result = createRange(parseInt(num),inputName.toUpperCase());
     
     $("#output").text(result.join(','));
     $("#output").show();
  });
  
});


