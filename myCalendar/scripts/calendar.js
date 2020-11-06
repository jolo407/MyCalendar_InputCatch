var isItImportant = false; //flag
var detailsVisible = true;
function toggleImportant() {
    if (isItImportant) {
        $("#iconImp").removeClass('fas').addClass('far');
        isItImportant = false;
    }
    else {
        $("#iconImp").removeClass('far').addClass('fas');
        isItImportant = true;
    }
}


function toggleDetails() {
    if (detailsVisible) {
        $("#section-form").hide();
        detailsVisible = false;
    }
    else {
        $("#section-form").show();
        detailsVisible = true;
    }
}


$("#btnShowDetails").click(function (event) {
    var x = $(this).text()
    if (x == "Hide details") {
        $(this).text("Show details").removeClass('far fa-eye-slash').addClass('fas fa-eye')
    }
    else {
        $(this).text("Hide details").addClass('far fa-eye-slash')
    }
})

function createTask() {
    //get values from inputs
    var title = $("#title").val();
    var dueDate = $("#date").val();
    var desc = $("#description").val();
    var location = $("#location").val()

    //apply validations
    if (title.length < 5) {
        $("#alertError").show();
        //start a timer to hide it
        //arrow function
        setTimeout(() => $("#alertError").hide(), 5000);
        return; //
    }

    //create an object
    var task = new Task(title, isItImportant, dueDate, desc, location);
    console.log(task);

    //send object to server
    console.log(task);
    //display tasks
    displayTask(task);
}

function displayTask(task) {
    var syntax =
        `<div class='task'>
        <i id="iconstar" class="far fa-star task-section"></i>
        <div class='task-desc'>
        <h5>${task.title}<h5>
        <label>${task.description}</label>
        </div>
        <label class='task-section'>${task.dueDate}</label>
        <label class='task-section'>${task.location}</label>
    </div>`;
    $("#pendingTasks").append(syntax);

}








function init() {
    console.log("My Calendar");

    toggleDetails();


    // load data
    //hook events
    $("#iconImp").click(toggleImportant);
    $("#btnShowDetails").click(toggleDetails);
    $("#btn-save").click(createTask);

    $("#alertError").hide();
}





window.onload = init;

/**
 *
 *
 * hide the alertError when page loads
 * show it when there is an error
 *
 * 
 * http requests
 * http methods
 * http status codes
 * 
 *
 *
 */