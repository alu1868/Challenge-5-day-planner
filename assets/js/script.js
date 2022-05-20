// DISPLAY CURRENT DAY
function displayDate() {
    var currentDay = moment().format("MMM Do YYYY, h:mm:ss a")
    document.getElementById("currentDay").innerText = currentDay
}


// DISPLAY COLORS
function colorBar() {

}


// SAVE BUTTON FUNCTIONALITY
function EightAMSaveTask() {
    // check if button works
    console.log('save button works');
    var input = document.getElementById('8AMinput')
    // checks input value
    console.log('this is the input saved' +  input.value)
    localStorage.setItem('8AM', input.value)
}

function NineAMSaveTask() {
    var input = document.getElementById('9AMinput')
    localStorage.setItem('9AM', input.value)
}

function TenAMSaveTask() {
    var input = document.getElementById('10AMinput')
    localStorage.setItem('10AM', input.value)
}

function ElevenAMSaveTask() {
    var input = document.getElementById('11AMinput')
    localStorage.setItem('11AM', input.value)
}

function TwelvePMSaveTask() {
    var input = document.getElementById('12PMinput')
    localStorage.setItem('12PM', input.value)
}

function OnePMSaveTask() {
    var input = document.getElementById('1PMinput')
    localStorage.setItem('1PM', input.value)
}

function TwoPMSaveTask() {
    var input = document.getElementById('2PMinput')
    localStorage.setItem('2PM', input.value)
}

function ThreePMSaveTask() {
    var input = document.getElementById('3PMinput')
    localStorage.setItem('3PM', input.value)
}

function FourPMSaveTask() {
    var input = document.getElementById('4PMinput')
    localStorage.setItem('4PM', input.value)
}

function FivePMSaveTask() {
    var input = document.getElementById('5PMinput')
    localStorage.setItem('5PM', input.value)
}

    // EVENT LISTENERS
    document.getElementById('8AMsaveBtn').addEventListener("click", EightAMSaveTask)
    document.getElementById('9AMsaveBtn').addEventListener("click", NineAMSaveTask)
    document.getElementById('10AMsaveBtn').addEventListener("click", TenAMSaveTask)
    document.getElementById('11AMsaveBtn').addEventListener("click", ElevenAMSaveTask)
    document.getElementById('12PMsaveBtn').addEventListener("click", TwelvePMSaveTask)
    document.getElementById('1PMsaveBtn').addEventListener("click", OnePMSaveTask)
    document.getElementById('2PMsaveBtn').addEventListener("click", TwoPMSaveTask)
    document.getElementById('3PMsaveBtn').addEventListener("click", ThreePMSaveTask)
    document.getElementById('4PMsaveBtn').addEventListener("click", FourPMSaveTask)
    document.getElementById('5PMsaveBtn').addEventListener("click", FivePMSaveTask)


// PULL FROM LOCAL STORAGE
function pullstorage() {
    var EightAMLocalStorage = localStorage.getItem('8AM')
    document.getElementById('8AMinput').textContent = EightAMLocalStorage

    var NineAMLocalStorage = localStorage.getItem('9AM')
    document.getElementById('9AMinput').textContent = NineAMLocalStorage

    var TenAMLocalStorage = localStorage.getItem('10AM')
    document.getElementById('10AMinput').textContent = TenAMLocalStorage

    var ElevenAMLocalStorage = localStorage.getItem('11AM')
    document.getElementById('11AMinput').textContent = ElevenAMLocalStorage

    var TwelvePMLocalStorage = localStorage.getItem('12PM')
    document.getElementById('12PMinput').textContent = TwelvePMLocalStorage

    var OnePMLocalStorage = localStorage.getItem('1PM')
    document.getElementById('1PMinput').textContent = OnePMLocalStorage

    var TwoPMLocalStorage = localStorage.getItem('2PM')
    document.getElementById('2PMinput').textContent = TwoPMLocalStorage

    var ThreePMLocalStorage = localStorage.getItem('3PM')
    document.getElementById('3PMinput').textContent = ThreePMLocalStorage

    var FourPMLocalStorage = localStorage.getItem('4PM')
    document.getElementById('4PMinput').textContent = FourPMLocalStorage

    var FivePMLocalStorage = localStorage.getItem('5PM')
    document.getElementById('5PMinput').textContent = FivePMLocalStorage
}


// RUN FUNCTIONS
displayDate();
pullstorage();