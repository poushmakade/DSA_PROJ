function insertValue() {
    const inputValue = document.getElementById("inputValue").value;
    const modulusValue = parseInt(document.getElementById("modulusValue").value);

    if (!isNaN(inputValue) && inputValue !== "") {
        const bucket = inputValue % modulusValue;
        const bucketDiv = document.getElementById(`bucket-${bucket}`);
        const valuesDiv = document.getElementById(`values-bucket-${bucket}`);

        if (bucketDiv && valuesDiv) {
            // Add animation for the bucket
            bucketDiv.classList.add("insert-animation");
            setTimeout(() => {
                bucketDiv.classList.remove("insert-animation");
            }, 800);

            // Display the inserted value in the values area for the bucket
            valuesDiv.textContent += ` ${inputValue}`;
        } else {
            alert("Bucket not available for selected modulus. Please try another modulus.");
        }
    } else {
        alert("Please enter a valid number.");
    }

    document.getElementById("inputValue").value = "";
}
