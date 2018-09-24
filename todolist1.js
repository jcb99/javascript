let addButton = document.getElementsByTagName("button");
  addButton[0].onclick = function() {addLi()};

  function addLi() {
      let ul = document.getElementById('incomplete-tasks');
      let li = document.createElement('li'); //Creates the child LI object

      //Creates the child label object
      let label = document.createElement('label');

      let numChildren = ul.children.length +1;
      let aName = document.getElementById("new-task").value.trim();*/

      if (aName != "") {
        li.setAttribute("id", "element" + numChildren);
        li.appendChild(document.createTextNode(aName));
        //label.appendChild(document.createTextNode(aName));
        //label.innerHTML = aName;
        ul.appendChild(li);
        document.getElementById('new-task').value = '';
      }
    }
