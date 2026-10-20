const signupForm = document.getElementById("signupForm") as HTMLFormElement | null;

try {
    async function signupFormHandler(event: SubmitEvent) {
        event.preventDefault();

        if (!signupForm) return;

        const signupFormData = new FormData(signupForm);
        const username: FormDataEntryValue | null = signupFormData.get("username");
        const password: FormDataEntryValue | null = signupFormData.get("password");

        const signupPayload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        };

        fetch("/signup", signupPayload)
        .then(async response => await response.json())
        .catch(error => console.log(error));
    }

    signupForm?.addEventListener("submit", signupFormHandler);
} catch (error) {
    console.log(error);
}