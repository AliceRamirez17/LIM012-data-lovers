import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const listado = pokemon;
//console.log(listado.pokemon[1].name);
//console.log(listado.pokemon[1].type);

//console.log(Object.keys(listado.pokemon));

listado.pokemon.forEach((element, index)=>{

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'contenedorPokemon');

    // img
    const newImg = document.createElement('img');
    newImg.setAttribute("src", listado.pokemon[index].img);
    newImg.setAttribute('class', 'imgPokemon');

    //name
    const newName = document.createTextNode(listado.pokemon[index].name);

    //numero
    const newNumber = document.createTextNode(listado.pokemon[index].num);

    newDiv.appendChild(newNumber);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newName);
    
  const currentDiv = document.getElementById('contenedor');
  currentDiv.appendChild(newDiv);
});

const formulario = document.querySelector('#buscar');
const boton = document.querySelector('#botonBuscar');

const busqueda = () => {
  const texto = formulario.value.toLowerCase();
    for(let listado of pokemon) {
    let nombre = pokemon.name.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
    }
  }
};

boton.addEventListener('click', busqueda);
