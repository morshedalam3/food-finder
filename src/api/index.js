import axios from "axios";

const foodUrl = "https://forkify-api.herokuapp.com/api/search";

export async function getFood(search) {
  const response = await axios.get(`${foodUrl}?q=${search}`);
  return response;
}

export async function getFoodDetailsById(id) {
  const repositories = await axios.get(
    `https://forkify-api.herokuapp.com/api/get?rId=${id}`
  );
  return repositories;
}
