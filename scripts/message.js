function displayMessage(message, label = 'alert-info') {
    const main = document.querySelector('main');
    //main.textContent = message;

    // Concatenate Strings
    //main.innerHTML = '<p class="alert alert-info text-center">' + message + '</p>';

    //Template Literal Strings + Interpolacja
    main.innerHTML = `
       <p class="alert ${label} text-center">
       ${message}
       </p>
    `;
}

function displayErrorMessage(errorMessage)  {
    displayMessage(errorMessage, 'alert-danger');
}