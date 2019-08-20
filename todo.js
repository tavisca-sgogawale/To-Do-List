var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
 var span = document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
 span.className = "close";
 span.appendChild(txt);
 myNodelist[i].appendChild(span);
}
 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
 close[i].onclick = function() {
 var div = this.parentElement;
 div.style.display = "none";
 }
}
function addTodoElement()
{   
    let inputTask = document.getElementById("todo-item").value;
    document.getElementById("todo-item").value= "";
    let node = document.createElement("li");                 // Create a <li> node
    node.id = "todoslist";
    if (inputTask ==='') alert("Write something")
    else node.innerText=inputTask;                              // Append the text to <li>
    document.getElementById("myUL").appendChild(node); 
    //document.getElementById("popupUL").appendChild(node);
    
}

function searchList() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('todo-item');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().startsWith(filter)) {
    li[i].style.display = "";
    } else {
    li[i].style.display = "none";
    }
    }
    document.getElementById("todo-item").value = "";
   }

function  autoPopup()
{
   let autopopupList= document.getElementsByClassName("todo-autosearch");
   for(let i of autopopupList)
   {
    i.style.display = "block"; 
   }
}