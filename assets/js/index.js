let closeOpenButton = document.querySelector(".fa-times")
let sidebar = document.querySelector(".sidebar")
let icon = document.querySelector(".fa")

closeOpenButton.addEventListener("click", function(){
    sidebar.classList.toggle("close-sidebar");
    icon.classList.toggle("fa-times");
    icon.classList.add("fa-chevron-circle-down");
    sidebar.style.transitionDuration = "1s";
})
