import { coincidencias } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const arrObj = pokemon.pokemon;

// Esta función muestra los Pokemon, recorriendo un array con un for, con
// la condicional de la longitud exacta del array. Luego crea un contenedor
// donde se insertarán: el elemento imagen y los nodos de texto num y name
// que fueron creados también, mediante el método appendchild() estos
// son agregados al contenedor de cada pokemon. Esta funcion puede ser reutilizada.
const currentDiv = document.getElementById('contenedor');

const showPokemon = (array) => {
  currentDiv.innerHTML = '';
  let newDiv = '';
  for (let i = 0; i < array.length; i += 1) {
    const num = array[i].num;
    const img = array[i].img;
    const name = array[i].name;
    newDiv += `
    <div class = "contenedorPokemon">
      <a href="#" id="btnInfo">
       <p class ="enlace" > ${num} </p>
       <img class = "imgPokemon" src = ${img}>
      <p class ="enlace">${name}</p>
      </a>
    </div>
    `;
  }
  currentDiv.innerHTML = newDiv;
};
showPokemon(arrObj);

const buscarPokemon = document.getElementById('botonBuscar');

buscarPokemon.addEventListener('click', (event) => {
  event.preventDefault();
  let pokemonBuscado = document.getElementById('buscador').value;
  if (pokemonBuscado !== '') {
    currentDiv.innerHTML = '';
    showPokemon(coincidencias(arrObj, pokemonBuscado));
    pokemonBuscado = '';
  } else {
    currentDiv.innerHTML = 'No se encontraron coincidencias';
  }
});

// Mostrar la pokedex con la info del pokemon

const btnInfo = document.querySelector('#btnInfo');
const pokedex = document.querySelector('#overlay');

const showInfo = (array) => {
  let infoPok = '';
  for (let i = 0; i < array.length; i += 1) {
    const num = array[i].num;
    const img = array[i].img;
    const name = array[i].name;
    const weight = array[i].size.weight;
    const height = array[i].size.height;
    const generation = array[i].generation.name;
    const type = array[i].type;
    const maxCp = array[i].stats['max-cp'];
    const maxHp = array[i].stats['max-hp'];
    const resistant = array[i].resistant;
    const weaknesses = array[i].weaknesses;

    const dividir = (arr) => {
      let newDiv2 = '';
      for (let i = 0; i < arr.length; i += 1) {
        newDiv2 += `
          <div class="tipos">${arr[i]}</div>
        `;
      }
      return newDiv2;
    };

    infoPok = `
    <div class="pokedex" id="popup">
      <div class="pok_1"></div>
      <div class="pok_2"></div>
      <div class="pok_3">
        <div class="pok_3_1"></div>
        <div class="pok_3_2"></div>
      </div>
      <div class="pok_4">
        <button id="boton-exit"></button>
      </div>
      <div class="info">
        <div class="nameAndNum">
          <p class="text24"> ${name} </p>
          <p class="text24"> ${num} </p>
        </div>
        <div class="secondRow">
          <img class = "imgPokInfo" src = ${img}>
          <div class="moreInfo">
            <div class="weight">
              <img class="icono" src = "img/weight.svg">
              <p class="text18"> ${weight} </p>
            </div>
            <div class="height">
              <img class="icono" src = "img/height.svg">
              <p class="text18"> ${height} </p>
            </div>
            <div class="generation">
              <img class="rombo" src = "img/rombo.svg">
              <p class="text18"> ${generation} </p>
            </div>
            <div class="type">
              <img class="rombo" src = "img/rombo.svg">
              <p class="text18"> ${dividir(type)} </p>
            </div>
          </div>
        </div>
        <div class="thirdRow">
          <p class="text18">Máx</p>
          <img src = "img/glove.svg">
          <p class="text18"> ${maxCp} </p>
          <img src = "img/heart.svg">
          <p class="text18"> ${maxHp} </p>
        </div>
        <div class="fourthRow">
          <div class="resistant">
            <p class="text18">Resistencia</p>
            <div class="separar">${dividir(resistant)}</div>
          </div>
          <div class="weaknesses">
            <p class="text18">Debilidad</p>
            <div class="separar">${dividir(weaknesses)}</div>
          </div>
        </div>
      </div>
      
    </div>
    `;
  }
  pokedex.innerHTML = infoPok;
};
showInfo(arrObj);

btnInfo.addEventListener('click', (event) => {
  event.preventDefault();
  // const popup = document.getElementById('popup');
  pokedex.classList.add('mostrar');
  showInfo();
});

const botonExit = document.getElementById('boton-exit');
botonExit.addEventListener('click', () => {
  pokedex.classList.remove('mostrar');
});
