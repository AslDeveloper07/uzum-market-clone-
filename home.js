class UzumMarket {
  constructor() {
    this.products = [];
    this.init();
  }
  async init() {
    this.products = await this.loadProducts();

    this.cartItems = this.getFromStorage("cartItems") || [];
    this.cartCount = this.cartItems.length;

    this.updateCartNotification();
  }
  async init() {
    this.products = await this.loadProducts();

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

    if (
      cachedProducts &&
      cacheTimestamp &&
      Date.now() - cacheTimestamp < 3600000
    ) {
      return cachedProducts;
    }

    const products = this.getFallbackData();

    this.saveToStorage("products", products);
    this.saveToStorage("cacheTimestamp", Date.now());

    return products;
  }
  //=============================================================================================>[Gigant data]
  getFallbackData() {
    return [
      {
        id: 1,
        brand: "Samsung",
        productName: "Samsung Galaxy S24 Ultra",
        description:
          "Flagship smartphone with 200MP camera, S Pen support, and Snapdragon 8 Gen 2 processor. 6.8-inch Dynamic AMOLED 2X display with 120Hz refresh rate.",
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
          "https://images.uzum.uz/cv43h2rvgbkm5ehi9g60/original.jpg",
          "https://images.uzum.uz/cv43j8ei4n36ls3t6070/original.jpg",
          "https://images.uzum.uz/cv43j8dpb7f9qcnfs490/original.jpg",
          "https://images.uzum.uz/cv43j8ei4n36ls3t607g/original.jpg",
        ],
      },
      {
        id: 2,
        brand: "Apple",
        productName: "iPhone 15 Pro Max",
        description:
          "Titanium design, A17 Pro chip, 48MP main camera, and USB-C. 6.7-inch Super Retina XDR display with ProMotion. Apple Intelligence aqlli yordami - matn yozish, vazifalarni bajarish va maxfiylikni Private Cloud Compute bilan himoyalash, hatto Apple ham ma'lumotlarga kira olmaydi. Spatial Audio bilan 4 studiya mikrofonlari - past shovqinli, chuqur va boy ovoz yozuvi, videolaringizni immersiv tajribaga aylantiradi. Camera Control innovatsiyasi - yangi sensorli tugma yordamida tezkor suratga olish, zum sozlash va chuqurlikni boshqarish, har bir kadrni oson boshqarish uchun",
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
          "https://images.uzum.uz/cvrta9ei4n37npao1slg/original.jpg",
          "https://images.uzum.uz/cvr5hhdpb7fbmqmn60fg/original.jpg",
          "https://images.uzum.uz/cvr597c7fd1p445rvp2g/original.jpg",
          "https://images.uzum.uz/cvr597ei4n37npanrkdg/original.jpg",
        ],
      },
      {
        id: 3,
        brand: "Xiaomi Aerpods",
        productName: "Xiaomi 13 Aerpods Pro",
        description:
          "Ovozdan rohatlaning va musiqadan to'xtovsiz zavqlaning.Zamonaviy interfeys orqali barcha funksiyalarni boshqarish imkoniyati: ovoz balandligini sozlash, ANC (shovqinni kamaytirish), va Ambient Sound rejimi faollashtirish.Haqiqiy musiqiy tajriba! Har bir notani chuqur va tiniq eshitasiz.arqaror ulanish va tezkor sinxronizatsiya - Android, iOS va Windows qurilmalari bilan mos keladi.",
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
          "https://images.uzum.uz/ctk2sl4opsf31vcrhcl0/original.jpg",
          "https://images.uzum.uz/ctk2slei4n368aad1jlg/original.jpg",
          "https://images.uzum.uz/ctk2sl5ht56qpot83mo0/original.jpg",
          "https://images.uzum.uz/ctk2slcopsf31vcrhcm0/original.jpg",
        ],
      },
      {
        id: 4,
        brand: "Artel",
        productName: "Artel LED TV 55U700S",
        description:
          "55-inch 4K UHD Smart TV with HDR10+, Android TV, and Dolby Audio. 3GB RAM, 16GB storage. O'rnatilgan Google Assistent kontent boshqaruvi konsepsiyasini tubdan o'zgartiradi. Dolby Audio va DTS VirtualSound texnologiyalari kinoteatrdagidek taassurotlarni kafolatlaydi, bezramka dizayn va HD yuqori aniqlikdagi displey esa tomoshaga to'liq sho'ng'ishni ta'minlaydi.",
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
          "https://images.uzum.uz/d0grjl33uvph509tpfrg/original.jpg",
          "https://images.uzum.uz/d0grjnr3uvph509tpfsg/original.jpg",
          "https://images.uzum.uz/d0grjvgn274j5scmcn5g/original.jpg",
          "https://images.uzum.uz/d0grklon274j5scmcnd0/original.jpg",
        ],
      },
      {
        id: 5,
        brand: "Lenovo ",
        productName: "Noutbuk Lenovo IdeaPad Slim",
        description:
          "Intel® Core™ Alder Lake-N100 protsessori bilan multitasking endi osonroq! 4 yadro va 4 oqim yordamida tezkor va samarali ishlang.8GB LPDDR5-4800 RAM va 256GB NVMe SSD bilan dasturlar yashin tezligida ishga tushadi.15.6 dyuymli Full HD IPS ekran ranglarni jonli va tiniq ko'rsatadi.Dolby Audio™ texnologiyasi bilan jihozlangan ikki tomonlama 1.5W stereo dinamiklar - musiqadan zavqlaning va onlayn darslar samarali o'ting!47 Wh batareya bilan uzoq ishlashga tayyor, sayohatlar va ofis uchun mukammal.  Texnologiyalar olamida yangi bosqichga chiqing! Lenovo V15 Gen 4 IAN - bu ishonchli, kuchli va samarali noutbuk bo'lib, ish, o'qish va multimedia vazifalarini bajarish uchun ideal tanlovdir.",
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
          "https://images.uzum.uz/d0ac84tpb7f4kq78q0s0/original.jpg",
          "https://images.uzum.uz/cuckqftht56ksubg7a7g/original.jpg",
          "https://images.uzum.uz/cuhmnsc5j42bjc4chmbg/original.jpg",
          "https://images.uzum.uz/cuhmnrs5j42bjc4chmb0/original.jpg",
        ],
      },
      {
        id: 6,
        brand: "Nike",
        productName: "Nike Air Jordan 1 Retro",
        description:
          "Futbol butsalari - bu futbol o'ynash uchun mo'ljallangan maxsus poyabzal. Ular o'zlarining xususiyatlari tufayli futbol maydonida qulaylik va xavfsizlikni ta'minlaydi. Tiklari bo'lgan krossovkalar zarbani yaxshi singdiruvchi bardoshli taglikka ega, bu mashg'ulotlar va o'yinlar paytida oyoq charchoqlarini kamaytirishga yordam beradi. Ular oyoqqa mahkam o'rnashishni ta'minlaydigan qulay bog'ichlarga ega, bu esa shikastlanishdan qochishga yordam beradi va oyoqni xavfsiz joyida ushlab turadi. Shuningdek, butsalarda maxsus tirgaklar yoki qovurg'ali tagliklar mavjud bo'lib, ular maysada poyabzalning tortishish qobiliyatini oshiradi.",
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
          "https://images.uzum.uz/d0pver33uvph509vrr70/original.jpg",
          "https://images.uzum.uz/d09ltnef4hvqhbr4dnu0/original.jpg",
          "https://images.uzum.uz/d09ltndpb7f46s8988h0/original.jpg",
          "https://images.uzum.uz/d09ltn5pb7f46s8988gg/original.jpg",
        ],
      },
      {
        id: 7,
        brand: "HTEX",
        productName: "Monoblok HTEX 2025",
        description:
          "Monoblock ish va o'qish uchun kuchli Intel Core i5-2500 protsessori bilan jihozlangan bo'lib, bu yuqori ma'lumotlarni qayta ishlash tezligini ta'minlaydi. Monoblock ish jarayonlari va ko'ngilochar faoliyat uchun engil va samarali tarzda ishlash imkonini beradi. Ushbu shaxsiy stol kompyuteri uy va ofis uchun mukammal ishlash va funksionallik kombinatsiyasini taqdim etadi. 24 dyuymli mat ekranli IPS monitor keng ko'rsatish burchaklari va jonli ranglari bilan film tomosha qilishda mukammal tajriba taqdim etadi. Full HD rezolyutsiyasi ekraning aniq va ishonchli tasvirini ta'minlaydi, bu esa uzoq vaqt davomida ishlaganda ko'zlar uchun qulaylik yaratadi. Ushbu monitor o'rnatilgan akustika tizimi bilan jihozlangan bo'lib, qo'shimcha qurilmalarga ehtiyoj sezmasdan toza ovoz taqdim etadi. Kompyuter monoblogi to'liq qo'shimcha qurilmalar to'plami bilan birga keladi.",
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
          "https://images.uzum.uz/d0de8j27s4fo7mq84r1g/original.jpg",
          "https://images.uzum.uz/d0de8j33uvph509t227g/original.jpg",
          "https://images.uzum.uz/d0de8j33uvph509t227g/original.jpg",
          "https://images.uzum.uz/d0de8j0n274j5scll9i0/original.jpg",
        ],
      },
      {
        id: 8,
        brand: "Sony",
        productName: "Sony WH-1000XM5",
        description:
          "PS4 va kompyuter uchun simsiz geympad o'yinlaridan maksimal darajada foydalanishni xohlaydigan o'yinchilar uchun ideal tanlovdir. Ushbu zamonaviy va ergonomik joystik uzoq o'yin seanslari uchun mo'ljallangan va har qanday sharoitda aniq nazoratni ta'minlaydi. Sony Playstation va kompyuterlar uchun mos keladi, u har qanday geymer uchun noyob tajriba taqdim etadi.",
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
          "https://images.uzum.uz/cv4i1dbvgbkm5ehic9fg/original.jpg",
          "https://images.uzum.uz/cv4i1ddpb7f9qcnfus5g/original.jpg",
          "https://images.uzum.uz/cv4i1dbvgbkm5ehic9g0/original.jpg",
          "https://images.uzum.uz/cv4i1ddpb7f9qcnfus50/original.jpg",
        ],
      },
      {
        id: 9,
        brand: "Dyson",
        productName: "Dyson V15 Detect",
        description:
          "Dyson Super Soch quritgichi kompaniyasining taniqli premium fen mashinasining 100% to'liq analogidir. Har qanday uzunlik va zichlikdagi sochlarni xavfsiz parvarish qilishni ta'minlaydigan tez quritish funksiyasiga ega zamonaviy va zamonaviy sochlarini fen mashinasi. Elektron boshqaruv paneli mukammal natijaga erishish uchun isitish va puflash tezligi uchun ideal parametrlarni tanlash imkonini beradi.",
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
          "https://images.uzum.uz/d0de8eq7s4fo7mq84r00/original.jpg",
          "https://images.uzum.uz/d0de8eq7s4fo7mq84qv0/original.jpg",
          "https://images.uzum.uz/d0de8f0n274j5scll9hg/original.jpg",
          "https://images.uzum.uz/d0de8er3uvph509t2270/original.jpg",
        ],
      },
      {
        id: 10,
        brand: "Bosch",
        productName: "Bosch Serie 6 Washing Machine",
        description:
          "Elektr asbobi DA-12-2 modelining analogidir, farqi: tezliklar soni 1. Rezinali tutqich ish paytida asbobni qo'lda qulay va ishonchli ushlab turishni ta'minlaydi. Tez bo'shatilgan chuck ish aksessuarlarini almashtirishni osonlashtiradi. Turli ishlarni bajarish qulayligi uchun bir tezlikli vites qutisi. Qaytariladigan mexanizm mahkamlagichlarning tiqilib qolishi, echilishi yoki bo'shashishi holatlarida matkapni materialdan tezda olib tashlash uchun mo'ljallangan. Aylanish tezligini sozlash orqali asbob kerakli material qalinligiga moslashtirilishi mumkin. Model ishonchli litiy-ion batareyasi (Li-ion) bilan quvvatlanadi.",
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
          "https://images.uzum.uz/d0eu99gn274j5scm0pi0/original.jpg",
          "https://images.uzum.uz/d0eu9bgn274j5scm0pk0/original.jpg",
          "https://images.uzum.uz/d0eu9don274j5scm0pkg/original.jpg",
          "https://images.uzum.uz/d0eu9gr3uvph509tdi1g/original.jpg",
        ],
      },
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
      }" class="card-image"
                  onerror="this.onerror=null;this.src='https://images.uzum.uz/cuea8jc5j42bjc4bhr1g/original.jpg'">
          <button class="like-btn ${isLiked ? "active" : ""}" data-id="${
        product.id
      }">
              <i class="${isLiked ? "ri-heart-fill" : "ri-heart-line"}"></i>
          </button>
          ${
            product.isTopSeller ? '<div class="top-seller-badge">TOP</div>' : ""
          }
      </div>

      <div class="card-content">
          <div class="card-brand">${product.brand}</div>
          <h3 class="card-title">${product.productName}</h3>

          <div class="price-container">
              <span class="current-price">$${discountedPrice.toFixed(2)}</span>
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

      if (e.target.closest(".savatcha")) {
        e.preventDefault();
        e.stopPropagation();
        const btn = e.target.closest(".savatcha");
        const productId = parseInt(btn.dataset.id);
        const product = this.products.find((p) => p.id === productId);

        if (product) {
          alert(`${product.productName} savatchaga qo'shildi!`);
        }
      }

      if (
        e.target.closest(".market-card") &&
        !e.target.closest(".like-btn") &&
        !e.target.closest(".savatcha")
      ) {
        const card = e.target.closest(".market-card");
        const productId = parseInt(card.dataset.id);

        window.location.href = `detailist.html?id=${productId}`;
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new UzumMarket();
});

