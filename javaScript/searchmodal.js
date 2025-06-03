
// const searchInput = document.getElementById('searchInput');
// const searchModal = document.getElementById('searchModal');
// const searchResults = document.getElementById('searchResults');

// // Show modal on focus
// searchInput.addEventListener('focus', function () {
//     searchModal.classList.add('active');
// });

// // Hide modal when clicking outside
// document.addEventListener('click', function (e) {
//   if (!e.target.closest('.input_wrapper')) {
//     searchModal.classList.remove('active');
//   }
// });

// // Search filter
// searchInput.addEventListener('input', function () {
//   const searchTerm = this.value.toLowerCase();
//   const items = searchResults.querySelectorAll('.search-item');

//   items.forEach(item => {
//     item.style.display = item.textContent.toLowerCase().includes(searchTerm) ? 'block' : 'none';
//   });
// });

// // Close modal with Escape
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     searchModal.classList.remove('active');
//   }
// });


const mahsulotlar = [
  {
    id: 1,
    brend: "Samsung",
    mahsulotNomi: "Samsung Galaxy S24 Ultra",
    tavsif: "200MP kamerali, S Pen qo'llab-quvvatlovchi va Snapdragon 8 Gen 2 protsessorli flagman smartfon. 120Hz yangilanish chastotali 6.8 dyuymli Dynamic AMOLED 2X displey.",
    narxi: 1199.99,
    chegirma: 15,
    omborda: true,
    sotilgan: 1240,
    baho: 4.8,
    sharhlar: 342,
    hudud: "Toshkent",
    yetkazishVaqti: "1-2 kun",
    topSotuvchi: true,
    rasmlar: [
      "https://images.uzum.uz/cv43h2rvgbkm5ehi9g60/original.jpg",
      "https://images.uzum.uz/cv43j8ei4n36ls3t6070/original.jpg",
      "https://images.uzum.uz/cv43j8dpb7f9qcnfs490/original.jpg",
      "https://images.uzum.uz/cv43j8ei4n36ls3t607g/original.jpg",
    ],
  },
  {
    id: 2,
    brend: "Apple",
    mahsulotNomi: "iPhone 15 Pro Max",
    tavsif: "Titan dizayni, A17 Pro chipi, 48MP asosiy kamera va USB-C. ProMotion bilan 6.7 dyuymli Super Retina XDR displey. Apple Intelligence aqlli yordamchi - matn yozish, vazifalarni bajarish va maxfiylikni himoya qilish. Spatial Audio bilan 4 studiya mikrofoni - past shovqinli, chuqur va boy ovoz yozuvi.",
    narxi: 1299.99,
    chegirma: 10,
    omborda: true,
    sotilgan: 980,
    baho: 4.9,
    sharhlar: 421,
    hudud: "Toshkent",
    yetkazishVaqti: "1 kun",
    topSotuvchi: true,
    rasmlar: [
      "https://images.uzum.uz/cvrta9ei4n37npao1slg/original.jpg",
      "https://images.uzum.uz/cvr5hhdpb7fbmqmn60fg/original.jpg",
      "https://images.uzum.uz/cvr597c7fd1p445rvp2g/original.jpg",
      "https://images.uzum.uz/cvr597ei4n37npanrkdg/original.jpg",
    ],
  },
  {
    id: 3,
    brend: "Xiaomi Aerpods",
    mahsulotNomi: "Xiaomi 13 Aerpods Pro",
    tavsif: "Ovozdan rohatlaning va musiqadan to'xtovsiz zavqlaning. ANC (shovqinni kamaytirish) va Ambient Sound rejimlari. Haqiqiy musiqiy tajriba! Har bir notani chuqur va tiniq eshitasiz. Android, iOS va Windows qurilmalari bilan mos keladi.",
    narxi: 999.99,
    chegirma: 12,
    omborda: true,
    sotilgan: 760,
    baho: 4.7,
    sharhlar: 215,
    hudud: "Samarqand",
    yetkazishVaqti: "2-3 kun",
    topSotuvchi: false,
    rasmlar: [
      "https://images.uzum.uz/ctk2sl4opsf31vcrhcl0/original.jpg",
      "https://images.uzum.uz/ctk2slei4n368aad1jlg/original.jpg",
      "https://images.uzum.uz/ctk2sl5ht56qpot83mo0/original.jpg",
      "https://images.uzum.uz/ctk2slcopsf31vcrhcm0/original.jpg",
    ],
  },
  {
    id: 4,
    brend: "Artel",
    mahsulotNomi: "Artel LED TV 55U700S",
    tavsif: "55 dyuymli 4K UHD Smart TV, HDR10+, Android TV va Dolby Audio. 3GB RAM, 16GB xotira. O'rnatilgan Google Assistent. Dolby Audio va DTS VirtualSound texnologiyalari kinoteatrdagidek taassurot. Bezramka dizayn va yuqori aniqlikdagi displey.",
    narxi: 499.99,
    chegirma: 8,
    omborda: true,
    sotilgan: 320,
    baho: 4.5,
    sharhlar: 87,
    hudud: "Farg'ona",
    yetkazishVaqti: "3-5 kun",
    topSotuvchi: true,
    rasmlar: [
      "https://images.uzum.uz/d0grjl33uvph509tpfrg/original.jpg",
      "https://images.uzum.uz/d0grjnr3uvph509tpfsg/original.jpg",
      "https://images.uzum.uz/d0grjvgn274j5scmcn5g/original.jpg",
      "https://images.uzum.uz/d0grklon274j5scmcnd0/original.jpg",
    ],
  },
  {
    id: 5,
    brend: "Lenovo",
    mahsulotNomi: "Noutbuk Lenovo IdeaPad Slim",
    tavsif: "Intel® Core™ Alder Lake-N100 protsessori bilan multitasking. 8GB LPDDR5-4800 RAM va 256GB NVMe SSD. 15.6 dyuymli Full HD IPS ekran. Dolby Audio™ texnologiyasi bilan jihozlangan dinamiklar. 47 Wh batareya.",
    narxi: 1999.99,
    chegirma: 15,
    omborda: true,
    sotilgan: 180,
    baho: 4.9,
    sharhlar: 95,
    hudud: "Toshkent",
    yetkazishVaqti: "1-2 kun",
    topSotuvchi: false,
    rasmlar: [
      "https://images.uzum.uz/d0ac84tpb7f4kq78q0s0/original.jpg",
      "https://images.uzum.uz/cuckqftht56ksubg7a7g/original.jpg",
      "https://images.uzum.uz/cuhmnsc5j42bjc4chmbg/original.jpg",
      "https://images.uzum.uz/cuhmnrs5j42bjc4chmb0/original.jpg",
    ],
  },
  {
    id: 6,
    brend: "Nike",
    mahsulotNomi: "Nike Air Jordan 1 Retro",
    tavsif: "Futbol butsalari - futbol o'ynash uchun maxsus poyabzal. Oyoq charchoqlarini kamaytirishga yordam beradi. Oyoqni xavfsiz ushlab turadi. Maydonda yaxshi tortishish qobiliyati.",
    narxi: 179.99,
    chegirma: 0,
    omborda: true,
    sotilgan: 1240,
    baho: 4.8,
    sharhlar: 342,
    hudud: "Andijon",
    yetkazishVaqti: "1 kun",
    topSotuvchi: true,
    rasmlar: [
      "https://images.uzum.uz/d0pver33uvph509vrr70/original.jpg",
      "https://images.uzum.uz/d09ltnef4hvqhbr4dnu0/original.jpg",
      "https://images.uzum.uz/d09ltndpb7f46s8988h0/original.jpg",
      "https://images.uzum.uz/d09ltn5pb7f46s8988gg/original.jpg",
    ],
  },
  {
    id: 7,
    brend: "HTEX",
    mahsulotNomi: "Monoblok HTEX 2025",
    tavsif: "Kuchli Intel Core i5-2500 protsessori. 24 dyuymli mat ekranli IPS monitor. Full HD rezolyutsiya. O'rnatilgan akustika tizimi. Uy va ofis uchun mukammal.",
    narxi: 149.99,
    chegirma: 20,
    omborda: true,
    sotilgan: 860,
    baho: 4.7,
    sharhlar: 215,
    hudud: "Namangan",
    yetkazishVaqti: "2-4 kun",
    topSotuvchi: false,
    rasmlar: [
      "https://images.uzum.uz/d0de8j27s4fo7mq84r1g/original.jpg",
      "https://images.uzum.uz/d0de8j33uvph509t227g/original.jpg",
      "https://images.uzum.uz/d0de8j33uvph509t227g/original.jpg",
      "https://images.uzum.uz/d0de8j0n274j5scll9i0/original.jpg",
    ],
  },
  {
    id: 8,
    brend: "Sony",
    mahsulotNomi: "Sony WH-1000XM5",
    tavsif: "PS4 va kompyuter uchun simsiz geympad. Uzoq o'yin seanslari uchun mo'ljallangan. Sony Playstation va kompyuterlar uchun mos keladi.",
    narxi: 399.99,
    chegirma: 10,
    omborda: true,
    sotilgan: 420,
    baho: 4.9,
    sharhlar: 187,
    hudud: "Toshkent",
    yetkazishVaqti: "1 kun",
    topSotuvchi: true,
    rasmlar: [
      "https://images.uzum.uz/cv4i1dbvgbkm5ehic9fg/original.jpg",
      "https://images.uzum.uz/cv4i1ddpb7f9qcnfus5g/original.jpg",
      "https://images.uzum.uz/cv4i1dbvgbkm5ehic9g0/original.jpg",
      "https://images.uzum.uz/cv4i1ddpb7f9qcnfus50/original.jpg",
    ],
  },
  {
    id: 9,
    brend: "Dyson",
    mahsulotNomi: "Dyson V15 Detect",
    tavsif: "Premium fen mashinasi. Har qanday uzunlikdagi sochlarni xavfsiz parvarish qilish. Tez quritish funksiyasi. Isitish va puflash tezligini sozlash imkoniyati.",
    narxi: 699.99,
    chegirma: 12,
    omborda: true,
    sotilgan: 210,
    baho: 4.8,
    sharhlar: 95,
    hudud: "Buxoro",
    yetkazishVaqti: "3-5 kun",
    topSotuvchi: false,
    rasmlar: [
      "https://images.uzum.uz/d0de8eq7s4fo7mq84r00/original.jpg",
      "https://images.uzum.uz/d0de8eq7s4fo7mq84qv0/original.jpg",
      "https://images.uzum.uz/d0de8f0n274j5scll9hg/original.jpg",
      "https://images.uzum.uz/d0de8er3uvph509t2270/original.jpg",
    ],
  },
  {
    id: 10,
    brend: "Bosch",
    mahsulotNomi: "Bosch Serie 6 Washing Machine",
    tavsif: "Yuqori sifatli kir yuvish mashinasi. Turli kir yuvish dasturlari. Kam shovqin. Energiya tejovchi.",
    narxi: 599.99,
    chegirma: 15,
    omborda: true,
    sotilgan: 180,
    baho: 4.7,
    sharhlar: 64,
    hudud: "Xorazm",
    yetkazishVaqti: "4-6 kun",
    topSotuvchi: false,
    rasmlar: [
      "https://images.uzum.uz/d0eu99gn274j5scm0pi0/original.jpg",
      "https://images.uzum.uz/d0eu9bgn274j5scm0pk0/original.jpg",
      "https://images.uzum.uz/d0eu9don274j5scm0pkg/original.jpg",
      "https://images.uzum.uz/d0eu9gr3uvph509tdi1g/original.jpg",
    ],
  },
];

