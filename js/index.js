fetch("https://dummyjson.com/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error de la respuesta");
    }
  })
  .then((data) => {
    filtrarProductos(data);
    productosRandom(data);
  })
  .catch((error) => console.error("Fetch error:", error));

function filtrarProductos(data) {
  const productos = data.products;
  const productosContainer = document.getElementById("promociones");
  const arrayProductos = [];

  productos.forEach((producto) => {
    arrayProductos.push(producto);
  });
  const productosFiltrados = arrayProductos.filter(
    (producto) => producto.discountPercentage > 17
  );

  productosFiltrados.forEach((producto) => {
    const imagenProducto = producto.images[1];
    const precioProducto = producto.price;

    // Crear elementos HTML dinámicamente
    const productoDiv = document.createElement("div");
    const cuerpoTarjetaDiv = document.createElement("div");
    const imagenProductoElement = document.createElement("img");
    const precioProductoElement = document.createElement("h2");
    const botonTarjeta = document.createElement("p");

    //Agregando clases y id's
    productoDiv.setAttribute("class", "card ajusteDeTarjeta");
    imagenProductoElement.setAttribute("class", "imgTarjeta");
    precioProductoElement.setAttribute("class", "tituloTarjeta");
    cuerpoTarjetaDiv.setAttribute("class", "card-body");
    botonTarjeta.setAttribute("class", "botonTarjeta");
    botonTarjeta.setAttribute("id", "botonTarjeta");

    // Establecer atributos y contenido
    imagenProductoElement.src = imagenProducto;
    precioProductoElement.textContent = `$ ${precioProducto}`;
    botonTarjeta.textContent = `Envío gratis`;

    // Añadir elementos al contenedor
    productoDiv.appendChild(imagenProductoElement);
    productoDiv.appendChild(cuerpoTarjetaDiv);
    cuerpoTarjetaDiv.appendChild(precioProductoElement);
    productosContainer.appendChild(productoDiv);
    cuerpoTarjetaDiv.appendChild(botonTarjeta);
  });
}

function productosRandom(data) {
  const random1 = Math.floor(Math.random() * data.products.length);
  const random2 = Math.floor(Math.random() * data.products.length);
  const random3 = Math.floor(Math.random() * data.products.length);

  const producto1 = data.products[random1];
  const producto2 = data.products[random2];
  const producto3 = data.products[random3];

  const contenedorVisitadosRecientemente = document.getElementById(
    "visitadosRecientemente1"
  );

  // Crear elementos HTML dinámicamente
  const productoDiv = document.createElement("div");
  const cuerpoTarjetaDiv = document.createElement("div");
  const imagenProductoElement = document.createElement("img");
  const precioProductoElement = document.createElement("h2");
  const botonTarjeta = document.createElement("p");

  //Agregando clases y id's
  productoDiv.setAttribute("class", "card ajusteDeTarjeta");
  imagenProductoElement.setAttribute("class", "imgTarjeta");
  precioProductoElement.setAttribute("class", "tituloTarjeta");
  cuerpoTarjetaDiv.setAttribute("class", "card-body");
  botonTarjeta.setAttribute("class", "botonTarjeta");
  botonTarjeta.setAttribute("id", "botonTarjeta");

  // Establecer atributos y contenido
  imagenProductoElement.src = producto1.images[0];
  precioProductoElement.textContent = `$ ${producto1.price}`;
  botonTarjeta.textContent = `Envío gratis`;

  // Añadir elementos al contenedor
  productoDiv.appendChild(imagenProductoElement);
  productoDiv.appendChild(cuerpoTarjetaDiv);
  cuerpoTarjetaDiv.appendChild(precioProductoElement);
  contenedorVisitadosRecientemente.appendChild(productoDiv);
  cuerpoTarjetaDiv.appendChild(botonTarjeta);

  const contenedorVisitadosRecientemente2 = document.getElementById(
    "visitadosRecientemente2"
  );

  // Crear elementos HTML dinámicamente
  const productoDiv2 = document.createElement("div");
  const cuerpoTarjetaDiv2 = document.createElement("div");
  const imagenProductoElement2 = document.createElement("img");
  const precioProductoElement2 = document.createElement("h2");
  const botonTarjeta2 = document.createElement("p");

  //Agregando clases y id's
  productoDiv2.setAttribute("class", "card ajusteDeTarjeta");
  imagenProductoElement2.setAttribute("class", "imgTarjeta");
  precioProductoElement2.setAttribute("class", "tituloTarjeta");
  cuerpoTarjetaDiv2.setAttribute("class", "card-body");
  botonTarjeta2.setAttribute("class", "botonTarjeta");
  botonTarjeta2.setAttribute("id", "botonTarjeta");

  // Establecer atributos y contenido
  imagenProductoElement2.src = producto2.images[0];
  precioProductoElement2.textContent = `$ ${producto2.price}`;
  botonTarjeta2.textContent = `Envío gratis`;

  // Añadir elementos al contenedor
  productoDiv2.appendChild(imagenProductoElement2);
  productoDiv2.appendChild(cuerpoTarjetaDiv2);
  cuerpoTarjetaDiv2.appendChild(precioProductoElement2);
  contenedorVisitadosRecientemente2.appendChild(productoDiv2);
  cuerpoTarjetaDiv2.appendChild(botonTarjeta2);

  const contenedorVisitadosRecientemente3 = document.getElementById(
    "visitadosRecientemente3"
  );

  // Crear elementos HTML dinámicamente
  const productoDiv3 = document.createElement("div");
  const cuerpoTarjetaDiv3 = document.createElement("div");
  const imagenProductoElement3 = document.createElement("img");
  const precioProductoElement3 = document.createElement("h2");
  const botonTarjeta3 = document.createElement("p");

  //Agregando clases y id's
  productoDiv3.setAttribute("class", "card ajusteDeTarjeta");
  imagenProductoElement3.setAttribute("class", "imgTarjeta");
  precioProductoElement3.setAttribute("class", "tituloTarjeta");
  cuerpoTarjetaDiv3.setAttribute("class", "card-body");
  botonTarjeta3.setAttribute("class", "botonTarjeta");
  botonTarjeta3.setAttribute("id", "botonTarjeta");

  // Establecer atributos y contenido
  imagenProductoElement3.src = producto3.images[0];
  precioProductoElement3.textContent = `$ ${producto3.price}`;
  botonTarjeta3.textContent = `Envío gratis`;

  // Añadir elementos al contenedor
  productoDiv3.appendChild(imagenProductoElement3);
  productoDiv3.appendChild(cuerpoTarjetaDiv3);
  cuerpoTarjetaDiv3.appendChild(precioProductoElement3);
  contenedorVisitadosRecientemente3.appendChild(productoDiv3);
  cuerpoTarjetaDiv3.appendChild(botonTarjeta3);
}
