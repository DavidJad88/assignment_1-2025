import planetsImageArray from "../data/planetImageArray";
const displayContainer = document.querySelector(".display-container");

const renderPlanets = (planets) => {
  planets.forEach((planet) => {
    //creating elements
    const planetImage = planetsImageArray.find(
      (img) => img.name === planet.name
    );
    const card = document.createElement("li");
    const cardImageContainer = document.createElement("div");
    const cardContentContainer = document.createElement("div");

    const cardImage = document.createElement("img");
    cardImage.src = planetImage.imageUrl;
    cardImage.alt = planet.name;

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("description-container");
    const climateContainer = document.createElement("div");
    climateContainer.classList.add("description-container");
    const terrainContainer = document.createElement("div");
    terrainContainer.classList.add("description-container");
    const populationContainer = document.createElement("div");
    populationContainer.classList.add("description-container");
    const gravityContainer = document.createElement("div");
    gravityContainer.classList.add("description-container");
    const diameterContainer = document.createElement("div");
    diameterContainer.classList.add("description-container");

    const nameHeader = document.createElement("h3");
    nameHeader.textContent = "Name";
    const climateHeader = document.createElement("h3");
    climateHeader.textContent = "Climate";
    const terrainHeader = document.createElement("h3");
    terrainHeader.textContent = "Terrain";
    const populationHeader = document.createElement("h3");
    populationHeader.textContent = "Population";
    const gravityHeader = document.createElement("h3");
    gravityHeader.textContent = "Gravity";
    const diameterHeader = document.createElement("h3");
    diameterHeader.textContent = "Diameter";

    const nameDescription = document.createElement("p");
    nameDescription.textContent = planet.name || "N/A";
    const climateDescription = document.createElement("p");
    climateDescription.textContent = planet.climate || "N/A";
    const terrainDescription = document.createElement("p");
    terrainDescription.textContent = planet.terrain || "N/A";
    const populationDescription = document.createElement("p");
    populationDescription.textContent = planet.population || "N/A";
    const gravtyDescription = document.createElement("p");
    gravtyDescription.textContent = planet.gravity || "N/A";
    const diameterDescription = document.createElement("p");
    diameterDescription.textContent = planet.diameter || "N/A";
    //applying classes
    card.classList.add("display-card");
    cardImageContainer.classList.add("card__image-container");
    cardContentContainer.classList.add("card__content-container");

    //appending elements
    displayContainer.append(card);
    card.append(cardImageContainer, cardContentContainer);
    cardImageContainer.append(cardImage);
    cardContentContainer.append(
      nameContainer,
      climateContainer,
      terrainContainer,
      populationContainer,
      gravityContainer,
      diameterContainer
    );
    nameContainer.append(nameHeader, nameDescription);
    climateContainer.append(climateHeader, climateDescription);
    terrainContainer.append(terrainHeader, terrainDescription);
    populationContainer.append(populationHeader, populationDescription);
    gravityContainer.append(gravityHeader, gravtyDescription);
    diameterContainer.append(diameterHeader, diameterDescription);
  });
};

export default renderPlanets;
