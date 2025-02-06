// Пример данных о товарах (в реальном проекте данные должны подгружаться из базы данных или API)
const products = [
    { id: 1, name: 'Смартфон A', price: 20000, image: 'smartphone_a.jpg' },
    { id: 2, name: 'Ноутбук B', price: 50000, image: 'laptop_b.jpg' },
    { id: 3, name: 'Планшет C', price: 30000, image: 'tablet_c.jpg' }
  ];
  
  const productList = document.getElementById('product-list');
  const cartCount = document.getElementById('cart-count');
  let cart = [];
  
  // Функция для отображения товаров
  function displayProducts() {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Цена: ${product.price} руб.</p>
        <button onclick="addToCart(${product.id})">В корзину</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  // Функция для добавления товара в корзину
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      updateCartCount();
      alert(`Товар "${product.name}" добавлен в корзину!`);
    }
  }
  
  // Функция для обновления количества товаров в корзине
  function updateCartCount() {
    cartCount.textContent = cart.length;
  }
  
  // Загрузка товаров при загрузке страницы
  displayProducts();
  