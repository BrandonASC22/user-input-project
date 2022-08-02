// ref for input, which maps user title input
let input = document.querySelector("#title_input");
// ref for main, which maps the name of the main title
let main = document.querySelector("#main_title");

// listens for title input
input.addEventListener('input', updateValue);

/** function that makes the title input the main title, which is called by the listener */
function updateValue(e) {
    main.textContent = e.target.value;
}

// ref for submit Btn
let submitBtn = document.getElementById('submit_button');

// listener that activates the event function when the button is clicked
submitBtn.addEventListener('click', submitForm);

/**submits the form to our server/API */
function submitForm(event) {
    //prevent form from doing default actions
    event.preventDefault();

    // get a ref to user data elements
    let titleInputElem = document.querySelector("#title_input");
    let nounElem = document.querySelector("#noun");
    let verbElem = document.querySelector("#verb");
    let adjectiveElem = document.querySelector("#adjective");

    // get the data the user entered
    let titleInput = titleInputElem.value;
    let noun = nounElem.value;
    let verb = verbElem.value;
    let adjective = adjectiveElem.value;

    // ref for form, which makes the form fill-in invisible after input and click of the submit button
    let form = document.querySelector('.form_container');
    // ref for story, which writes a message based off user input if all lines have inputs after the fill-in is invisible
    let story = document.querySelector('#story_result');

    // alert when input isn't there
    if(titleInput == "" || noun == "" || verb == "" || adjective == "") {
        alert("Please fill in all fields");
    }

    // actions for lines 36-39
    else {
        form.style.visibility = 'hidden';
        story.innerHTML = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;
    }
}
