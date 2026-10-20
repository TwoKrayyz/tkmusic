const signupForm = document.getElementById("signupForm") as HTMLFormElement;

async function signupFormHandler(event: SubmitEvent) {
    event.preventDefault();

    const signupFormData = new FormData(signupForm);
    const username = signupFormData.get("username");
    const password = signupFormData.get("password");

    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

signupForm.addEventListener("submit", signupFormHandler);