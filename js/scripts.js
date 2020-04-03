



function createRange(number){
  var numArray = [];
  for(var index=0; index<=number ; index++){
    var replaceVal = replace(index);
    numArray.push(replaceVal);
  }
  return numArray;
}

function replace(num){
  return num;
}


$(document).ready(function() {
  $("#range").submit(function(event){
     event.preventDefault();
     var num = $("#demo").val();
     var result = createRange(parseInt(num));
  });
  
});


