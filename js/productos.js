function cambiarCategoria(){
  celulares.addEventListener("click", function(){
    btnDesplegable.textContent = `Celulares`;
  })

  notebooks.addEventListener("click", function(){
    btnDesplegable.textContent = `Notebooks`;
  })

  perfumes.addEventListener("click", function(){
    btnDesplegable.textContent = `Perfumes`;
  })

  cuidadoPiel.addEventListener("click", function(){
    btnDesplegable.textContent = `Cuidado de la piel`;
  })

  mercado.addEventListener("click", function(){
    btnDesplegable.textContent = `Mercado`;
  })

  decoracion.addEventListener("click", function(){
    btnDesplegable.textContent = `Decoración`;
  })

  todos.addEventListener("click", function(){
    btnDesplegable.textContent = `Todos los productos`
  })
}

fetch("https://dummyjson.com/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error de la respuesta");
    }
  })
  .then((data) => {
    traerProductos(data);
  })
  .catch((error) => console.error("Fetch error:", error));

function traerProductos(data) {
  const productos = data.products;
  const productosContainer = document.getElementById("productosContainer");

  productos.forEach((producto) => {
    const imagenProducto = producto.images[0];
    const nombreProducto = producto.title;
    const descripcionProducto = producto.description;

    // Crear elementos HTML dinámicamente
    const productoDiv = document.createElement("div");
    const cuerpoTarjetaDiv = document.createElement("div");
    const imagenProductoElement = document.createElement("img");
    const nombreProductoElement = document.createElement("h2");
    const descripcionProductoElement = document.createElement("p");
    const botonTarjeta = document.createElement("button");

    //Agregando clases y id's
    productoDiv.setAttribute("class", "card ajusteDeTarjeta");
    imagenProductoElement.setAttribute("class", "imgTarjeta");
    cuerpoTarjetaDiv.setAttribute("class", "card-body");
    nombreProductoElement.setAttribute("class", "tituloTarjeta");
    descripcionProductoElement.setAttribute("class", "h-25 descripcion");
    botonTarjeta.setAttribute("class", "btn btn-primary btnColor botonTarjeta");
    botonTarjeta.setAttribute("id", "boton");

    // Establecer atributos y contenido
    imagenProductoElement.src = imagenProducto;
    nombreProductoElement.textContent = nombreProducto;
    descripcionProductoElement.textContent = descripcionProducto;
    botonTarjeta.textContent = `Ver mas`;

    // Añadir elementos al contenedor
    productoDiv.appendChild(imagenProductoElement);
    productoDiv.appendChild(cuerpoTarjetaDiv);
    cuerpoTarjetaDiv.appendChild(nombreProductoElement);
    cuerpoTarjetaDiv.appendChild(descripcionProductoElement);
    productosContainer.appendChild(productoDiv);
    cuerpoTarjetaDiv.appendChild(botonTarjeta);
  });
}