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
      this.products = this.products.concat(
        this.products.slice(0, 20 - this.products.length)
      );
    }

    // Render the products
    this.renderProducts();

    // Set up event listeners
    this.setupEventListeners();
  }

  async loadProducts() {
    // Try to load from local storage first
    const cachedProducts = this.getFromStorage("products");
    const cacheTimestamp = this.getFromStorage("cacheTimestamp");

    // Use cache if it's less than 1 hour old
    if (
      cachedProducts &&
      cacheTimestamp &&
      Date.now() - cacheTimestamp < 3600000
    ) {
      return cachedProducts;
    }

    // Otherwise fetch from API or use fallback
    try {
      // In a real app, this would be an actual API call
      // const response = await fetch('https://api.example.com/products');
      // const products = await response.json();

      // For demo purposes, we'll use our fallback data
      const products = this.getFallbackData();

      // Save to local storage
      this.saveToStorage("products", products);
      this.saveToStorage("cacheTimestamp", Date.now());

      return products;
    } catch (error) {
      console.error("Error fetching products:", error);

      // If API fails but we have cached data, use that
      if (cachedProducts) {
        console.log("Using cached data due to API error");
        return cachedProducts;
      }

      // If no cached data, use fallback
      console.log("Using fallback data");
      return this.getFallbackData();
    }
  }

  getFromStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLikedProducts() {
    return this.getFromStorage("likedProducts") || [];
  }

  toggleLike(productId) {
    const likedProducts = this.getLikedProducts();
    const index = likedProducts.indexOf(productId);

    if (index === -1) {
      likedProducts.push(productId);
    } else {
      likedProducts.splice(index, 1);
    }

    this.saveToStorage("likedProducts", likedProducts);
    return index === -1;
  }

  renderProducts() {
    const container = document.getElementById("market-container");

    if (!this.products || this.products.length === 0) {
      container.innerHTML = '<div class="error">Mahsulotlar topilmadi</div>';
      return;
    }

    container.innerHTML = "";

    // Display first 20 products
    this.products.slice(0, 20).forEach((product) => {
      const isLiked = this.getLikedProducts().includes(product.id);
      const discountedPrice = product.price * (1 - product.discount / 100);

      const card = document.createElement("div");
      card.className = "market-card";
      card.dataset.id = product.id;

      card.innerHTML = `
                    <div class="card-image-container">
                        <img src="${product.images[0]}" alt="${
        product.productName
      }" class="card-image">
                        <button class="like-btn ${
                          isLiked ? "active" : ""
                        }" data-id="${product.id}">
                            <i class="${
                              isLiked ? "ri-heart-fill" : "ri-heart-line"
                            }"></i>
                        </button>
                        ${
                          product.isTopSeller
                            ? '<div class="top-seller-badge">TOP</div>'
                            : ""
                        }
                    </div>

                    <div class="card-content">
                        <div class="card-brand">${product.brand}</div>
                        <h3 class="card-title">${product.productName}</h3>

                        <div class="price-container">
                            <span class="current-price">$${discountedPrice.toFixed(
                              2
                            )}</span>
                            ${
                              product.discount > 0
                                ? `<span class="original-price">$${product.price.toFixed(
                                    2
                                  )}</span>`
                                : ""
                            }
                            ${
                              product.discount > 0
                                ? `<span class="discount-badge">-${product.discount}%</span>`
                                : ""
                            }
                        </div>

                        <div class="delivery-info">
                            <i class="ri-luggage-cart-fill"></i>
                            <span>${product.deliveryTime}</span>
                        </div>

                        <div class="rating-container">
                            <div class="rating-stars">
                                ${"★".repeat(
                                  Math.floor(product.rating)
                                )}${"☆".repeat(5 - Math.floor(product.rating))}
                            </div>
                            <span class="rating-count">${product.rating.toFixed(
                              1
                            )}</span>
                            <span class="sold-count">(${product.reviews})</span>
                        </div>

                        <div class="sold-count">
                           <div class="savatcha">
                           <i class="ri-shopping-bag-4-line"></i></div>
                            <span>${product.sold} sotilgan</span>
                        </div>
                    </div>
                `;

      container.appendChild(card);
    });
  }

  setupEventListeners() {
    // Like button click
    document.addEventListener("click", (e) => {
      if (e.target.closest(".like-btn")) {
        e.preventDefault();
        e.stopPropagation();
        const btn = e.target.closest(".like-btn");
        const productId = parseInt(btn.dataset.id);
        const wasLiked = this.toggleLike(productId);

        btn.classList.toggle("active");
        const icon = btn.querySelector("i");
        icon.className = wasLiked ? "ri-heart-fill" : "ri-heart-line";
      }

      // Card click (open modal)
      if (e.target.closest(".market-card") && !e.target.closest(".like-btn")) {
        const card = e.target.closest(".market-card");
        const productId = parseInt(card.dataset.id);
        const product = this.products.find((p) => p.id === productId);

        if (product) {
          this.showProductModal(product);
        }
      }

      // Modal close when clicking on overlay
      if (e.target.classList.contains("modal")) {
        this.hideProductModal();
      }
    });

    // Close modal with ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.hideProductModal();
      }
    });
  }

  showProductModal(product) {
    const modal = document.getElementById("productModal");
    const discountedPrice = product.price * (1 - product.discount / 100);

    // Fill modal with product data
    document.getElementById("modalTitle").textContent = product.productName;
    document.getElementById("modalBrand").textContent = product.brand;
    document.getElementById("modalDescription").textContent =
      product.description;

    // Price info
    document.getElementById(
      "modalCurrentPrice"
    ).textContent = `$${discountedPrice.toFixed(2)}`;

    if (product.discount > 0) {
      document.getElementById(
        "modalOriginalPrice"
      ).textContent = `$${product.price.toFixed(2)}`;
      document.getElementById(
        "modalDiscount"
      ).textContent = `-${product.discount}%`;
    } else {
      document.getElementById("modalOriginalPrice").textContent = "";
      document.getElementById("modalDiscount").textContent = "";
    }

    // Rating info
    document.getElementById("modalStars").innerHTML =
      "★".repeat(Math.floor(product.rating)) +
      "☆".repeat(5 - Math.floor(product.rating));
    document.getElementById(
      "modalReviews"
    ).textContent = `(${product.reviews} baholar)`;

    // Other info
    document.getElementById(
      "modalSold"
    ).textContent = `${product.sold} dona sotilgan`;
    document.getElementById("modalDelivery").innerHTML = `
                <i class="ri-truck-line"></i> Yetkazib berish: ${product.deliveryTime} | ${product.region}
            `;

    // Set up image gallery
    const thumbnailsContainer = document.getElementById("thumbnails");
    thumbnailsContainer.innerHTML = "";

    // Create thumbnails
    product.images.forEach((image, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`;
      thumbnail.src = image;
      thumbnail.alt = `Thumbnail ${index + 1}`;

      thumbnail.addEventListener("click", () => {
        // Update main image
        document.getElementById("mainImage").src = image;

        // Update active thumbnail
        document
          .querySelectorAll(".thumbnail")
          .forEach((t) => t.classList.remove("active"));
        thumbnail.classList.add("active");
      });

      thumbnailsContainer.appendChild(thumbnail);
    });

    // Set main image
    if (product.images.length > 0) {
      document.getElementById("mainImage").src = product.images[0];
    }

    // Show modal
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  hideProductModal() {
    document.getElementById("productModal").style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Initialize the application when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new UzumMarket();
});
