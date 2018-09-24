let addButton = document.getElementsByTagName("button");
addButton[0].onclick = function() {addLi()};

function addLi() {
    let ul = document.getElementById('incomplete-tasks');
    let li = document.createElement('li'); //Creates the child LI object

    //Creates the child label object
    let label = document.createElement('label');
    let aName = document.getElementById("new-task").value.trim();

    if (aName != "") {
      label.innerHTML=aName;
      li.appendChild(label);
      ul.appendChild(li);
    }
  }
