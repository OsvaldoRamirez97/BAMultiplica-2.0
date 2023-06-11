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

  // Imagen del Producto
  const imagenProducto = producto.images[0];
  document.getElementById("imagenProducto").setAttribute ("src", imagenProducto);
  // Nombre del Producto
  const nombreProducto = producto.title;
  document.getElementById("producto").innerHTML = nombreProducto;
  
  //  Descripción del producto
  const descripcionProducto = producto.description;
  document.getElementById("descripcion").innerHTML = descripcionProducto;
    
}
// https://dummyjson.com/products
