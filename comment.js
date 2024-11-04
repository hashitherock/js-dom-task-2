/* --------------- input-area --------------- */   
let inputArea = document.getElementById("input-area");
/* inputArea.style.position = "absolute";
inputArea.style.bottom = "20px";
inputArea.style.left = "30px"; */

/* --------------- input --------------- */   
let inputField = document.getElementById("input");
inputField.style.border = "1px solid #DDDDDD";
inputField.style.borderRadius = "5px";
inputField.style.backgroundColor = "#F4F6FF";
inputField.style.padding = "8px 15px";
inputField.style.fontSize = "18px";
inputField.style.marginRight = "20px";

/* --------------- submit button --------------- */   
let submitBtn = document.getElementById("submit");
submitBtn.style.backgroundColor = "#FF00FF";
submitBtn.style.color = "white";
submitBtn.style.fontSize = "18px";
submitBtn.style.border = "none";
submitBtn.style.padding = "8px 15px";
submitBtn.style.borderRadius = "5px";

/* --------------- submit Event --------------- */ 
submitBtn.addEventListener("click", function () {
    let divComment = document.getElementById("comments");
    let inputValue = inputField.value;
    if(inputValue !== ""){
        let newComment = document.createElement("p");
        newComment.innerText = inputValue;
        divComment.appendChild(newComment);
        inputField.value = "";
    }    
  });
