const isResponsive = () => {
    let responsive = document.getElementById("dropdown-nav");
    if (responsive.className === "navbar") responsive.className += " " + "responsive";
    else responsive.className = "navbar";

}