const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`https://swapi.dev/api/${endpoint}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("failure in fetching from swapi");
  }
};

export default fetchData;
