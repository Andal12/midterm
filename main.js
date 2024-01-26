const form = document.querySelector("form")







form.addEventListener("submit", (e) => {

    e.preventDefault()



    const username = form.username.value
    const password = form.password.value
    const authenticated = authentication(username, password)

    if (authenticated) {
        window.location.href = "index1.html"
    } else {
        alert("Invalid username or password")

    }

})



// function for checking username and password



function authentication(username, password) {

    if (username === "Tup_Library" && password === "Student12345") {

        return true

    } else {

        return false

    }

}