const searchInput = document.getElementById('searchInput');
const searchModal = document.getElementById('searchModal');
const searchResults = document.getElementById('searchResults');

// Generate product cards
function generateProductCards(products) {
  return products.map(product => `
    <div class="search-item">
      <div class="search-card">
        <div class="search-card__img">
          <img src="${product.rasmlar[0]}" alt="${product.mahsulotNomi}">
          ${product.chegirma > 0 ? `<span class="discount">-${product.chegirma}%</span>` : ''}
          <button class="like-btn">
            <i class="ri-heart-line"></i>
          </button>
        </div>
        <div class="search-card__content">
          <h3 class="search-card__title">${product.mahsulotNomi}</h3>
          <div class="search-card__price">
            <span class="current-price">$${(product.narxi * (100 - product.chegirma) / 100).toFixed(2)}</span>
            ${product.chegirma > 0 ? `<span class="original-price">$${product.narxi.toFixed(2)}</span>` : ''}
          </div>
          <div class="search-card__meta">
            <span class="rating">
              <i class="ri-star-fill"></i> ${product.baho}
            </span>
            <span class="sold">${product.sotilgan} sold</span>
          </div>
          <div class="search-card__footer">
            <span class="location">
              <i class="ri-map-pin-line"></i> ${product.hudud}
            </span>
            <span class="delivery">
              <i class="ri-truck-line"></i> ${product.yetkazishVaqti}
            </span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Insert product cards into search results
searchResults.innerHTML = generateProductCards(mahsulotlar);

// Show modal on focus
searchInput.addEventListener('focus', function() {
  searchModal.classList.add('active');
});

// Hide modal when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.input_wrapper')) {
    searchModal.classList.remove('active');
  }
});

// Search filter
searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const items = searchResults.querySelectorAll('.search-item');

  items.forEach(item => {
    const title = item.querySelector('.search-card__title').textContent.toLowerCase();
    const brand = item.querySelector('.search-card__title').textContent.toLowerCase();
    item.style.display = title.includes(searchTerm) || brand.includes(searchTerm) ? 'block' : 'none';
  });
});

// Close modal with Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    searchModal.classList.remove('active');
  }
});

// Toggle like button
searchResults.addEventListener('click', function(e) {
  if (e.target.closest('.like-btn')) {
    const likeBtn = e.target.closest('.like-buton');
    const icon = likeBtn.querySelector('i');

    if (icon.classList.contains('ri-heart-line')) {
      icon.classList.remove('ri-heart-line');
      icon.classList.add('ri-heart-fill');
      likeBtn.classList.add('liked');
    } else {
      icon.classList.remove('ri-heart-fill');
      icon.classList.add('ri-heart-line');
      likeBtn.classList.remove('liked');

    }
  }
});






