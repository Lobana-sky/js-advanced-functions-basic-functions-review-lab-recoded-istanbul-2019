// Your code here
//---------
function saturdayFun(pass="roller-skate"){
  return `This Saturday, I want to ${pass}!`;
 
}
 console.log(saturdayFun());
 
//----------
let mondayWork=function(pass="go to the office")
{
  return `This Monday, I will ${pass}.`
}
mondayWork();
//----------


function wrapAdjective(str="*"){
  return function(pass="special"){
    return `You are ${str}${pass}${str}!`
  }
}

let encouragingPromptFunction = wrapAdjective("!!!");
wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"

//----------------------

 let Calculator={};
 