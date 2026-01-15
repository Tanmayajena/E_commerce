const products = [
    { id: 1, name: "Smartphone", price: 15000, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Laptop", price: 45000, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Headphones", price: 2000, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Smart Watch", price: 3500, image: "https://via.placeholder.com/200" }
  ];
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  /* ---------- HOME PAGE ---------- */
  const productList = document.getElementById("productList");
  
  if (productList) {
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  }
  
  /* ---------- CART PAGE ---------- */
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  
  if (cartItems) {
    let total = 0;
    cartItems.innerHTML = "";
  
    cart.forEach((item, index) => {
      total += item.price;
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeItem(${index})">Remove</button>
      `;
      cartItems.appendChild(div);
    });
  
    totalPrice.textContent = "Total: ₹" + total;
  }
  
  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  }
  