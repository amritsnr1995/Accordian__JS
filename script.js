const accordian__title = document.querySelectorAll(".accordian__title");
const accordian__Content = document.querySelectorAll(".accordian__Content");

accordian__title.forEach((el) => {
  el.addEventListener("click", (e) => {
    removeActive();
    el.nextElementSibling.classList.toggle("active");
  });
});

function removeActive() {
  const removeElement = document.querySelectorAll(".active");
  removeElement.forEach((el) => {
    el.classList.remove("active");
  });
}
