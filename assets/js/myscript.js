//tab menu
var domBtnTabMenu = document.getElementById('tab-button');
domBtnTabMenu.onclick = function(){
    var menutab = document.getElementById('sub-menu');
    if(menutab.className.includes('collapse')){
        menutab.className = "tab-menu";
    }else{
        menutab.className = "tab-menu collapse";
    }
};

var characterRegex = new RegExp('[a-z]')

function inputConvert(input) {
    var newValue = FormatCurrency(input.value);
    input.value = newValue;
}

function FormatCurrency(value) {
    var sValue = value.toString();
    try{
      var result = '';
      var sDec = '';
  
      var split = sValue.split(".");
      if(split.length > 1){
        if(IsNullOrEmpty(split[1]) === true){
          return sValue;
        }
        sDec = split[1].substring(0,4);
      }
      var intPart = split[0].split(",").join("");;
      var index = intPart.length - 1;
      var count = 0;
      while(index >= 0) {
        if(count == 3) {
          result =  intPart[index] + ',' + result;
          count = 1;
        }else{
          result = intPart[index] + result;
          count++;
        }
  
        index--;
      }
      if(IsNullOrEmpty(sDec)){
        return result;
      }
      return result + '.' + sDec;
    }catch{
      return sValue;
    }
  }
  function IsNullOrEmpty(value){
    if(value === undefined || value === null || value === "") {
      return true;
    }
    return false;
  }