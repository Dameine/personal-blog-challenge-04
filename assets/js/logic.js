document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.toggle-switch input');

    // Initialize correct theme based on the toggle switch state
    updateTheme(toggleSwitch.checked);
    console.log(toggleSwitch.checked)

    toggleSwitch.addEventListener('change', function() {
        updateTheme(this.checked);
    });
});

function updateTheme(isDarkTheme) {
    console.log(isDarkTheme);
    console.log("Updating theme to:", isDarkTheme ? "Dark" : "Light");
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }

}
