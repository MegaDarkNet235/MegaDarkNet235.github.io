document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'Товар 1',
            description: 'Описание товара 1',
            price: 100000,
            image: 'apple-iphone-14-plus-purple-1-1000x1000.jpg'
        },
        {
            name: 'Товар 2',
            description: 'Описание товара 2',
            price: 150000,
            image: 'apple-iphone-14-plus-purple-1-1000x1000.jpg'
        },
        {
            name: 'Товар 3',
            description: 'Описание товара 3',
            price: 180000,
            image: 'apple-iphone-14-plus-purple-1-1000x1000.jpg'
        }
    ];

    const productsGrid = document.querySelector('.products-grid');

    products.forEach(product => {
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
});
// В script.js добавьте код для фильтрации и сортировки

document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'iphone 1',
            description: 'Описание товара ',
            price: 100000,
            image: 'iphone.jpg',
            category: 'iphone'
        },
        {
            name: 'iphone 2',
            description: 'Описание товара 2',
            price: 150000,
            image: 'iphone.jpg',
            category: 'iphone'
        },
        {
            name: 'iphone 3',
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
// Добавьте JavaScript код для обработки добавления в корзину
document.addEventListener('DOMContentLoaded', function() {
    // ... (код для добавления товаров на страницу) ...

    let cart = [];

    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = `Корзина (${cart.length})`;
    }

    // Обработчик для кнопок "В корзину"
    const addToCartButtons = document.querySelectorAll('.product-card button');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Добавляем товар в корзину (пока просто номер товара)
            cart.push(index);
            updateCartCount();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (Код для добавления товаров на страницу и прочая логика) ...

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function searchProducts(searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTermLower) ||
            product.description.toLowerCase().includes(searchTermLower)
        );
    }

    function updateProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedSort = sortBy.value;
        const searchTerm = searchInput.value; // Получаем поисковый запрос

        let filteredProducts = filterProducts(selectedCategory);
        let searchedProducts = searchProducts(searchTerm);  // Фильтруем по поиску
        let sortedProducts = sortProducts(searchedProducts, selectedSort); // Сортируем

        renderProducts(sortedProducts);
    }

    searchButton.addEventListener('click', updateProducts);
    searchInput.addEventListener('input', updateProducts);  // Для поиска по мере ввода

    // ... (Остальной код) ...
});
