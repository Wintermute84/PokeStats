let light = true
document.querySelector('.js-on-off-switch').addEventListener('click',()=>{
  if (light){
    document.querySelectorAll('.js-lights').forEach(el => {
      el.style.transition = "opacity 0.5s linear 0s";
      el.style.opacity = 0.5;
    });
    light = !light;
  }
  else{
    document.querySelectorAll('.js-lights').forEach(el => {
      el.style.transition = "opacity 0.5s linear 0s";
      el.style.opacity = 1;
    });
    light = !light;
  }
})


async function pokefetch(id) {
  try {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`);
    const pokemon = await response.json();
    return pokemon // Log the fetched data
  } catch (error) {
    alert("Error fetching Pokémon:");
  }
}

document.querySelector('.js-submit-button').addEventListener('click',async (event)=>{
  event.preventDefault();
  const name = document.querySelector('.input-box').value.toLowerCase()
  const pokem = await pokefetch(name);
  let typesw = ''
  pokem.types.forEach((type)=>{
    typesw+=type.type.name+' '
  })
  const details = `
                   <p class="pokemon-name">${pokem.name} #${pokem.id}</p>
                    <p class="pokemo-stats">Weight:${pokem.weight}  Height: ${pokem.height}</p>
                    <p>${typesw}</p>
                    <div class="pokemon-stats">
                      <div class="Base stats">Base</div>
                      <div class="Stats stats">Stats</div>
                      <div class="Stats stats">HP:</div>
                      <div class="Stats stats">${pokem.stats[0].base_stat}</div>
                      <div class="Stats stats">Attack:</div>
                      <div class="Stats stats">${pokem.stats[1].base_stat}</div>
                      <div class="Stats stats">Defense:</div>
                      <div class="Stats stats">${pokem.stats[2].base_stat}</div>
                      <div class="Stats stats">Sp. Attack:</div>
                      <div class="Stats stats">${pokem.stats[3].base_stat}</div>
                      <div class="Stats stats">Sp. Defense:</div>
                      <div class="Stats stats">${pokem.stats[4].base_stat}</div>
                      <div class="Stats stats">Speed:</div>
                      <div class="Stats stats">${pokem.stats[5].base_stat}</div>
                    </div>                      
  `
 document.querySelector('.pokemon-details').innerHTML = details
 document.querySelector('.pokemon-img').src=pokem.sprites.front_default
})