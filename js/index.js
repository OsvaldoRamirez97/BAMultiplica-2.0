// Función para obtener datos de la API
async function fetchProducts() {
  try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
          throw new Error("Error de la respuesta");
      }
      const data = await response.json();
      return data.products;
  } catch (error) {
      console.error("Fetch error:", error);
      return [];
  }
}

// Función para crear un div de producto
function createProductCard(product) {
  const productoDiv = document.createElement("div");
  const cuerpoTarjetaDiv = document.createElement("div");
  const imagenProductoElement = document.createElement("img");
  const precioProductoElement = document.createElement("h2");
  const botonTarjeta = document.createElement("p");

  productoDiv.setAttribute("class", "card ajusteDeTarjeta");
  imagenProductoElement.setAttribute("class", "imgTarjeta");
  precioProductoElement.setAttribute("class", "tituloTarjeta");
  cuerpoTarjetaDiv.setAttribute("class", "card-body");
  botonTarjeta.setAttribute("class", "botonTarjeta");
  botonTarjeta.setAttribute("id", "botonTarjeta");

  imagenProductoElement.src = product.images[0];
  precioProductoElement.textContent = `$ ${product.price}`;
  botonTarjeta.textContent = `Envío gratis`;

  productoDiv.appendChild(imagenProductoElement);
  productoDiv.appendChild(cuerpoTarjetaDiv);
  cuerpoTarjetaDiv.appendChild(precioProductoElement);
  cuerpoTarjetaDiv.appendChild(botonTarjeta);

  return productoDiv;
}

// Función para mostrar productos filtrados
function displayFilteredProducts(products) {
  const productosContainer = document.getElementById("promociones");
  productosContainer.innerHTML = ''; // Limpiar el contenedor

  const productosFiltrados = products.filter(
      (producto) => producto.discountPercentage > 17
  );

  productosFiltrados.forEach((producto) => {
      const productCard = createProductCard(producto);
      productosContainer.appendChild(productCard);
  });
}

// Función para mostrar productos aleatorios
function displayRandomProducts(products) {
  const contenedores = [
      document.getElementById("visitadosRecientemente1"),
      document.getElementById("visitadosRecientemente2"),
      document.getElementById("visitadosRecientemente3")
  ];

  contenedores.forEach(contenedor => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const productCard = createProductCard(randomProduct);
      contenedor.appendChild(productCard);
  });
}

// Función principal para ejecutar la lógica
async function main() {
  const products = await fetchProducts();
  if (products.length) {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      document.getElementById('imgPortada').src = randomProduct.images[0];

      displayFilteredProducts(products);
      displayRandomProducts(products);
  }
}

// Ejecutar la función principal
main();
