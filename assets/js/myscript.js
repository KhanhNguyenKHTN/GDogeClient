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



  var domAridrop = document.getElementById('cart-airdrop');
  var domPreSale = document.getElementById('cart-sale');
  var domStaling = document.getElementById('cart-staking');
  var domBalance = document.getElementById('cart-balance');

  var domButtonAridrop = document.getElementsByClassName('aidrop-c');
  var domButtonPreSale = document.getElementsByClassName('sale-c');
  var domButtonStaling = document.getElementsByClassName('staking-c');
  var domButtonBalance = document.getElementsByClassName('balance-c');

  for (let index = 0; index < domButtonAridrop.length; index++) {
    const element = domButtonAridrop[index];
    element.onclick = function() {
      scrollTo(domAridrop.offsetTop);
    };
  }

  for (let index = 0; index < domButtonPreSale.length; index++) {
    const element = domButtonPreSale[index];
    element.onclick = function() {
      scrollTo(domPreSale.offsetTop);
    };
  }

  for (let index = 0; index < domButtonStaling.length; index++) {
    const element = domButtonStaling[index];
    element.onclick = function() {
      scrollTo(domStaling.offsetTop);
    };
  }
  for (let index = 0; index < domButtonBalance.length; index++) {
    const element = domButtonBalance[index];
    element.onclick = function() {
      scrollTo(domBalance.offsetTop);
    };
  }

  function scrollTo(pos){
    document.body.scrollTop = pos - 50;
    document.documentElement.scrollTop = pos- 50;
  }