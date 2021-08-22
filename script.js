
const form = document.getElementById("email-form")
const input = document.getElementById("email-input")
const errMsg = document.getElementById("input-error")
input.addEventListener("invalid", () => {
    errMsg.style.display = "block";
    if (input.value === ""){
        errMsg.innerHTML = "Oops! Please add your email";
    }
    else {
        errMsg.innerHTML = "Oops! Please check your email";
    }
})
input.addEventListener("input", () => {
    errMsg.style.display = "none";
})
form.addEventListener("submit", (evt) => {
    console.log(evt)
    input.value = ""
    alert("Your form has been submitted")
    
})