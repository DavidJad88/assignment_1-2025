const fetchData = async (endpoint) => {
  const extractTechResults = (data) => {
    if (Array.isArray(data.results)) {
      return data.results.map((item) => item.properties || item);
    }
    if (data.result && data.result.properties) {
      return [data.result.properties];
    }
    return [];
  };
  try {
    const response = await fetch(`https://swapi.dev/api/${endpoint}`);
    if (!response.ok) throw new Error("swapi.dev fetch failed");

    const data = await response.json();
    return data.result || data.results;
  } catch (error) {
    console.log("failure in fetching from swapi.dev");
    try {
      // Fallback to swapi.tech
      const response = await fetch(`https://swapi.tech/api/${endpoint}`);
      if (!response.ok) throw new Error("swapi.tech failed");
      const data = await response.json();
      console.log(data);

      return data.result || data.results;
    } catch (fallbackError) {
      console.log("Both swapi.dev and swapi.tech failed");
      return [];
    }
  }
};

export default fetchData;
