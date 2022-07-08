// navbar:
const toggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".navmenu")

toggle.addEventListener("click", () => {
    navmenu.classList.toggle("visible");
});

// :::: JS Portfolio ::::
let list = document.querySelectorAll(".list");
let filter = document.querySelectorAll(".filter");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < filter.length; k++) {
      filter[k].classList.remove("active");
      filter[k].classList.add("hide");
      if (filter[k].getAttribute("data-item") == dataFilter) {
        filter[k].classList.remove("hide");
        filter[k].classList.add("active");
      }
    }
  });
}

itemBox.forEach(popup =>popup.addEventListener("click",()=>
{
  popup.classList.toggle("enlarge")
}
))
// :::: FIN JS Portfolio ::::
