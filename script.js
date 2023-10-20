document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput");
    const editableText = document.getElementById("editableText");
    const responseText = document.getElementById("responseText");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        const password = passwordInput.value;
        const content = encodeURIComponent(editableText.value);
        const url = `http://141.147.9.175:8000?password=${password}&content=${content}`;

        fetch(url)
            .then((response) => response.text())
            .then((data) => {
                responseText.innerHTML = data;
            })
            .catch((error) => {
                responseText.innerHTML = "Error: " + error;
            });
    });
});
