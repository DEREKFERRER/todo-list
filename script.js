let inputBar = document.getElementById("input");
let buttonTaskName = document.getElementById("Entertaskname");
let inputTaskName = document.getElementById("Nameoftask");
let ul = document.querySelector("ul")
let li = document.querySelector("li")



function inputLength() {
    return inputTaskName.value.length;
}

function createListElement() {
   

    let div = document.createElement("div");
    div.setAttribute('class', 'listTask');
    ul.appendChild(div);

    
    let div2 = document.createElement("div");
    div.setAttribute('id', 'buttons');
    div.appendChild(div2);

    /* let doneButton = document.createElement("button");
    doneButton.innerHTML = "done"; */
   /*  doneButton.setAttribute('id', 'doneButton'); */ // setAttribute means setting a "done" to id
   /* function toggleButton(){
       
    }
    doneButton.addEventListener("click", toggleButton); */

    let delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    
    function deleteItem() {
        
        let parentNode = div2.parentNode;
        parentNode.remove();
    }
    delButton.addEventListener('click', deleteItem);

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputTaskName.value));
    div.appendChild(li);
    div.appendChild(div2);
    div2.appendChild(delButton);
    inputTaskName.value = "" ; // to prevent the button to submit when the input tag has no value
    
   
}

function limits(event){
    event.preventDefault();
    const numInputs = document.querySelectorAll("ul .listTask > li").length;
    if (!numInputs < 4) {
     createListElement();
     inputTaskName.value = "";
    }else {
      alert ("You've reached a limits input!");
    }
    
}

function done(task) {
    if (task.target.tagName === "DIV") {
            task.target.classList.toggle("done");
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
  }

buttonTaskName.addEventListener("click", addListAfterClick);
inputTaskName.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", done)
inputBar.addEventListener("submit", limits)