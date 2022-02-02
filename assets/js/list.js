let input = document.querySelector(".form-control");
let ul = document.querySelector(".list-inline");
let warning = document.querySelector("p");

input.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    event.preventDefault();
    if (input.value == "") {
      return false;
    }

    let list = document.createElement("li");
    ul.append(list);
    list.classList.add("list-group-item");
    list.innerText = input.value;
    let icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-times");
    icon.style.float = "right";
    list.append(icon);

    icon.addEventListener("click", function () {
      list.remove();
    });
    input.value = "";
  }
});