// ============================================ Login Form Modal uchun
// DOM Elements
const profileBtn = document.getElementById("profileBtn");
const profileText = document.getElementById("profileText");
const authModal = document.getElementById("authModal");
const overlay = document.getElementById("overlay");
const authForm = document.getElementById("authForm");
const submitBtn = document.getElementById("submitBtn");
const toggleForm = document.getElementById("toggleForm");
const errorMessage = document.getElementById("errorMessage");
const formFields = document.getElementById("formFields");
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const nameFields = document.getElementById("nameFields");
const options = document.querySelector(".options");

// State variables
let isSignUp = false;
let isForgotPassword = false;

// Validation functions
function validateEmail(email) {
    const re = /^[a-zA-Z]+@gmail\.com$/; // Only text + @gmail.com
    return re.test(email);
}

function validatePassword(password) {
    return /^\d+$/.test(password); // Only numbers
}

// Toggle modal visibility
function toggleModal() {
    authModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");

    // Reset form when closing
    if (authModal.classList.contains("hidden")) {
        if (isForgotPassword) {
            resetForm();
        }
        authForm.reset();
        updateProfileFromStorage(); // Update profile text when modal closes
    }
}

// Form functionality
function resetForm() {
    isForgotPassword = false;
    formFields.innerHTML = `
        <div class="name-group" id="nameFields">
            <div class="input-group">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <input type="text" class="input" id="nameInput" placeholder="Name" ${isSignUp ? "required" : ""}>
            </div>

            <div class="input-group">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <input type="text" class="input" id="nicknameInput" placeholder="Nickname" ${isSignUp ? "required" : ""}>
            </div>
        </div>

        <div class="input-group">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            </div>
            <input type="email" class="input" id="emailInput" placeholder="Email" required>
        </div>

        <div class="input-group">
            <div class="icon">
                <svg class="key-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                        d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                    </path>
                </svg>
            </div>
            <input type="password" class="input" id="passwordInput" placeholder="Password" required>
        </div>
    `;

    // Reattach event listeners
    const nicknameInput = document.getElementById("nicknameInput");
    if (nicknameInput) {
        nicknameInput.addEventListener("input", function() {
            const nickname = nicknameInput.value;
            profileText.innerText = nickname;
            localStorage.setItem("userNickname", nickname);
        });
    }

    submitBtn.textContent = isSignUp ? "Sign Up" : "Sign In";
    nameFields.style.display = isSignUp ? "flex" : "none";
    errorMessage.style.display = "none";
    options.style.display = "flex";

    // Update profile text from localStorage
    updateProfileFromStorage();
}

