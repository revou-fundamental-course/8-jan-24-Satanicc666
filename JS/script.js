const inputfield = document.getElementById("squareside")
const Countbutton = document.getElementById("Countbutton")

inputfield.addEventListener('input', function() {
    const inputvalue = inputfield.value.trim()
    if(validateinput(inputvalue)) {
        Countbutton.disabled = false
    } else {
        Countbutton.disabled = true
    }
})

function validateinput(input) {
    const interRegex = /^-?\d+$/;
    return interRegex.test (input)
}
    

