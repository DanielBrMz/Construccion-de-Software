(()=> {
  "use strict";
  
  let elementSelector = function(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element); 
    }

    return document.querySelectorAll(element);
  };

  let viewer = elementSelector("#viewer"),
    equals = elementSelector("#equals"),
    nums = elementSelector(".num"),
    ops = elementSelector(".ops"),
    theNum = "",
    oldNum = "", 
    resultNum, 
    operator; 

  let setNum = function() {
    if (resultNum) {
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else { 
      theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum;

  };

  let moveNum = function() {
    oldNum = theNum === "" ? oldNum : theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); 
  };

  let displayNum = function() {

    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum ?? "0");

    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

      case "inverse":
        resultNum = oldNum * -1;
        break;

      case "power":
        resultNum = Math.pow(oldNum, theNum);
        break;

      default:
        resultNum = theNum;
    }

    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)  && operator !== "percent") { 
        resultNum = "You broke it!";
      } else { 
        resultNum = "Look at what you've done";
        elelementSelector('#calculator').classList.add("broken");
        elementSelector('#reset').classList.add("show"); 
      }
    }

    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    let historyItem = document.createElement("li");
    historyItem.textContent = `${oldNum} ${operator} ${theNum} = ${resultNum}`;
    elementSelector("#history").appendChild(historyItem);

    oldNum = 0;
    theNum = resultNum;
  };

  let clear = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    elementSelector("#history").lastChild.remove();
  };

  let clearAll = function(){
    clear();
    elementSelector("#history").innerHTML = "";
  };

  for (var i = 0, l = nums.length; i < l; i++) nums[i].onclick = setNum;  
  for (var i = 0, l = ops.length; i < l; i++) ops[i].onclick = moveNum;

  equals.onclick = displayNum;

  elementSelector("#clear").onclick = clear;
  elementSelector("#clearall").onclick = clearAll;
})();