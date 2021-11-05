let projects = document.querySelector(".projects");
projects.textContent = "Projects";


buttonElement = document.querySelector(".buttonBig");
buttonElement.onclick = function(e) {
    let titleName = document.querySelector(".titleName");
    titleName.style.color = "red";
    let buttonInnerText = document.querySelector("#button");
    buttonInnerText.innerHTML = "Emailed!";
}

