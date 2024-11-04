class Stack {
    constructor() {
        this.items = [];
    }

    // Push method
    push(element) {
        this.items.push(element);
    }

    // Pop method
    pop() {
        if (this.items.length === 0) return "Stack is empty!";
        return this.items.pop();
    }

    // Peek method
    peek() {
        if (this.items.length === 0) return "Stack is empty!";
        return this.items[this.items.length - 1];
    }

    // Display method
    display() {
        return this.items.length === 0 ? ["Stack is empty!"] : [...this.items].reverse();
    }
}

// Initialize the stack
const stack = new Stack();

// Add event functions for stack operations
function push() {
    const value = document.getElementById("stack-value").value;
    if (value) {
        stack.push(value);
        displayStack("push", value);
        document.getElementById("stack-value").value = "";
    } else {
        alert("Please enter a value to push onto the stack.");
    }
}

function pop() {
    const poppedValue = stack.pop();
    displayStack("pop", poppedValue);
    alert(poppedValue === "Stack is empty!" ? poppedValue : `Popped: ${poppedValue}`);
}

function peek() {
    const topValue = stack.peek();
    alert(topValue === "Stack is empty!" ? topValue : `Top: ${topValue}`);
}

function displayStack(action, value) {
    const stackContainer = document.getElementById("stack-container");

    // Create the stack element for animation
    const element = document.createElement("div");
    element.className = "stack-element";
    element.textContent = value;

    // Arrow element
    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.textContent = "↑";

    if (action === "push") {
        stackContainer.appendChild(element);
        stackContainer.appendChild(arrow);
    } else if (action === "pop") {
        const lastElement = stackContainer.querySelector(".stack-element");
        if (lastElement) {
            lastElement.style.animation = "fadeOut 0.5s forwards";
            lastElement.addEventListener("animationend", () => lastElement.remove());
        }
    }

    // Remove arrow after animation
    setTimeout(() => {
        if (stackContainer.contains(arrow)) {
            stackContainer.removeChild(arrow);
        }
    }, 500);
}
