document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'Товар 1',
            description: 'Описание товара 1',
            price: 100000,
            image: 'iphone.jpg',
            category: 'iphone'
        },
        {
            name: 'Товар 2',
            description: 'Описание товара 2',
            price: 150000,
            image: 'iphone.jpg',
            category: 'iphone'
        },
        {
            name: 'Товар 3',
            description: 'Описание товара 3',
            price: 180000,
            image: 'iphone.jpg',
            category: 'iphone'
        }
    ];

    const productsGrid = document.querySelector('.products-grid');
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');

    function renderProducts(productList) {
        productsGrid.innerHTML = ''; // Очищаем сетку товаров

        productList.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price} руб.</p>
                <button>В корзину</button>
            `;

            productsGrid.appendChild(productCard);
        });
    }

    function filterProducts(category) {
        if (category === 'all') {
            return products;
        } else {
            return products.filter(product => product.category === category);
        }
    }

    function sortProducts(productList, sortByValue) {
        switch (sortByValue) {
            case 'price-asc':
                return productList.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return productList.sort((a, b) => b.price - a.price);
            case 'name-asc':
                return productList.sort((a, b) => a.name.localeCompare(b.name));
            default:
                return productList;
        }
    }

    function updateProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedSort = sortBy.value;

        let filteredProducts = filterProducts(selectedCategory);
        let sortedProducts = sortProducts(filteredProducts, selectedSort);

        renderProducts(sortedProducts);
    }

    categoryFilter.addEventListener('change', updateProducts);
    sortBy.addEventListener('change', updateProducts);

    // Первоначальный рендеринг товаров
    updateProducts();
});
document.addEventListener("DOMContentLoaded", function() {
    // Добавьте существующий код из JS
    const products = [
      {
        name: 'Товар 1',
        description: 'Описание товара 1',
        price: 100000,
        image: 'iphone.jpg',
        category: 'iphone'
      },
      {
        name: 'Товар 2',
        description: 'Описание товара 2',
        price: 150000,
        image: 'iphone.jpg',
        category: 'iphone'
      },
      {
        name: 'Товар 3',
        description: 'Описание товара 3',
        price: 180000,
        image: 'iphone.jpg',
        category: 'iphone'
      }
    ];
    const productsGrid = document.querySelector(".products-grid");
    const searchInput = document.getElementById('search-input');
  
    function renderProducts(productList) {
      productsGrid.innerHTML = ""; // Очищаем сетку товаров
  
      productList.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
  
        productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p class="price">${product.price} руб.</p>
              <button>В корзину</button>
          `;
  
        productsGrid.appendChild(productCard);
      });
    }
  
    function searchProducts(searchTerm) {
          const searchTermLower = searchTerm.toLowerCase();
          return products.filter(product =>
              product.name.toLowerCase().includes(searchTermLower) ||
              product.description.toLowerCase().includes(searchTermLower)
          );
      }
  
    searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value;
      const searchedProducts = searchProducts(searchTerm);
      renderProducts(searchedProducts);
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // ... (код для добавления товаров на страницу, фильтрации, сортировки, поиска) ...

    let cart = []; // Массив для хранения товаров в корзине

    // Функция для обновления отображения количества товаров в корзине
    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = `Корзина (${cart.length})`;
    }

    // Функция для сохранения корзины в localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Функция для загрузки корзины из localStorage
    function loadCartFromLocalStorage() {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            updateCartCount();
        }
    }

    // Загружаем корзину при загрузке страницы
    loadCartFromLocalStorage();

    // Обработчик для кнопок "В корзину"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId); // Получаем ID товара

            // Добавляем ID товара в корзину
            cart.push(productId);

            // Сохраняем корзину в localStorage
            saveCartToLocalStorage();

            // Обновляем отображение количества товаров в корзине
            updateCartCount();
        });
    });

    // ... (Остальной код) ...
});
