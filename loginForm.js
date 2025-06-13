function toggleLoginForm() {
    const form = document.getElementById("loginForm");
    form.classList.toggle("show");
<<<<<<< HEAD
    // Sakrij registracijsku formu ako je otvorena
    const regForm = document.getElementById("registerForm");
    regForm.style.display = "none";
}

function toggleRegisterForm() {
    const regForm = document.getElementById("registerForm");
    if (regForm.style.display === "block") {
        regForm.style.display = "none";
    } else {
        regForm.style.display = "block";
    }
    // Sakrij login formu ako je otvorena
    const loginForm = document.getElementById("loginForm");
    loginForm.classList.remove("show");
=======
>>>>>>> 4791afe2af7c1dbc3df74363c9cecf2828bf7b7a
}