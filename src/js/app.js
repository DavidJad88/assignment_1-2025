import handleFetch from "./fetch/handleFetch.js";
handleFetch();

const links = document.querySelectorAll(".navbar-link");

//Event listeners

links.forEach((link) => {
  link.addEventListener("click", async (e) => {
    links.forEach((link) => {
      link.classList.remove("navbar-link--active");
    });

    e.target.classList.add("navbar-link--active");
    const currentId = e.target.id;

    await handleFetch(currentId);
  });
});
