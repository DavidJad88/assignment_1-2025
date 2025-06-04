import filmImageArray from "../data/filmImageArray";
const displayContainer = document.querySelector(".display-container");

const renderFilms = (films) => {
  console.log(films);

  films.forEach((film) => {
    const filmId = Number(film.uid || film.episode_id);
    const filmImage = filmImageArray.find((img) => img.id === filmId);
    //creating elements

    const card = document.createElement("li");
    const cardImageContainer = document.createElement("div");
    const cardContentContainer = document.createElement("div");

    const cardImage = document.createElement("img");
    cardImage.src = filmImage.imageUrl;
    cardImage.alt = film.name;

    const yearAndDate = new Date(
      film.release_date || film.properties.release_date
    );
    const formattedDate = yearAndDate.toLocaleString("en-us", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("description-container");
    const directorContainer = document.createElement("div");
    directorContainer.classList.add("description-container");
    const producerContainer = document.createElement("div");
    producerContainer.classList.add("description-container");
    const premiereContainer = document.createElement("div");
    premiereContainer.classList.add("description-container");
    const releaseDateContainer = document.createElement("div");
    releaseDateContainer.classList.add("description-container");
    const episodeContainer = document.createElement("div");
    episodeContainer.classList.add("description-container");

    const titleHeader = document.createElement("h3");
    titleHeader.textContent = "Title";
    const directorHeader = document.createElement("h3");
    directorHeader.textContent = "Directed By";
    const producerHeader = document.createElement("h3");
    producerHeader.textContent = "Produced By";
    const releaseDateHeader = document.createElement("h3");
    releaseDateHeader.textContent = "Release Date";
    const episodeHeader = document.createElement("h3");
    episodeHeader.textContent = "Episode #";

    const titleDescription = document.createElement("p");
    titleDescription.textContent = film.title || film.properties.title;
    const directorDescription = document.createElement("p");
    directorDescription.textContent = film.director || film.properties.director;
    const producerDescription = document.createElement("p");
    producerDescription.textContent = film.producer || film.properties.producer;
    const releaseDateDescription = document.createElement("p");
    releaseDateDescription.textContent = `${formattedDate}`;
    const episodeDescription = document.createElement("p");
    episodeDescription.textContent =
      film.episode_id || film.properties.episode_id;

    //applying classes
    card.classList.add("display-card");
    cardImageContainer.classList.add("card__image-container");
    cardContentContainer.classList.add("card__content-container");

    //appending elements
    displayContainer.append(card);
    card.append(cardImageContainer, cardContentContainer);
    cardImageContainer.append(cardImage);
    cardContentContainer.append(
      titleContainer,
      directorContainer,
      premiereContainer,
      releaseDateContainer,
      episodeContainer,
      producerContainer
    );
    titleContainer.append(titleHeader, titleDescription);
    directorContainer.append(directorHeader, directorDescription);
    producerContainer.append(producerHeader, producerDescription);
    releaseDateContainer.append(releaseDateHeader, releaseDateDescription);
    episodeContainer.append(episodeHeader, episodeDescription);
  });
};

export default renderFilms;
