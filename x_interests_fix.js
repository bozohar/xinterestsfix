// Find all checkboxes within the div with the specified class
const checkboxes = document.querySelectorAll('.r-1ei5mc7');

checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
        checkbox.click();
    }
});
