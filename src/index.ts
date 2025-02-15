import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";
const POKEMON_RESOURCE = "pokemon";

async function main() {
  const response = await axios({ url: `${BASE_URL}/${POKEMON_RESOURCE}` });
  console.log(response);
}

main().catch((error) => console.error(error));
