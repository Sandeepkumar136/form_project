function myCodeGenratorFunction() {
    let codeOutput = document.getElementById("genrativenumber");
    let codeInput = document.getElementById("form-inputgen");
    let generatedCode = Math.floor(Math.random() * 99999) + 10000;
    codeOutput.innerHTML = generatedCode;

    // Add event listener to form submission
    document.getElementById("codeForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        if (codeOutput.innerHTML === codeInput.value) {
            alert("Code is Correct");
        } else {
            alert("Code is Wrong");
        }
    });

    return {
        generatedCode: generatedCode,
        userInput: codeInput.value
    };
}

myCodeGenratorFunction();
