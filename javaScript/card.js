 // Main Application
        class UzumMarket {
            constructor() {
                this.products = [];
                this.init();
            }

            async init() {
                // Load products from cache or API
                this.products = await this.loadProducts();

                // If we don't have 20 products, duplicate some to reach 20
                while (this.products.length < 20) {
                    this.products = this.products.concat(this.products.slice(0, 20 - this.products.length));
                }

                // Render the products
                this.renderProducts();

                // Set up event listeners
                this.setupEventListeners();
            }

            async loadProducts() {
                // Try to load from local storage first
                const cachedProducts = this.getFromStorage('products');
                const cacheTimestamp = this.getFromStorage('cacheTimestamp');

                // Use cache if it's less than 1 hour old
                if (cachedProducts && cacheTimestamp && (Date.now() - cacheTimestamp) < 3600000) {
                    return cachedProducts;
                }

                // Otherwise use our fallback data with real product images
                const products = this.getFallbackData();

                // Save to local storage
                this.saveToStorage('products', products);
                this.saveToStorage('cacheTimestamp', Date.now());

                return products;
            }

            getFallbackData() {
                return [
                    {
                        id: 1,
                        brand: "Samsung",
                        productName: "Samsung Galaxy S23 Ultra",
                        description: "Flagship smartphone with 200MP camera, S Pen support, and Snapdragon 8 Gen 2 processor. 6.8-inch Dynamic AMOLED 2X display with 120Hz refresh rate.",
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
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'
                        ]
                    },
                    {
                        id: 2,
                        brand: "Apple",
                        productName: "iPhone 15 Pro Max",
                        description: "Titanium design, A17 Pro chip, 48MP main camera, and USB-C. 6.7-inch Super Retina XDR display with ProMotion.",
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
                            'https://images.uzum.uz/d0d0oeon274j5sclj9k0/original.jpg',

                            'https://images.uzum.uz/cujomc6i4n324lr91fkg/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'
                        ]
                    },
                    {
                        id: 3,
                        brand: "Xiaomi",
                        productName: "Xiaomi 13 Pro",
                        description: "Leica co-engineered cameras, Snapdragon 8 Gen 2, 120Hz AMOLED display. 6.73-inch WQHD+ display with Dolby Vision.",
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
                            'https://images.uzum.uz/d0d0oeon274j5sclj9k0/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'
                        ]
                    },
                    {
                        id: 4,
                        brand: "Artel",
                        productName: "Artel LED TV 55U700S",
                        description: "55-inch 4K UHD Smart TV with HDR10+, Android TV, and Dolby Audio. 3GB RAM, 16GB storage.",
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
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'
                        ]
                    },
                    {
                        id: 5,
                        brand: "LG",
                        productName: "LG OLED C3 65\"",
                        description: "65-inch 4K OLED TV with α9 Gen6 AI Processor, Dolby Vision IQ, and 120Hz refresh rate.",
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
                            'https://images.uzum.uz/cvuc0ak7fd1p445sm7n0/original.jpg   ',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cvuc0ak7fd1p445sm7n0/original.jpg'
                        ]
                    },
                    {
                        id: 6,
                        brand: "Nike",
                        productName: "Nike Air Jordan 1 Retro",
                        description: "Classic high-top sneakers with original color blocking. Leather upper with Air cushioning.",
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
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cvuc0ak7fd1p445sm7n0/original.jpg'
                        ]
                    },
                    {
                        id: 7,
                        brand: "Adidas",
                        productName: "Adidas Ultraboost 22",
                        description: "Running shoes with Boost cushioning and Primeknit+ upper. Responsive energy return with each step.",
                        price: 149.99,
                        discount: 20,
                        inStock: true,
                        sold: 860,
                        rating: 4.7,
                        reviews: 215,
                        region: "Namangan",
                        deliveryTime: "2-4 kun",
                        isTopSeller: false,
                        images: [
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'
                        ]
                    },
                    {
                        id: 8,
                        brand: "Sony",
                        productName: "Sony WH-1000XM5",
                        description: "Noise cancelling headphones with 30-hour battery life. Industry-leading noise cancellation with Dual Noise Sensor technology.",
                        price: 399.99,
                        discount: 10,
                        inStock: true,
                        sold: 420,
                        rating: 4.9,
                        reviews: 187,
                        region: "Toshkent",
                        deliveryTime: "1 kun",
                        isTopSeller: true,
                        images: [
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'
                        ]
                    },
                    {
                        id: 9,
                        brand: "Dyson",
                        productName: "Dyson V15 Detect",
                        description: "Cordless vacuum cleaner with laser dust detection. Up to 60 minutes of fade-free suction power.",
                        price: 699.99,
                        discount: 12,
                        inStock: true,
                        sold: 210,
                        rating: 4.8,
                        reviews: 95,
                        region: "Buxoro",
                        deliveryTime: "3-5 kun",
                        isTopSeller: false,
                        images: [
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'
                        ]
                    },
                    {
                        id: 10,
                        brand: "Bosch",
                        productName: "Bosch Serie 6 Washing Machine",
                        description: "9kg washing machine with ActiveWater Plus and EcoSilence Drive. A+++ energy rating.",
                        price: 599.99,
                        discount: 15,
                        inStock: true,
                        sold: 180,
                        rating: 4.7,
                        reviews: 64,
                        region: "Xorazm",
                        deliveryTime: "4-6 kun",
                        isTopSeller: false,
                        images: [
                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg',

                            'https://images.uzum.uz/cvuc0ak7fd1p445sm7n0/original.jpg',
                            'https://images.uzum.uz/cvuc0ak7fd1p445sm7n0/original.jpg'
                        ]
                    }
                ];
            }

            getFromStorage(key) {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            }

            saveToStorage(key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            }

            getLikedProducts() {
                return this.getFromStorage('likedProducts') || [];
            }

            toggleLike(productId) {
                const likedProducts = this.getLikedProducts();
                const index = likedProducts.indexOf(productId);

                if (index === -1) {
                    likedProducts.push(productId);
                } else {
                    likedProducts.splice(index, 1);
                }

                this.saveToStorage('likedProducts', likedProducts);
                return index === -1;
            }

            renderProducts() {
                const container = document.getElementById('market-container');

                if (!this.products || this.products.length === 0) {
                    container.innerHTML = '<div class="error">Mahsulotlar topilmadi</div>';
                    return;
                }

                container.innerHTML = '';

                // Display first 20 products
                this.products.slice(0, 20).forEach(product => {
                    const isLiked = this.getLikedProducts().includes(product.id);
                    const discountedPrice = product.price * (1 - product.discount / 100);

                    const card = document.createElement('div');
                    card.className = 'market-card';
                    card.dataset.id = product.id;

                    card.innerHTML = `
                        <div class="card-image-container">
                            <img src="${product.images[0]}" alt="${product.productName}" class="card-image"
                                    onerror="this.onerror=null;this.src='https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'">
                            <button class="like-btn ${isLiked ? 'active' : ''}" data-id="${product.id}">
                                <i class="${isLiked ? 'ri-heart-fill' : 'ri-heart-line'}"></i>
                            </button>
                            ${product.isTopSeller ? '<div class="top-seller-badge">TOP</div>' : ''}
                        </div>

                        <div class="card-content">
                            <div class="card-brand">${product.brand}</div>
                            <h3 class="card-title">${product.productName}</h3>

                            <div class="price-container">
                                <span class="current-price">$${discountedPrice.toFixed(2)}</span>
                                ${product.discount > 0 ? `<span class="original-price">$${product.price.toFixed(2)}</span>` : ''}
                                ${product.discount > 0 ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
                            </div>

                            <div class="delivery-info">
                                <i class="ri-truck-line"></i>
                                <span>${product.deliveryTime}</span>
                            </div>

                            <div class="rating-container">
                                <div class="rating-stars">
                                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                                </div>
                                <span class="rating-count">${product.rating.toFixed(1)}</span>
                                <span class="sold-count">(${product.reviews})</span>
                            </div>

                            <div class="sold-count">
                                <div class="savatcha" data-id="${product.id}">
                                    <i class="ri-shopping-basket-2-line"></i>
                                </div>
                                <span>${product.sold} sotilgan</span>
                            </div>
                        </div>
                    `;

                    container.appendChild(card);
                });
            }

            setupEventListeners() {
                // Like button click
                document.addEventListener('click', (e) => {
                    if (e.target.closest('.like-btn')) {
                        e.preventDefault();
                        e.stopPropagation();
                        const btn = e.target.closest('.like-btn');
                        const productId = parseInt(btn.dataset.id);
                        const wasLiked = this.toggleLike(productId);

                        btn.classList.toggle('active');
                        const icon = btn.querySelector('i');
                        icon.className = wasLiked ? 'ri-heart-fill' : 'ri-heart-line';
                    }

                    // Cart button click
                    if (e.target.closest('.savatcha')) {
                        e.preventDefault();
                        e.stopPropagation();
                        const btn = e.target.closest('.savatcha');
                        const productId = parseInt(btn.dataset.id);
                        const product = this.products.find(p => p.id === productId);

                        if (product) {
                            alert(`${product.productName} savatchaga qo'shildi!`);
                        }
                    }

                    // Card click (open modal)
                    if (e.target.closest('.market-card') &&
                        !e.target.closest('.like-btn') &&
                        !e.target.closest('.savatcha')) {
                        const card = e.target.closest('.market-card');
                        const productId = parseInt(card.dataset.id);
                        const product = this.products.find(p => p.id === productId);

                        if (product) {
                            this.showProductModal(product);
                        }
                    }

                    // Modal close when clicking on overlay
                    if (e.target.classList.contains('modal')) {
                        this.hideProductModal();
                    }
                });

                // Close modal with ESC key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.hideProductModal();
                    }
                });
            }

            showProductModal(product) {
                const modal = document.getElementById('productModal');
                const discountedPrice = product.price * (1 - product.discount / 100);

                // Fill modal with product data
                document.getElementById('modalTitle').textContent = product.productName;
                document.getElementById('modalBrand').textContent = product.brand;
                document.getElementById('modalDescription').textContent = product.description;

                // Price info
                document.getElementById('modalCurrentPrice').textContent = `$${discountedPrice.toFixed(2)}`;

                if (product.discount > 0) {
                    document.getElementById('modalOriginalPrice').textContent = `$${product.price.toFixed(2)}`;
                    document.getElementById('modalDiscount').textContent = `-${product.discount}%`;
                } else {
                    document.getElementById('modalOriginalPrice').textContent = '';
                    document.getElementById('modalDiscount').textContent = '';
                }

                // Rating info
                document.getElementById('modalStars').innerHTML =
                    '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
                document.getElementById('modalReviews').textContent = `(${product.reviews} baholar)`;

                // Other info
                document.getElementById('modalSold').textContent = `${product.sold} dona sotilgan`;
                document.getElementById('modalDelivery').innerHTML = `
                    <i class="ri-truck-line"></i> Yetkazib berish: ${product.deliveryTime} | ${product.region}
                `;

                // Set up image gallery
                const thumbnailsContainer = document.getElementById('thumbnails');
                thumbnailsContainer.innerHTML = '';

                // Create thumbnails
                product.images.forEach((image, index) => {
                    const thumbnail = document.createElement('img');
                    thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                    thumbnail.src = image;
                    thumbnail.alt = `Thumbnail ${index + 1}`;
                    thumbnail.onerror = function () {
                        this.src = 'https://images.uzum.uz/cvuc0ak7fd1p445sm7n0/original.jpg';
                    };

                    thumbnail.addEventListener('click', () => {
                        // Update main image
                        document.getElementById('mainImage').src = image;

                        // Update active thumbnail
                        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                        thumbnail.classList.add('active');
                    });

                    thumbnailsContainer.appendChild(thumbnail);
                });

                // Set main image
                if (product.images.length > 0) {
                    const mainImg = document.getElementById('mainImage');
                    mainImg.src = product.images[0];
                    mainImg.onerror = function () {
                        this.src = 'https://images.uzum.uz/cvuc0ak7fd1p445sm7n0/original.jpg';
                    };
                }

                // Show modal
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            hideProductModal() {
                document.getElementById('productModal').style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }

        // Initialize the application when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            new UzumMarket();
        });