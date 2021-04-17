function toggleDropdown(event) {
    const dropdowns = document.getElementsByClassName("dropdown-parent");
    const header = document.getElementById("header");

    const open = (header.style.width === "75%");

    for (let i = 0; i < dropdowns.length; i++) {
        const element = dropdowns[i];

        element.style.width = open ? "0%" : "25%";
    }

    header.style.width = open ? "100%" : "75%";

    
    const iconOpen = document.getElementsByClassName("dropdown-icon-open");
    const iconClosed = document.getElementsByClassName("dropdown-icon-closed");

    for (let i = 0; i < iconOpen.length; i++) {
        const element = iconOpen[i];
        
        element.style.setProperty("display", open ? "none" : "block");
    }

    for (let i = 0; i < iconClosed.length; i++) {
        const element = iconClosed[i];
        
        element.style.setProperty("display", open ? "block" : "none");
    }
}