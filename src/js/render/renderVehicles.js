import vehiclesImageArray from "../data/vehiclesImageArray";

const displayContainer = document.querySelector(".display-container");

const renderVehicles = (vehicles) => {
  console.log(vehicles);

  vehicles.forEach((vehicle) => {
    const vehicleImage = vehiclesImageArray.find(
      (img) => img.name === vehicle.name
    );

    //creating elements

    const card = document.createElement("li");
    const cardImageContainer = document.createElement("div");
    const cardContentContainer = document.createElement("div");

    const cardImage = document.createElement("img");
    cardImage.src = vehicleImage.imageUrl;
    cardImage.alt = vehicle.name;

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("description-container");
    const modelContainer = document.createElement("div");
    modelContainer.classList.add("description-container");
    const manufacturerContainer = document.createElement("div");
    manufacturerContainer.classList.add("description-container");
    const crewContainer = document.createElement("div");
    crewContainer.classList.add("description-container");
    const passengerContainer = document.createElement("div");
    passengerContainer.classList.add("description-container");
    const speedContainer = document.createElement("div");
    speedContainer.classList.add("description-container");

    const nameHeader = document.createElement("h3");
    nameHeader.textContent = "Name";
    const modelHeader = document.createElement("h3");
    modelHeader.textContent = "Model";
    const manufacturerHeader = document.createElement("h3");
    manufacturerHeader.textContent = "Manufacturer";
    const crewHeader = document.createElement("h3");
    crewHeader.textContent = "Crew Capacity";
    const passengerHeader = document.createElement("h3");
    passengerHeader.textContent = "Passenger Capacity";
    const speedHeader = document.createElement("h3");
    speedHeader.textContent = "Top Speed";

    const nameDescription = document.createElement("p");
    nameDescription.textContent = vehicle.name;
    const modelDescription = document.createElement("p");
    modelDescription.textContent = vehicle.model;
    const manufacturerDescription = document.createElement("p");
    manufacturerDescription.textContent = vehicle.manufacturer;
    const crewDescription = document.createElement("p");
    crewDescription.textContent = vehicle.crew;
    const passengerDescription = document.createElement("p");
    passengerDescription.textContent = vehicle.passengers;
    const speedDescription = document.createElement("p");
    speedDescription.textContent = vehicle.max_atmosphering_speed;

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
      modelContainer,
      manufacturerContainer,
      crewContainer,
      passengerContainer,
      speedContainer
    );
    nameContainer.append(nameHeader, nameDescription);
    modelContainer.append(modelHeader, modelDescription);
    manufacturerContainer.append(manufacturerHeader, manufacturerDescription);
    crewContainer.append(crewHeader, crewDescription);
    passengerContainer.append(passengerHeader, passengerDescription);
    speedContainer.append(speedHeader, speedDescription);
  });
};

export default renderVehicles;
