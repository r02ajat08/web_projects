const InputBox = document.getElementById("Input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(InputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
} 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();    
    }   
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();