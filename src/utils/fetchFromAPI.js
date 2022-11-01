const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// fetch(BASE_URL, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
