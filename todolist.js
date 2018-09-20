let addButton = document.getElementsByTagName("button");
addButton[0].onclick = function() {addLi()};

function addLi() {
    let ul = document.getElementById('incomplete-tasks');
    let li = document.createElement('li');
    let numChildren = ul.children.length +1;
    let aName = document.getElementById("new-task").value.trim();

    if (aName != "") {
      li.setAttribute("id", "element" + numChildren);
      li.appendChild(document.createTextNode(aName));
      ul.appendChild(li);
      document.getElementById('new-task').value = '';
    }
  }
