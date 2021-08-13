// var button =document.getElementById("button");
// var input =document.getElementById("userinput");
// var ul=document.querySelector("ul");


// button.addEventListener("click", function(){
// if(input.value.length > 0){
//     var li =document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }


// });

// input.addEventListener("keypress", function(event){
//     //console.log(event.which)
//      if(input.value.length > 0 && event.keyCode === 13){
//          var li =document.createElement("li");
//          li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//      }
    
    
//     });

//simplified the above commented code......

var button =document.getElementById("button");
var input =document.getElementById("userinput");
var ul=document.querySelector("ul");


function inputLengthCheck(){
return input.value.length;

}
function addNodeItem(){
var li =document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value = "";
var span = document.createElement("span");
var delbutton =document.createElement("button");
span.classList.add("wrapper");
delbutton.innerHTML ="Delete";
span.appendChild(delbutton);
li.appendChild(span);
delbutton.addEventListener("click",deleteParentNode)
}

function addItemOnClick(){
        if(inputLengthCheck() > 0){
           addNodeItem();
        }
}
function addItemOnKeyPress(event){
    
        //console.log(event.which)
         if(inputLengthCheck() > 0 && event.keyCode === 13){
            addNodeItem();
         }
}
function addDoneClassToggle(task){
if (task.target.tagName === "LI"){
            task.target.classList.toggle("done");
        }
}

function deleteParentNode(evt){
    evt.target.parentNode.parentNode.remove();
}
button.addEventListener("click", addItemOnClick);

input.addEventListener("keypress",addItemOnKeyPress );

ul.addEventListener("click",addDoneClassToggle);

getName();
console.log(x);
var x= 7;

function getName(){
	console.log("hello");
}


  
