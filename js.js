document.addEventListener("DOMContentLoaded", () => {
const containerGen = document.getElementById("containerGen");
const botonBuscar = document.getElementById("botonBuscar");
const contenedorNombre = document.getElementById("contenedorNombre");
const contenedorIngredientes = document.getElementById("contenedorIngredientes");
const contenedorPrep = document.getElementById("contenedorPrep");
const contenedorImg = document.getElementById("imagenDeMuestra");


botonBuscar.addEventListener("click", async () => {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const nombre = data.drinks[0].strDrink;
        console.log(nombre);

        const ingrediente1 = data.drinks[0].strIngredient1;
        console.log(ingrediente1);
        const ingrediente2 = data.drinks[0].strIngredient2;
        console.log(ingrediente2);
        const ingrediente3 = data.drinks[0].strIngredient3;
        console.log(ingrediente3);
        const ingrediente4 = data.drinks[0].strIngredient4;
        console.log(ingrediente4);
        const ingrediente5 = data.drinks[0].strIngredient5;
        console.log(ingrediente5);
        const ingrediente6 = data.drinks[0].strIngredient6;
        console.log(ingrediente6);
        const ingrediente7 = data.drinks[0].strIngredient7;
        console.log(ingrediente7);
        const ingrediente8 = data.drinks[0].strIngredient8;
        console.log(ingrediente8);
        const ingrediente9 = data.drinks[0].strIngredient9;
        console.log(ingrediente9);
        const ingrediente10 = data.drinks[0].strIngredient10;
        console.log(ingrediente10);
        const ingrediente11 = data.drinks[0].strIngredient11;
        console.log(ingrediente11);
        const ingrediente12 = data.drinks[0].strIngredient12;
        console.log(ingrediente12);
        const ingrediente13 = data.drinks[0].strIngredient13;
        console.log(ingrediente13);
        const ingrediente14 = data.drinks[0].strIngredient14;
        console.log(ingrediente14);
        const ingrediente15 = data.drinks[0].strIngredient15;
        console.log(ingrediente15);
        const megaIngrediente = [ingrediente1,ingrediente2,ingrediente3,ingrediente4,ingrediente5,ingrediente6,ingrediente7,ingrediente8,ingrediente9,ingrediente10,ingrediente11,ingrediente12,ingrediente13,ingrediente14,ingrediente15];
        const megaIngredienteFiltrado = megaIngrediente.filter(function(elemento) {
            return elemento !== null;
        })
        const megaIngredienteFinal = megaIngredienteFiltrado.join(", ");
        const ingridi = megaIngredienteFinal + ".";

        const instrucciones = data.drinks[0].strInstructions;
        console.log(instrucciones);

        const imagen = document.createElement("img");
        imagen.src= data.drinks[0].strDrinkThumb;
        imagen.width= 500;
        imagen.height= 400;
   
       

    contenedorNombre.innerHTML = nombre;
    contenedorIngredientes.innerHTML = "Ingredientes: " + ingridi;
    contenedorPrep.innerHTML = "Instrucciones: " + instrucciones;
    contenedorImg.innerHTML = '';
    contenedorImg.appendChild(imagen);

}
        
        catch(error){contenedorNombre.innerHTML = "Ups, parece que hubo un error, prueba otra vez"} 
    })
})   
