fetch("https://dummyjson.com/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    traerProductos(data);
    listaProductos(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function traerProductos(data) {
  const producto = data.products[0];
  const producto2 = data.products[1];
  const producto3 = data.products[2];
  const producto4 = data.products[3];
  const producto5 = data.products[4];
  const producto6 = data.products[5];

  // Imagen del Producto
  const imagenProducto = producto.images[0];
  document.getElementById("imagenProducto").setAttribute ("src", imagenProducto);
  // Nombre del Producto
  const nombreProducto = producto.title;
  document.getElementById("producto").innerHTML = nombreProducto;
  //  Descripción del producto
  const descripcionProducto = producto.description;
  document.getElementById("descripcion").innerHTML = descripcionProducto;

  
  // Imagen del Producto
  const imagenProducto2 = producto2.images[0];
  document.getElementById("imagenProducto2").setAttribute ("src", imagenProducto2);
  // Nombre del Producto
  const nombreProducto2 = producto2.title;
  document.getElementById("producto2").innerHTML = nombreProducto2;
  //  Descripción del producto
  const descripcionProducto2 = producto2.description;
  document.getElementById("descripcion2").innerHTML = descripcionProducto2;


   // Imagen del Producto
   const imagenProducto3 = producto3.images[0];
   document.getElementById("imagenProducto3").setAttribute ("src", imagenProducto3);
   // Nombre del Producto
   const nombreProducto3 = producto3.title;
   document.getElementById("producto3").innerHTML = nombreProducto3;
   //  Descripción del producto
   const descripcionProducto3 = producto3.description;
   document.getElementById("descripcion3").innerHTML = descripcionProducto3;


   // Imagen del Producto
   const imagenProducto4 = producto4.images[0];
   document.getElementById("imagenProducto4").setAttribute ("src", imagenProducto4);
   // Nombre del Producto
   const nombreProducto4 = producto4.title;
   document.getElementById("producto4").innerHTML = nombreProducto4;
   //  Descripción del producto
   const descripcionProducto4 = producto4.description;
   document.getElementById("descripcion4").innerHTML = descripcionProducto4;


    // Imagen del Producto
    const imagenProducto5 = producto5.images[0];
    document.getElementById("imagenProducto5").setAttribute ("src", imagenProducto5);
    // Nombre del Producto
    const nombreProducto5 = producto5.title;
    document.getElementById("producto5").innerHTML = nombreProducto5;
    //  Descripción del producto
    const descripcionProducto5 = producto5.description;
    document.getElementById("descripcion5").innerHTML = descripcionProducto5;



     // Imagen del Producto
     const imagenProducto6 = producto6.images[0];
     document.getElementById("imagenProducto6").setAttribute ("src", imagenProducto6);
     // Nombre del Producto
     const nombreProducto6 = producto6.title;
     document.getElementById("producto6").innerHTML = nombreProducto6;
     //  Descripción del producto
     const descripcionProducto6 = producto6.description;
     document.getElementById("descripcion6").innerHTML = descripcionProducto6;
}
// https://dummyjson.com/products
