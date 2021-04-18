function toggleDropdown(event) {
    const dropdownWide = document.getElementsByClassName("dropdown-parent-wide");
    const dropdownCompact = document.getElementsByClassName("dropdown-parent-compact");
    const header = document.getElementById("header");

    const open = (header.style.width === "75%");

    for (let i = 0; i < dropdownWide.length; i++) {
        const element = dropdownWide[i];

        element.style.width = open ? "0%" : "25%";
    }

    for (let i = 0; i < dropdownCompact.length; i++) {
        const element = dropdownCompact[i];

        element.style.height = open ? "0%" : "100%";
    }

    header.style.width = open ? "100%" : "75%";

    const iconOpen = document.getElementsByClassName("btn-dropdown");

    for (let i = 0; i < iconOpen.length; i++) {
        const element = iconOpen[i];
        
        element.style.setProperty("display", open ? "block" : "none");
    }

}