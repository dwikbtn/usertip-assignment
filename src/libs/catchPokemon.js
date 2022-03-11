export const fetchPokemonApi = async () => {
  const randomChance = Math.floor(Math.random() * 100);

  let randomNumber;
  if (randomChance >= 50) {
    randomNumber = Math.floor(Math.random() * (399 - 1 + 1)) + 1;
  } else if (randomChance >= 30) {
    randomNumber = Math.floor(Math.random() * (799 - 400 + 1)) + 400;
  } else {
    randomNumber = Math.floor(Math.random() * (898 - 800 + 1)) + 800;
  }

  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
