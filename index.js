function submitForm() {
    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const message = document.getElementById("inputMessage").value;

    console.log(name);
    console.log(email);
    console.log(message);
    
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputMessage").value = "";

    alert("Form submitted successfully");
}