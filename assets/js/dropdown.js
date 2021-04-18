// This function toggles the dropdowns open or closed
function toggleDropdown(event) {

    // Get the two dropdown menus and the header element and store them
    const dropdownWide = document.getElementsByClassName("dropdown-parent-wide");
    const dropdownCompact = document.getElementsByClassName("dropdown-parent-compact");
    const header = document.getElementById("header");

    // Check if the menu is currently open by checking the header width
    const open = (header.style.width === "75%");

    // Change the width of the side dropdown (Widescreen and Tablet)
    for (let i = 0; i < dropdownWide.length; i++) {
        const element = dropdownWide[i];

        element.style.width = open ? "0%" : "25%";
    }

    // Change the height of the top dropdown (Phone)
    for (let i = 0; i < dropdownCompact.length; i++) {
        const element = dropdownCompact[i];

        element.style.height = open ? "0%" : "100%";
    }

    // Set the width of the header
    header.style.width = open ? "100%" : "75%";

    // Get all of the icons that are used to open the dropdown
    const iconOpen = document.getElementsByClassName("btn-dropdown");

    // Hide the icons so the header doesn't look janky
    for (let i = 0; i < iconOpen.length; i++) {
        const element = iconOpen[i];
        
        element.style.setProperty("display", open ? "block" : "none");
    }

}