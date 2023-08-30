// Arreglo de objetos que para productos de pastelería
const pastryProducts = [
    { id: 1, nombre: "torta de Chocolate", precio: 800 },
    { id: 2, nombre: "Cupcake de Vainilla", precio: 500 },
    { id: 3, nombre: "Galleta de Coco", precio: 200 },
  ];
  
  // Función para mostrar los productos en la página
  function displayProducts() {
          const productsContainer = document.getElementById("products");
        
          pastryProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `
              <h3>${product.nombre}</h3>
              <p>Precio: $${product.precio}</p>
              <button class="add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
            `;
            productsContainer.appendChild(productDiv);
          });
  
          // Recuperar productos del LocalStorage si están disponibles
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.forEach(item => addToCart(item.id));
  }
  
  // Función para agregar un producto al carrito
      function addToCart(productId) {
          const selectedProduct = pastryProducts.find(product => product.id === productId);
          if (selectedProduct) {
            const cartList = document.getElementById("cart");
            const cartItem = document.createElement("li");
            cartItem.textContent = `${selectedProduct.nombre} - $${selectedProduct.precio}`;
            cartList.appendChild(cartItem);
          }
  
          const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push({ id: productId });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  // Event listener para agregar productos al carrito
  document.addEventListener("click", event => {
    if (event.target.classList.contains("add-to-cart")) {
      const productId = parseInt(event.target.getAttribute("data-id"));
      addToCart(productId);
    }
  });
  
  // Mostrar los productos al cargar la página
  displayProducts();
  
  
  