// Update profile from localStorage
function updateProfileFromStorage() {
    const storedNickname = localStorage.getItem("userNickname");
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedNickname) {
        profileText.innerText = storedNickname;
    } else if (storedName) {
        profileText.innerText = storedName;
    } else if (storedEmail) {
        profileText.innerText = storedEmail.split("@")[0];
    }
}

// Event Listeners
profileBtn.addEventListener("click", toggleModal);

// Toggle between Sign In and Sign Up
toggleForm.addEventListener("click", function (e) {
    e.preventDefault();
    if (isForgotPassword) return;

    isSignUp = !isSignUp;
    submitBtn.textContent = isSignUp ? "Sign Up" : "Sign In";
    toggleForm.textContent = isSignUp ? "Sign In" : "Sign Up";
    nameFields.style.display = isSignUp ? "flex" : "none";
});

// Forgot Password handler
forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    isForgotPassword = true;
    options.style.display = "none";

    formFields.innerHTML = `
        <div class="input-group">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            </div>
            <input type="email" class="input" placeholder="Your Email" required>
        </div>

        <div class="input-group">
            <div class="icon">
                <svg class="key-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                        d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                    </path>
                </svg>
            </div>
            <input type="password" class="input" placeholder="New Password" required>
        </div>

        <div class="input-group">
            <div class="icon">
                <svg class="key-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                        d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                    </path>
                </svg>
            </div>
            <input type="password" class="input" placeholder="Confirm New Password" required>
        </div>
    `;

    submitBtn.textContent = "Reset password";

    // Cancel button
    const cancelBtn = document.createElement("a");
    cancelBtn.className = "cancel-btn";
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", function (e) {
        e.preventDefault();
        resetForm();
    });

    formFields.appendChild(cancelBtn);
});

