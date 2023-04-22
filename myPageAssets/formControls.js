

const $ = selector => document.querySelector(selector); 

/* This function creates new DOM element to display in the HTML, 
must wrap the <li> elements in the <ul> element to make it look proper on the browser, thats WHY it has to be done this way*/
const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul"); //Creates a new ul element in the HTML assigned to variable "ul"
    ul.classList.add("messages");            //takes ul and adds the class "messages to it"

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {                 //for loop declares "msg" and assignes it to each value of the "msgs" array
        const li = document.createElement("li");   //creates an <li> element and assigns it to "li" variable
        const text = document.createTextNode(msg); //creates a text node for "msg" variable and assigns it to the "text" variable
        li.appendChild(text);               //appends the text node as the childElement of the newly declared "li" variable
        ul.appendChild(li);                 //appends the newly declared "li" variable to the newly <ul> element stored in the "ul" variable
    }

    const node = $("form a");       // tis is where msgs will be inserted
    // if ul node isn't in document yet, add it
    
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

//-------------------------------------------------------------------------------------------

const processEntries = () => {
    //Assign variables to the form controls to control them to check for valid entries
    const email = $("#email_address");
    const phone = $("#phone");
    const comment = $("#comment");

    let text = comment.value.replace(/(\r\n|\n|\r)/gm,"")
    //assigns "text" variable to the text inside of the text area box id="comment" and checks for carriage returns on MAC OS, Windows, Linux, 
    //then replaces any carriage returns with empty string, before moving into the processing logic.
    

    // create array for error messages, this must be done this way so the DOM scripting with JavaScript can happen using a for loop to traverse the array
    const msgs = [];

    // check user entries for validity
    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";   
    } //(arrayName[arrayName.length] = <something> )this syntax will add whatever it equals as the last element of the array
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a mobile phone number."; 
    }
    if(text == "") {                //check the text area, after it is scanned by the replace() method for carriage returns which are invalid data.
        msgs[msgs.length] = "Please add a comment"
    }
    // submit the form or notify user of errors
    if (msgs.length == 0) {  // no error messages
        $("form").submit(); 
    } 
    else {
        displayErrorMsgs(msgs);     //calls the displayErrorMsgs function and passes the msgs array to it for dom scripting
    }
};
//-------------------------------------------------------------------------------------------
const resetForm = () => {
    $("form").reset();
    
    // remove error messages
    $("#Contact ul").remove();
    
    $("#email_address").focus();
};
//-------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#email_address").focus();   
});