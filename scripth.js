// Hash function: Simple modulo 10 hash
function hash(value) {
    return value % 10;
}

function insertValue() {
    const input = document.getElementById("inputValue");
    const value = parseInt(input.value);

    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    // Get hash index
    const hashIndex = hash(value);
    const bucket = document.getElementById(`bucket-${hashIndex}`);

    // Create a new element to show the inserted value
    const span = document.createElement("span");
    span.innerHTML = value;

    // Add animation class for visual effect
    span.classList.add("insert-animation");

    // Insert the value in the corresponding bucket
    bucket.appendChild(span);

    // Clear the input field after insertion
    input.value = "";
}
