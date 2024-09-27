import axios from "axios";

// Fetch all Magic cards (you can adjust the query as needed)
export function getMagicCards() {
  return axios
    .get("https://api.scryfall.com/cards/search?q=black+lotus")
    .then((res) => res.data.data);
}

// Fetch card details by id
export function getCardById(id) {
  return axios
    .get(`https://api.scryfall.com/cards/${id}`)
    .then((res) => res.data);
}