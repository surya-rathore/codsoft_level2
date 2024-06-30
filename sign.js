
const btn = document.querySelector(".btn");
const nameField = document.querySelector("#name");
const ageField = document.querySelector("#age");
const phoneField = document.querySelector("#phone");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (nameField.value.trim() && ageField.value.trim() && phoneField.value.trim()) {
        
        window.location.assign("index.html");
    } else {
    
        alert("All fields are required!");
    }
});