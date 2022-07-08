// navbar:
const toggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".navmenu")

toggle.addEventListener("click", () => {
    navmenu.classList.toggle("visible");
});

// :::: JS Portfolio ::::
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");
let img = document.querySelectorAll(".img");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");
      if (itemBox[k].getAttribute("data-item") == dataFilter) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

itemBox.forEach(popup =>popup.addEventListener("click",()=>
{
  popup.classList.toggle("active")
}
))
// :::: FIN JS Portfolio ::::
