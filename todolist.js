let addButton = document.getElementsByTagName("button");
addButton[0].onclick = function() {addLi()};

function addLi() {
    let ul = document.getElementById('incomplete-tasks');
    let li = document.createElement('li'); //Creates the child LI object

    //create the child input for checkbox
    let checkbox = document.createElement("input"); //this is for the checkbox

    //creates and sets the type attribute for the input getElementsByTagName
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("onclick", "addComplete(this)")

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
      let li = item.parentNode;
      let ul = li.parentNode;

    //remove child
      ul.removeChild(li);
  }

  function editLi(item) {
    //Figure out whcih li to change
    let li = item.parentNode;

    //change the li class to edit
    li.setAttribute("class", "editMode");

    //Get the innerHTML of the label
    let labeltext = li.childNodes[1].innerHTML;

    let textBox = li.childNodes[2];

    //Put the labels text into the value of the textbox
    li.childNodes[2].setAttribute("value", labeltext);

    textBox.setAttribute("value", labeltext);

    //Change the edit button's text to save...
    item.innerHTML="Save";

    item.onclick = function() { saveLi(this) };
  }

  function saveLi(item){
    //remove edit mode class from the li
    let li = item.parentNode; //the button is being passed in...the parent node of the button is the li...the li is now having the class of edit mode removed
    li.removeAttribute("class", "editMode");

    //remove value of the textBox
    let textBoxVal = li.childNodes[2].value;

    //label's inner html needs to be changed to the value of the textBox
    li.childNodes[1].innerHTML=textBoxVal;

    //change innerhtml to say EDIT not SAVE
      item.innerHTML="Edit";

      item.onclick = function() { editLi(this)};
  }

  function addComplete(item){
    //Get the entire ul of the completed tasks
    let ul = document.getElementById("completed-tasks");

    //Get the li of the checkbox item
    let moveChild = item.parentNode;

    //Append child to the new ul
    ul.appendChild(moveChild);

    //set onclick event to addIncomplete
    item.onclick = function() { addIncomplete(this) };

  }

  function addIncomplete(item){
    //Get the entire ul of the completed tasks
    let ul = document.getElementById("incomplete-tasks");

    //Get the li of the checkbox item
    let moveChild = item.parentNode;

    //Append child to the new ul
    ul.appendChild(moveChild);

    //set onclick event to addComplete...If we check the box uncheck and then check it again
    item.onclick = function() { addComplete(this) };

  }
