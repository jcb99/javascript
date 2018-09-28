let addButton = document.getElementsByTagName("button");
addButton[0].onclick = function() {addLi()};

function addLi() {
    let ul = document.getElementById('incomplete-tasks');
    let li = document.createElement('li'); //Creates the child LI object

    //create the child input for checkbox
    let checkbox = document.createElement("input"); //this is for the checkbox

    //creates and sets the type attribute for the input getElementsByTagName
      checkbox.setAttribute("type", "checkbox");

    //Creates the child label object
    let label = document.createElement('label');

    let aName = document.getElementById("new-task").value.trim();

    let textbox = document.createElement("input");
    textbox.setAttribute("type", "text");

    //Create the child <button> for the edit addButton
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.onclick = function() {editLi(this)};
    editButton.innerHTML = "Edit"; //This sets the text in the button to say "Edit"

    //Create the child <button> for the delete addButton
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.setAttribute("onclick", "deleteLi(this)");
    deleteButton.innerHTML = "Delete";

    if (aName != "") {
      label.innerHTML=aName;

      //Append the child input checkbox to the li
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(textbox);
      li.appendChild(editButton);
      li.appendChild(deleteButton);

      ul.appendChild(li);
      document.getElementById('new-task').value = ''; //resets the textbox to blank so it doesn't hold the text typed from before
    }
  }

  function deleteLi(item) { //we can name the passed in value anything we want
    //Grab parent <ul>
      let ul = document.getElementById('incomplete-tasks');

    //figure out which li
      let child = item.parentNode; //this is the actual button itself that is being grabbed and getting the parent of the button

    //remove child
      ul.removeChild(child);
  }

  function editLi(item) {
    //Figure out whcih li to change
    let li = item.parentNode;

    //change the li class to edit
    li.setAttribute("class", "editMode");

    //Get the innerHTML of the label
    let labeltext = li.childNodes[1].innerHTML;

    //Put the labels text into the value of the textbox
    li.childNodes[2].setAttribute("value", labeltext);



  }
