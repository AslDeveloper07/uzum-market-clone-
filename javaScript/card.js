// Function to create a market card
function createMarketCard(product) {
  const discountedPrice = product.price * (1 - product.discount / 100);

  const card = document.createElement("div");
  card.className = "market-card";

  card.innerHTML = `
        <div class="card-image-container">
            <img src="${product.image}" alt="${
    product.productName
  }" class="card-image" onerror="this.src='https://i.imgur.com/YCa6FEL.jpg'">
            <button class="like-btn" data-id="${product.id}">
                <i class="ri-heart-line"></i>
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
                <i class="ri-truck-line"></i>
                <span>${product.deliveryTime}</span>
            </div>

            <div class="rating-container">
                <div class="rating-stars">
                    ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(
    5 - Math.floor(product.rating)
  )}
                </div>
                <span class="rating-count">${product.rating.toFixed(1)}</span>
                <span class="sold-count">(${product.reviews})</span>
            </div>

            <div class="sold-count">
                <i class="ri-shopping-bag-line"></i>
                <span>${product.sold} sotilgan</span>
            </div>
        </div>
    `;

  return card;
}

// Function to render market cards
function renderMarketCards() {
  const container = document.getElementById("market-container");
  const products = getSalesData();

  // To display 10 cards, we'll repeat some items
  const productsToShow = [...products];

  // Add a couple more items to reach 10 (duplicating some)
  productsToShow.push(products[1]);
  productsToShow.push(products[4]);

  productsToShow.forEach((product) => {
    const card = createMarketCard(product);
    container.appendChild(card);
  });

  // Add event listeners to like buttons
  document.querySelectorAll(".like-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const icon = this.querySelector("i");
      if (this.classList.contains("active")) {
        icon.classList.remove("ri-heart-line");
        icon.classList.add("ri-heart-fill");
      } else {
        icon.classList.remove("ri-heart-fill");
        icon.classList.add("ri-heart-line");
      }
    });
  });
}

// Call the function when the page loads
window.onload = renderMarketCards;
