let cards =document.getElementById("cards")


//creo el objeto menu//
class Menu{

    constructor(id, imagen, nombre, precio){
        this.id=id;
        this.nombre = nombre;
        this.imagen=imagen;
        this.precio = parseFloat(precio);
    }
}

//creo los diferentes menus//
const menu1 = new Menu(0, "/img/agua.jpg"  , "Agua mineral", 50)
const menu2 = new Menu(1, "/img/gaseosa.jpg"  , "Gaseosa", 60)
const menu3 = new Menu(2, "/img/cerveza.jpg"  , "Cerveza Brahama", 90)
const menu4 = new Menu(3, "/img/bombones.jpg"  , "Bombones", 100)
const menu5 = new Menu(4, "/img/almendrado.jpg"  , "Postre almendrado", 100)
const menu6 = new Menu(5, "/img/empanada_atun.jpg"  , "Empanada de atun", 80)
const menu7 = new Menu(6, "/img/empanada_carne.jpg"  , "Empanada de carne", 80)
const menu8 = new Menu(7, "/img/empanada_jamonyqueso.jpg"  , "Empanada de jamon y queso", 60)
const menu9 = new Menu(8, "/img/jamonymorron.jpg"  , "Pizza de jamon y morron", 200)
const menu10 = new Menu(9, "/img/muzzarella.jpg"  , "Muzzarella", 200)
const menu11 = new Menu(10, "/img/napolitana.jpg"  , "Pizza napolitna", 200)
const menu12 = new Menu(11, "/img/helado.jpg"  , "Helado", 200)




//hago un array con los menus//
let menus =[menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10, menu11, menu12]



menus.forEach(elemento => {

            cards.innerHTML+= `
                <div id= "${elemento.id}" class="card"> 
                <p> Nombre: ${elemento.nombre} </p> 
                <img src= "${elemento.imagen}" width="250px">
                <p> Precio: $${elemento.precio}</p> 
                <btn class="btn"> Añadir al carrito </btn>
                
                </div>
                ` 
        })
