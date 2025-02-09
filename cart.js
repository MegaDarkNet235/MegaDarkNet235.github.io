document.addEventListener('DOMContentLoaded', function() {
    let cart = []; // Здесь будет храниться информация о товарах в корзине
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
  
    function displayCartItems() {
      cartItemsContainer.innerHTML = ''; // Очищаем содержимое контейнера
      let total = 0; // Переменная для хранения общей суммы
  
      if (cart.length === 0) {
        cartItemsContainer.textContent = 'Корзина пуста';
        cartTotalElement.textContent = `Итого: ${total} руб.`;
        return;
      }
  
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = item; // Отображаем название товара
  
        cartItemsContainer.appendChild(cartItem);
  
        //Здесь нужна логика получения цены товара и добавления к общей сумме,
        //но без реальных данных о товарах это сложно реализовать
        total += 100; //Предположим, что каждый товар стоит 100 рублей
  
      });
      cartTotalElement.textContent = `Итого: ${total} руб.`;
    }
  
    // Загружаем данные из localStorage (если есть)
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
  
    // Выводим товары на страницу
    displayCartItems();
    updateCartCount();
  
      function updateCartCount() {
          const cartCount = document.getElementById('cart-count');
          cartCount.textContent = `Корзина (${cart.length})`;
      }
  });
 