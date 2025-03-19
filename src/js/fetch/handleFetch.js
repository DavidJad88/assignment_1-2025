import fetchData from "./fetchData";
import renderFilms from "../render/renderFilms";
import renderPeople from "../render/renderPeople";
import renderVehicles from "../render/renderVehicles";
import renderPlanets from "../render/renderPlanets";

const displayContainer = document.querySelector(".display-container");

const handlefetch = async (fetchParameter) => {
  displayContainer.innerHTML = "";
  if (fetchParameter === "films") {
    const dataToRender = await fetchData(fetchParameter);
    renderFilms(dataToRender);
  } else if (fetchParameter === "people") {
    const dataToRender = await fetchData(fetchParameter);
    renderPeople(dataToRender);
  } else if (fetchParameter === "vehicles") {
    const dataToRender = await fetchData(fetchParameter);
    renderVehicles(dataToRender);
  } else if (fetchParameter === "planets") {
    const dataToRender = await fetchData(fetchParameter);
    renderPlanets(dataToRender);
  }
};

export default handlefetch;
