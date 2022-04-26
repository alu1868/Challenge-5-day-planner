// DISPLAY CURRENT DAY
function displayDate() {
    var currentDay = new Date();;
    document.getElementById("currentDay").innerText = currentDay
}


// DISPLAY COLORS

// SAVE BUTTON FUNCTIONALITY


function saveTask() {
    console.log('save button works');
}

document.getElementById('saveBtn').addEventListener("click", saveTask)


// PULL FROM LOCAL STORAGE


// RUN FUNCTIONS
displayDate();