// accordion

const accordions = document.querySelectorAll(".accordion__item h4");
const chev = document.querySelectorAll(".accordion__item h4 i");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.nextElementSibling.classList.toggle("open");
    accordion.querySelector("i").classList.toggle("open");
  });
});
chev.forEach((chevron) => {
  chevron.addEventListener("click", () => {
    chevron.classList.toggle("open");
    chevron
      .getElementsByClassName(".accordion__content")
      .classList.toggle("open");
  });
});

const starNav = document.querySelectorAll(".coffee_price");
const starContent = document.querySelectorAll(".coffee__content");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove("active");
  });
}