// Form submission handler
authForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (isForgotPassword) {
        handleForgotPassword();
        return;
    } else if (isSignUp) {
        handleSignUp();
        return;
    } else {
        handleSignIn();
    }
});

function handleForgotPassword() {
    const email = authForm.querySelector('input[type="email"]').value;
    const newPassword = authForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = authForm.querySelectorAll('input[type="password"]')[1].value;

    const storedEmail = localStorage.getItem("userEmail");

    if (email !== storedEmail) {
        showError("Email mavjud emas");
        return;
    }

    if (!validatePassword(newPassword)) {
        showError("Parol faqat raqamlardan iborat bo'lishi kerak");
        return;
    }

    if (newPassword !== confirmPassword) {
        showError("Parollar mos emas");
        return;
    }

    localStorage.setItem("userPassword", newPassword);
    alert("Password yangilandi!");
    resetForm();
    isSignUp = false;
    submitBtn.textContent = "Sign In";
    toggleForm.textContent = "Sign Up";
    nameFields.style.display = "none";
}

function handleSignUp() {
    const name = document.getElementById("nameInput").value;
    const nickname = document.getElementById("nicknameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    if (!validateEmail(email)) {
        showError("Faqat text va @gmail.com email manzillari qabul qilinadi");
        return;
    }

    if (!validatePassword(password)) {
        showError("Parol faqat raqamlardan iborat bo'lishi kerak");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userNickname", nickname);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Sizning ma'lumotlaringiz muvaffaqiyatli saqlandi!");
    toggleModal();
    authForm.reset();

    isSignUp = false;
    submitBtn.textContent = "Sign In";
    toggleForm.textContent = "Sign Up";
    nameFields.style.display = "none";

    profileText.innerText = nickname || name || email.split("@")[0];
}

