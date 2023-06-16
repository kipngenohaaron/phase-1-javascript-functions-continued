// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  

  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
 
  const result = (function (baseNumber) {
    return baseNumber + 3;
  })(2);
  
  console.log(result); 

  function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  

  