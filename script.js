// JavaScript for toggling visibility of sections
function toggleVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Enable dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Create a button to toggle dark mode
const darkModeButton = document.createElement('button');
darkModeButton.innerText = 'Toggle Dark Mode';
darkModeButton.onclick = toggleDarkMode;
document.body.insertBefore(darkModeButton, document.body.firstChild);
