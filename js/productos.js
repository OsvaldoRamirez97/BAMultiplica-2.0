function cambiarCategoria() {
  celulares.addEventListener("click", function () {
    btnDesplegable.textContent = "Celulares";

    fetch("https://dummyjson.com/products/category/smartphones")
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
  });

  notebooks.addEventListener("click", function () {
    btnDesplegable.textContent = `Notebooks`;

    fetch("https://dummyjson.com/products/category/laptops")
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
  });

  perfumes.addEventListener("click", function () {
    btnDesplegable.textContent = `Perfumes`;

    fetch("https://dummyjson.com/products/category/fragrances")
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
  });

  cuidadoPiel.addEventListener("click", function () {
    btnDesplegable.textContent = `Cuidado de la piel`;

    fetch("https://dummyjson.com/products/category/skincare")
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
  });

  mercado.addEventListener("click", function () {
    btnDesplegable.textContent = `Mercado`;

    fetch("https://dummyjson.com/products/category/groceries")
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
  });

  decoracion.addEventListener("click", function () {
    btnDesplegable.textContent = `Decoración`;

    fetch("https://dummyjson.com/products/category/home-decoration")
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
  });

  todos.addEventListener("click", function () {
    btnDesplegable.textContent = `Todos los productos`;

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
  });
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

  //Limpiando divs
  document.getElementById("productosContainer").innerHTML = "";

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
    productoDiv.setAttribute("id", "ajusteDeTarjeta");
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
