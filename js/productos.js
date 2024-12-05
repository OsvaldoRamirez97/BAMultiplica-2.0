// Función para obtener productos de una URL
async function fetchProducts(url) {
  try {
      const response = await fetch(url);
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

// Función para crear una tarjeta de producto
function createProductCard(product) {
  const productoDiv = document.createElement("div");
  const cuerpoTarjetaDiv = document.createElement("div");
  const imagenProductoElement = document.createElement("img");
  const nombreProductoElement = document.createElement("h2");
  const descripcionProductoElement = document.createElement("p");
  const botonTarjeta = document.createElement("button");

  productoDiv.setAttribute("class", "card ajusteDeTarjeta");
  imagenProductoElement.setAttribute("class", "imgTarjeta");
  cuerpoTarjetaDiv.setAttribute("class", "tarjeta");
  nombreProductoElement.setAttribute("class", "tituloTarjeta");
  descripcionProductoElement.setAttribute("class", "h-25 descripcion");
  botonTarjeta.setAttribute("class", "btn btn-primary btnColor botonTarjeta");

  imagenProductoElement.src = product.images[0];
  nombreProductoElement.textContent = product.title;
  descripcionProductoElement.textContent = product.description;
  botonTarjeta.textContent = "Ver más";

  productoDiv.appendChild(imagenProductoElement);
  productoDiv.appendChild(cuerpoTarjetaDiv);
  cuerpoTarjetaDiv.appendChild(nombreProductoElement);
  cuerpoTarjetaDiv.appendChild(descripcionProductoElement);
  cuerpoTarjetaDiv.appendChild(botonTarjeta);

  return productoDiv;
}

// Función para mostrar productos en el contenedor
function displayProducts(products) {
  const productosContainer = document.getElementById("productosContainer");
  productosContainer.innerHTML = ""; // Limpiar el contenedor

  products.forEach(product => {
      const productCard = createProductCard(product);
      productosContainer.appendChild(productCard);
  });
}

// Función para manejar el clic en una categoría
function setupCategoryListener(button, category, url) {
  button.addEventListener("click", async function () {
      document.getElementById("btnDesplegable").textContent = category;
      const products = await fetchProducts(url);
      displayProducts(products);
  });
}

// Configurar los escuchadores de eventos para las categorías
function setupCategoryFilters() {
  const celulares = document.getElementById("celulares");
  const notebooks = document.getElementById("notebooks");
  const perfumes = document.getElementById("perfumes");
  const muebles = document.getElementById("muebles");
  const mercado = document.getElementById("mercado");
  const decoracion = document.getElementById("decoracion");
  const todos = document.getElementById("todos");

  setupCategoryListener(celulares, "Celulares", "https://dummyjson.com/products/category/smartphones");
  setupCategoryListener(notebooks, "Notebooks", "https://dummyjson.com/products/category/laptops");
  setupCategoryListener(perfumes, "Perfumes", "https://dummyjson.com/products/category/fragrances");
  setupCategoryListener(muebles, "Cuidado de la piel", "https://dummyjson.com/products/category/furniture");
  setupCategoryListener(mercado, "Mercado", "https://dummyjson.com/products/category/groceries");
  setupCategoryListener(decoracion, "Decoración", "https://dummyjson.com/products/category/home-decoration");
  setupCategoryListener(todos, "Todos los productos", "https://dummyjson.com/products");
}

// Inicializar la página cargando todos los productos
async function initialize() {
  const products = await fetchProducts("https://dummyjson.com/products");
  displayProducts(products);
  setupCategoryFilters();
}

initialize();