function handleSignIn() {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    const storedNickname = localStorage.getItem("userNickname");
    const storedName = localStorage.getItem("userName");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        toggleModal();
        authForm.reset();
        profileText.innerText = storedNickname || storedName || email.split("@")[0];
    } else {
        showError("Email yoki password xato");
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    setTimeout(() => {
        errorMessage.style.display = "none";
    }, 3000);
}

// Close modal when clicking outside
overlay.addEventListener("click", toggleModal);

// Escape key handler
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !authModal.classList.contains("hidden")) {
        if (isForgotPassword) {
            resetForm();
        } else {
            toggleModal();
        }
    }
});

// Initialize on page load
window.addEventListener("load", function () {
    updateProfileFromStorage();
});
// =========================================================================================== [City modal]

// =========================================================================================== [City data]

const locations = [
  "Abdukarim",
  "Ahmad Yassaviy",
  "Alaja",
  "Alamli",
  "Altinko'l (Qo'ng'irot tumani)",
  "Andijon",
  "Angor",
  "Angren",
  "Arsif",
  "Asaka",
  "Avval",
  "Babalakota",
  "Baliqchi",
  "Balta",
  "Bardanko'l",
  "Baynalmilal",
  "Bekat",
  "Bekobod",
  "Bekobod (Bog'dod tumani)",
  "Beruni",
  "Beruniy (Qiyichirchiq tumani)",
  "Beshariq",
  "Beshkapa",
  "Beshkent",
  "Beshrabod",
  "Bo'jay",
  "Bo'ka",
  "Bo'rbaliq",
  "Bo'ston",
  "Bo'ston (Oltinsoy tumani)",
  "Bo'ston (Ellikqali tumani)",
  "Bo'ston (Zarbdor tumani)",
  "Bog'iturkon",
  "Bog'ot",
  "Bogdan",
  "Boyovut",
  "Boysun",
  "Buloqboshi",
  "Bulung'ur",
  "Burchmullo",
  "Buvayda",
  "Buxoro",
  "Bоg'dod",
  "Changi",
  "Chelak",
  "Chimboy",
  "Chimyon",
  "Chinabod",
  "Chinoz",
  "Chirchiq",
  "Chiroqchi",
  "Cho'rindi",
  "Chorbog'",
  "Chorraha",
  "Chortoq",
  "Chortoq (Guliston tumani)",
  "Chorvoq",
  "Chulkuvar",
  "Chust",
  "Chuvalachi",
  "Dang'ara",
  "Dangir",
  "Dasht",
  "Dashtobod",
  "Dehoji",
  "Dehqonobod",
  "Denov",
  "Denov (Shafirqon tumani)",
  "Do'rmon",
  "Do'stlik",
  "Do'stlik (Denov tumani)",
  "Do'stobod",
  "Dusimbiy",
  "Egizbuloq",
  "Eshmatoul",
  "Eshonguzor",
  "Fargʻona",
  "Farxod",
  "Fayziobod",
  "Forish",
  "Furqat",
  "G'alaba",
  "G'allaorol",
  "G'azalkent",
  "G'o's",
  "G'oliblar",
  "G'uzor",
  "Gagarin",
  "Galaosiya",
  "Galaquduq",
  "Gijduvon",
  "Gul",
  "Gulbahor",
  "Guliston",
  "Guliston (Yuqorichirchiq tumani)",
  "Gullanbog'",
  "Gulobod",
  "Gulzar",
  "Gulzar (Paxtakor tumani)",
  "Gurlan",
  "Hamzaobod",
  "Hayit",
  "Hisorak",
  "Humson",
  "Ibrat",
  "Iftixor",
  "Ishtixon",
  "Ispanza",
  "Istiqlol",
  "Ittifoq",
  "Jalaquduq",
  "Jambul",
  "Jarqo'rg'on",
  "Jayraxona",
  "Jilva",
  "Jizzax",
  "Jizzaxlik",
  "Jo'ynav",
  "Jomboy",
  "Jondor",
  "Juma",
  "Jumabazar (Bekobod tumani)",
  "Jumabazar (Yuqori Chirchiq tumani)",
  "Jumashuy",
  "Jurek",
  "Juren",
  "Kakaydi",
  "Kangli",
  "Kanimex",
  "Kaptarxona",
  "Karamaz",
  "Karkidan",
  "Karmana",
  "Katta Ramadon",
  "Kattaqo'rg'on",
  "Kegayli",
  "Kelauchi",
  "Keles",
  "Kitob",
  "Ko'hna Kalon",
  "Ko'hna Sho'rcha",
  "Ko'kdala",
  "Ko'ksaroy",
  "Kogon",
  "Kosari",
  "Koson",
  "Kosonsoy",
  "Krasnogorsk",
  "Kulonxona",
  "Kumarik",
  "Kuyganyor",
  "Kuyun",
  "Labiro'd",
  "Lagan",
  "Lagandi",
  "Lalmiqor",
  "Lolazor",
  "Loyish",
  "Madaniyat",
  "Malikrabot",
  "Mang'it",
  "Margʻilon",
  "Marhamat",
  "Marjonbuloq",
  "Markaz",
  "Mashak",
  "Mindon",
  "Misr",
  "Muborak",
  "Mug'lon",
  "Mulkanlik",
  "Mulloyon",
  "Muratali",
  "Mustaqillik",
  "Namangan",
  "Namdanak",
  "Namuna",
  "Nanay",
  "Narpay (Karmana tumani)",
  "Navbahor",
  "Navbahor (Namangan tumai)",
  "Navoiiy",
  "Navoiy",
  "Navro'z",
  "Nazarbek",
  "Niyozbash",
  "Novaboshi",
  "Novkent",
  "Novmetan",
  "Nukus",
  "Nurafshon",
  "Nurobod",
  "Nurobod (Ohangaron tumani)",
  "Nurota",
  "O'rta Oqchi",
  "O'zbekiston",
  "Ohangaron",
  "Olimkent",
  "Olmaliq",
  "Olmazor (Chinoz tumani)",
  "Olot",
  "Oltiariq",
  "Oltinariq",
  "Oltinko'l",
  "Oqmang'it",
  "Oqoltin",
  "Oqqo'rg'on",
  "Oqtosh",
  "Ozod Vatan (Muzrobod tumani)",
  "Parchanxas",
  "Pargos",
  "Parkent",
  "Paxta (Chinoz tumani)",
  "Paxtachi",
  "Paxtakor",
  "Paxtaobod",
  "Paxtaobod (Sardoba tumani)",
  "Paxtazor",
  "Payariq",
  "Payshanba",
  "Pishagar",
  "Piskent",
  "Pitnak",
  "Pop",
  "Povulgon",
  "Poytug'",
  "Pushmon",
  "Qahramon",
  "Qamashi",
  "Qanliko'l",
  "Qaqir",
  "Qaravul",
  "Qarshi",
  "Qashqari",
  "Qatartol",
  "Qibray",
  "Qiziltepa",
  "Qo'g'ali",
  "Qo'ng'irot",
  "Qo'qon",
  "Qo'qonboy",
  "Qo'rg'oncha",
  "Qo'rg'ontepa",
  "Qo'shkupir",
  "Qo'shqo'rg'on",
  "Qo'shrobod",
  "Qo'shtepa",
  "Qora Xitoy",
  "Qoraboy",
  "Qorako'l",
  "Qoranko'l",
  "Qorao'zak",
  "Qoraqo'yli",
  "Qoraqushchi",
  "Qoraqushxona",
  "Qorashina",
  "Qorasuv",
  "Qorasuv (Paxtaobod tumani)",
  "Qorayantoq",
  "Qorovulbozor",
  "Qosh Yog'och",
  "Quduqcha",
  "Qumariqobod",
  "Qumqo'rg'on",
  "Qurama (Oltinsoy tumani)",
  "Qurbonov",
  "Quva",
  "Quvasoy",
  "Quyaboshi",
  "Rapqon",
  "Rishton",
  "Romitan",
  "Rovot",
  "Sabzikor",
  "Salar",
  "Samarqand",
  "Samarqandquduq",
  "Sanam",
  "Sang",
  "Sarbozor",
  "Sardoba",
  "Sariasiya",
  "Sarik (Qiziriq tumani)",
  "Saritepa",
  "Sasbaka",
  "Sayxun",
  "Shahrisabz",
  "Shahrixon",
  "Shamaton",
  "Shampan",
  "Sherobod",
  "Shirin",
  "Sho'ralisoy",
  "Sho'rchi",
  "Shodlik",
  "Shodlik (Oqoltin tumani)",
  "Shofirkon",
  "Shoyimbek",
  "Shumanay",
  "Shоvоt",
  "Sijjak",
  "Sirdaryo",
  "So'fon",
  "So'lti",
  "Sohibkor",
  "Sohil",
  "Soyliq",
  "Sukok",
  "Sulton Segizboyev",
  "Sutkibuloq",
  "Talkok",
  "Taxiatosh",
  "Taxtako'pir",
  "Teraktagi",
  "Termez",
  "Timiryazev",
  "Tinchlik",
  "To'qboy",
  "To'raqo'rg'on",
  "To'rtko'l",
  "Toshbuloq",
  "Toshkent",
  "Toshloq",
  "Toshloq (Qiyichirchiq tumani)",
  "Toyloq",
  "Turkmen",
  "Tuyabo'g'iz",
  "Uchko'prik",
  "Uchqizil",
  "Uchqo'rg'on",
  "Uchquduq",
  "Uchtepa",
  "Ulug'bek",
  "Umar",
  "Unqo'rg'on",
  "Unxayat",
  "Uramas",
  "Urganch",
  "Urgut",
  "Usmat",
  "Usmon Nosir",
  "Uychi",
  "Uyrat",
  "Uzun",
  "Vobkent",
  "Vodil",
  "Xalkobod",
  "Xalkobod (Yangiyo'l tumani)",
  "Xalkobod (Kegayli tumani)",
  "Xanka",
  "Xaqqulobod",
  "Xazarasp",
  "Xitoyan",
  "Xiva",
  "Xo'ja Yaqshba",
  "Xo'jaobod",
  "Xo'jarabot",
  "Xo'jasoat",
  "Xo'jayli",
  "Xo'jikent (Bo'stonliq tumani)",
  "Xonbandi",
  "Xonobod",
  "Xonziq",
  "Xorkash",
  "Xos",
  "Xovos",
  "Xusnobod",
  "Yakkabog'",
  "Yallama",
  "Yangi Chinoz (Chinoz tumani)",
  "Yangi Marg'ilon",
  "Yangi Mirishkar",
  "Yangi Nishon",
  "YangiHayot (Qiyichirchiq tumani)",
  "Yangiarik",
  "Yangibozor",
  "Yangibozor (Peshku tumani)",
  "Yangibоzоr (Yangibоzоr tumani)",
  "Yangiobod",
  "Yangiobod (Bo'ka tumani)",
  "Yangiovul",
  "Yangiqo'rg'on",
  "Yangirabat",
  "Yangiyer",
  "Yangiyo'l",
  "Yarkin",
  "Yaypan",
  "Yom",
  "Yozyovon",
  "Yuqori Bachqir",
  "Yuqori Valik",
  "Zafar",
  "Zafarobod",
  "Zafarobod (Konimex tumani)",
  "Zangiota",
  "Zarafshon",
  "Zarbdor",
  "Zarkent",
  "Zavrok",
  "Ziyodin",
  "Zomin",
  "Аyvalik",
];

