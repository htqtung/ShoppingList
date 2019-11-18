var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var currentList = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createLiElement() {
  var li = document.createElement("li");
  li.classList.add("list-item");
  return li;
}

function createDeleteIconElement() {
  var del = document.createElement("i");
  del.innerHTML = "delete";
  del.setAttribute("onclick", "deleteItem(event)");
  del.classList.add("material-icons");
  return del;
}

function createTextElement() {
  var p = document.createElement("p");
  p.innerHTML = input.value;
  p.classList.add("list-item-text");
  p.addEventListener("click", toggleDoneStatusOnClick);
  return p;
}

function createListElement() {
  var li = createLiElement();
  var del = createDeleteIconElement();
  var p = createTextElement();

  li.appendChild(p);
  li.appendChild(del);
  ul.appendChild(li);
  input.value = "";
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

function toggleDoneStatusOnClick(event) {
  event.target.classList.toggle("done");
}

function deleteItem(event) {
  var item = event.target.parentElement;
  item.remove();
}

for (var i = 0; i < currentList.length; i++) {
  currentList[i].addEventListener("click", toggleDoneStatusOnClick);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
