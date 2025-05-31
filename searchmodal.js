 // Product data
 const productData = [
    {
        id: 1,
        brand: "Samsung",
        productName: "Samsung Galaxy S24 Ultra - 256GB Storage, 12GB RAM",
        price: 1199.99,
        discount: 15,
        inStock: true,
        sold: 1240,
        rating: 4.8,
        reviews: 342,
        region: "Toshkent",
        deliveryTime: "1-2 kun",
        isTopSeller: true,
        images: [
            "https://images.uzum.uz/cv43h2rvgbkm5ehi9g60/original.jpg"
        ],
    },
    {
        id: 2,
        brand: "Apple",
        productName: "iPhone 15 Pro Max - 512GB Storage, Titanium Design",
        price: 1299.99,
        discount: 10,
        inStock: true,
        sold: 980,
        rating: 4.9,
        reviews: 421,
        region: "Toshkent",
        deliveryTime: "1 kun",
        isTopSeller: true,
        images: [
            "https://images.uzum.uz/cvrta9ei4n37npao1slg/original.jpg"
        ],
    },
    {
        id: 3,
        brand: "Xiaomi",
        productName: "Xiaomi 13 Aerpods Pro - Wireless Bluetooth Earphones",
        price: 999.99,
        discount: 12,
        inStock: true,
        sold: 760,
        rating: 4.7,
        reviews: 215,
        region: "Samarqand",
        deliveryTime: "2-3 kun",
        isTopSeller: false,
        images: [
            "https://images.uzum.uz/ctk2sl4opsf31vcrhcl0/original.jpg"
        ],
    },
    {
        id: 4,
        brand: "Artel",
        productName: "Artel LED TV 55U700S - 55 inch 4K UHD Smart TV",
        price: 499.99,
        discount: 8,
        inStock: true,
        sold: 320,
        rating: 4.5,
        reviews: 87,
        region: "Farg'ona",
        deliveryTime: "3-5 kun",
        isTopSeller: true,
        images: [
            "https://images.uzum.uz/d0grjl33uvph509tpfrg/original.jpg"
        ],
    },
    {
        id: 5,
        brand: "Lenovo",
        productName: "Lenovo IdeaPad Slim 3 - Intel Core i5, 16GB RAM, 512GB SSD",
        price: 1999.99,
        discount: 15,
        inStock: true,
        sold: 180,
        rating: 4.9,
        reviews: 95,
        region: "Toshkent",
        deliveryTime: "1-2 kun",
        isTopSeller: false,
        images: [
            "https://images.uzum.uz/d0ac84tpb7f4kq78q0s0/original.jpg"
        ],
    },
    {
        id: 6,
        brand: "Nike",
        productName: "Nike Air Jordan 1 Retro High OG - Men's Basketball Shoes",
        price: 179.99,
        discount: 0,
        inStock: true,
        sold: 1240,
        rating: 4.8,
        reviews: 342,
        region: "Andijon",
        deliveryTime: "1 kun",
        isTopSeller: true,
        images: [
            "https://images.uzum.uz/d0pver33uvph509vrr70/original.jpg"
        ],
    }
];

// DOM elements
const searchField = document.getElementById('searchInput');
const resultsPopup = document.getElementById('searchPopup');
const resultsContainer = document.getElementById('resultsContainer');
const searchButton = document.querySelector('.search-button');

// Liked products array
let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

// Show results popup when input is focused
searchField.addEventListener('focus', () => {
    resultsPopup.classList.add('visible');
    showAllProducts();
});

// Hide results popup when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box-wrapper')) {
        resultsPopup.classList.remove('visible');
    }
});

// Search functionality
searchField.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();

    if (searchQuery.length > 0) {
        const filteredProducts = productData.filter(item =>
            item.productName.toLowerCase().includes(searchQuery) ||
            item.brand.toLowerCase().includes(searchQuery)
        );

        displayResults(filteredProducts);
    } else {
        showAllProducts();
    }
});

// Display all products
function showAllProducts() {
    displayResults(productData);
}

// Display search results
function displayResults(products) {
    resultsContainer.innerHTML = '';

    if (products.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results-msg">Hech qanday mahsulot topilmadi</div>';
        return;
    }

    products.forEach(product => {
        const discountedPrice = product.price * (1 - product.discount / 100);
        const isFavorite = favoriteProducts.includes(product.id);

        const itemElement = document.createElement('div');
        itemElement.className = 'result-item';
        itemElement.innerHTML = `
            <div class="product-card">
                <div class="product-image-box">
                    <img src="${product.images[0]}" alt="${product.productName}" class="product-img"
                        onerror="this.onerror=null;this.src='https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${product.id}">
                        <i class="${isFavorite ? 'ri-heart-fill' : 'ri-heart-line'}"></i>
                    </button>
                    ${product.isTopSeller ? '<div class="popular-badge">TOP</div>' : ''}
                </div>

                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.productName}</h3>

                    <div class="price-box">
                        <span class="new-price">$${discountedPrice.toFixed(2)}</span>
                        ${product.discount > 0 ? `<span class="old-price">$${product.price.toFixed(2)}</span>` : ''}
                        ${product.discount > 0 ? `<span class="discount-tag">-${product.discount}%</span>` : ''}
                    </div>

                    <div class="delivery-info">
                        <i class="ri-truck-line"></i>
                        <span>${product.deliveryTime}</span>
                    </div>

                    <div class="rating-box">
                        <div class="stars">
                            ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}
                        </div>
                        <span class="rating-count">${product.rating.toFixed(1)}</span>
                        <span class="sales-info">(${product.reviews})</span>
                    </div>

                    <div class="sales-info">
                        <div class="cart-btn" data-id="${product.id}">
                            <i class="ri-shopping-basket-2-line"></i>
                        </div>
                        <span>${product.sold} sotilgan</span>
                    </div>
                </div>
            </div>
        `;

        resultsContainer.appendChild(itemElement);
    });

    // Add event listeners to favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            toggleFavorite(productId, btn);
        });
    });

    // Add event listeners to cart buttons
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            const product = productData.find(p => p.id === productId);
            if (product) {
                alert(`${product.productName} savatchaga qo'shildi!`);
            }
        });
    });
}

// Toggle favorite status
function toggleFavorite(productId, button) {
    const index = favoriteProducts.indexOf(productId);

    if (index === -1) {
        favoriteProducts.push(productId);
        button.classList.add('active');
        button.innerHTML = '<i class="ri-heart-fill"></i>';
    } else {
        favoriteProducts.splice(index, 1);
        button.classList.remove('active');
        button.innerHTML = '<i class="ri-heart-line"></i>';
    }

    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
}

// Initialize with all products
showAllProducts();