// DOM Elementlari
const dostavka = document.getElementById("dostavka");
const modalOverlay = document.getElementById("modalOverlay");
const closeModale = document.querySelector(".close-modal");
const cityList = document.getElementById("cityList");
const citySearch = document.getElementById("citySearch");
const selectedCity = document.getElementById("selectedCity");

// console.log(dostavka,modalOverlay,closeModale,cityList,citySearch,selectedCity);

// location div bosilganda
dostavka.addEventListener("click", function () {
  modalOverlay.style.display = "flex";
  renderCityList(locations);
});

//close button bosilganda yopiladi
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay || e.target === closeModale) {
    modalOverlay.style.display = "none";
  }
});

// Search funksiyasi
citySearch.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredCities = locations.filter((city) =>
    city.toLowerCase().includes(searchTerm)
  );
  renderCityList(filteredCities);
});

// Shahar nomlarini search qilganda render qiladi
function renderCityList(cities) {
  cityList.innerHTML = "";
  cities.forEach((city) => {
    const cityItem = document.createElement("div");
    cityItem.className = "city-item";
    cityItem.textContent = city;
    cityItem.addEventListener("click", function () {
      selectedCity.textContent = city;
      modalOverlay.style.display = "none";
    });
    cityList.appendChild(cityItem);
  });
}

// escape key bosilganda modal yopilishi uchun
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalOverlay.style.display === "flex") {
    modalOverlay.style.display = "none";
  }
});
