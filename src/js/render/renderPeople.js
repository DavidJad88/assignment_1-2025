import peopleImageArray from "../data/peopleImageArray.js";
const displayContainer = document.querySelector(".display-container");

const renderPeople = (people) => {
  console.log(people);

  people.forEach((person) => {
    const personImage = peopleImageArray.find(
      (img) => img.name === person.name
    );

    //creating elements

    const card = document.createElement("li");
    const cardImageContainer = document.createElement("div");
    const cardContentContainer = document.createElement("div");

    const cardImage = document.createElement("img");
    cardImage.src = personImage.imageUrl;
    cardImage.alt = person.name;

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("description-container");
    const birthYearContainer = document.createElement("div");
    birthYearContainer.classList.add("description-container");
    const heightContainer = document.createElement("div");
    heightContainer.classList.add("description-container");
    const eyeColorContainer = document.createElement("div");
    eyeColorContainer.classList.add("description-container");
    const genderContainer = document.createElement("div");
    genderContainer.classList.add("description-container");
    const massContainer = document.createElement("div");
    massContainer.classList.add("description-container");

    const nameHeader = document.createElement("h3");
    nameHeader.textContent = "Name";
    const birthYearHeader = document.createElement("h3");
    birthYearHeader.textContent = "Birth Year";
    const heightHeader = document.createElement("h3");
    heightHeader.textContent = "Height";
    const eyeColorHeader = document.createElement("h3");
    eyeColorHeader.textContent = "Eye Color";
    const genderHeader = document.createElement("h3");
    genderHeader.textContent = "Gender";
    const massHeader = document.createElement("h3");
    massHeader.textContent = "Mass";

    const nameDescription = document.createElement("p");
    nameDescription.textContent = person.name || "N/A";
    const birthYearDescription = document.createElement("p");
    birthYearDescription.textContent = person.birth_year || "N/A";
    const heightDescription = document.createElement("p");
    heightDescription.textContent = person.height || "N/A";
    const eyeColorDescription = document.createElement("p");
    eyeColorDescription.textContent = person.eye_color || "N/A";
    const genderDescription = document.createElement("p");
    genderDescription.textContent = person.gender || "N/A";
    const massDescription = document.createElement("p");
    massDescription.textContent = person.mass || "N/A";
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
      birthYearContainer,
      heightContainer,
      eyeColorContainer,
      genderContainer,
      massContainer
    );
    nameContainer.append(nameHeader, nameDescription);
    birthYearContainer.append(birthYearHeader, birthYearDescription);
    heightContainer.append(heightHeader, heightDescription);
    eyeColorContainer.append(eyeColorHeader, eyeColorDescription);
    genderContainer.append(genderHeader, genderDescription);
    massContainer.append(massHeader, massDescription);
  });
};

export default renderPeople;
