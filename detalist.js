  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  // Product data
  const products = [
      {
          id: 1,
          brand: "Samsung",
          productName: "Samsung Galaxy S24 Ultra",
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
          description: "Titanium design, A17 Pro chip, 48MP main camera, and USB-C. 6.7-inch Super Retina XDR display with ProMotion. Apple Intelligence aqlli yordami - matn yozish, vazifalarni bajarish va maxfiylikni Private Cloud Compute bilan himoyalash, hatto Apple ham ma'lumotlarga kira olmaydi. Spatial Audio bilan 4 studiya mikrofonlari - past shovqinli, chuqur va boy ovoz yozuvi, videolaringizni immersiv tajribaga aylantiradi. Camera Control innovatsiyasi - yangi sensorli tugma yordamida tezkor suratga olish, zum sozlash va chuqurlikni boshqarish, har bir kadrni oson boshqarish uchun",
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
          description: "Ovozdan rohatlaning va musiqadan to'xtovsiz zavqlaning.Zamonaviy interfeys orqali barcha funksiyalarni boshqarish imkoniyati: ovoz balandligini sozlash, ANC (shovqinni kamaytirish), va Ambient Sound rejimi faollashtirish.Haqiqiy musiqiy tajriba! Har bir notani chuqur va tiniq eshitasiz.arqaror ulanish va tezkor sinxronizatsiya - Android, iOS va Windows qurilmalari bilan mos keladi.",
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
          description: "55-inch 4K UHD Smart TV with HDR10+, Android TV, and Dolby Audio. 3GB RAM, 16GB storage. O'rnatilgan Google Assistent kontent boshqaruvi konsepsiyasini tubdan o'zgartiradi. Dolby Audio va DTS VirtualSound texnologiyalari kinoteatrdagidek taassurotlarni kafolatlaydi, bezramka dizayn va HD yuqori aniqlikdagi displey esa tomoshaga to'liq sho'ng'ishni ta'minlaydi.",
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
          description: "Intel® Core™ Alder Lake-N100 protsessori bilan multitasking endi osonroq! 4 yadro va 4 oqim yordamida tezkor va samarali ishlang.8GB LPDDR5-4800 RAM va 256GB NVMe SSD bilan dasturlar yashin tezligida ishga tushadi.15.6 dyuymli Full HD IPS ekran ranglarni jonli va tiniq ko'rsatadi.Dolby Audio™ texnologiyasi bilan jihozlangan ikki tomonlama 1.5W stereo dinamiklar - musiqadan zavqlaning va onlayn darslar samarali o'ting!47 Wh batareya bilan uzoq ishlashga tayyor, sayohatlar va ofis uchun mukammal.  Texnologiyalar olamida yangi bosqichga chiqing! Lenovo V15 Gen 4 IAN - bu ishonchli, kuchli va samarali noutbuk bo'lib, ish, o'qish va multimedia vazifalarini bajarish uchun ideal tanlovdir.",
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
          description: "Futbol butsalari - bu futbol o'ynash uchun mo'ljallangan maxsus poyabzal. Ular o'zlarining xususiyatlari tufayli futbol maydonida qulaylik va xavfsizlikni ta'minlaydi. Tiklari bo'lgan krossovkalar zarbani yaxshi singdiruvchi bardoshli taglikka ega, bu mashg'ulotlar va o'yinlar paytida oyoq charchoqlarini kamaytirishga yordam beradi. Ular oyoqqa mahkam o'rnashishni ta'minlaydigan qulay bog'ichlarga ega, bu esa shikastlanishdan qochishga yordam beradi va oyoqni xavfsiz joyida ushlab turadi. Shuningdek, butsalarda maxsus tirgaklar yoki qovurg'ali tagliklar mavjud bo'lib, ular maysada poyabzalning tortishish qobiliyatini oshiradi.",
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
          description: "Monoblock ish va o'qish uchun kuchli Intel Core i5-2500 protsessori bilan jihozlangan bo'lib, bu yuqori ma'lumotlarni qayta ishlash tezligini ta'minlaydi. Monoblock ish jarayonlari va ko'ngilochar faoliyat uchun engil va samarali tarzda ishlash imkonini beradi. Ushbu shaxsiy stol kompyuteri uy va ofis uchun mukammal ishlash va funksionallik kombinatsiyasini taqdim etadi. 24 dyuymli mat ekranli IPS monitor keng ko'rsatish burchaklari va jonli ranglari bilan film tomosha qilishda mukammal tajriba taqdim etadi. Full HD rezolyutsiyasi ekraning aniq va ishonchli tasvirini ta'minlaydi, bu esa uzoq vaqt davomida ishlaganda ko'zlar uchun qulaylik yaratadi. Ushbu monitor o'rnatilgan akustika tizimi bilan jihozlangan bo'lib, qo'shimcha qurilmalarga ehtiyoj sezmasdan toza ovoz taqdim etadi. Kompyuter monoblogi to'liq qo'shimcha qurilmalar to'plami bilan birga keladi.",
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
          description: "PS4 va kompyuter uchun simsiz geympad o'yinlaridan maksimal darajada foydalanishni xohlaydigan o'yinchilar uchun ideal tanlovdir. Ushbu zamonaviy va ergonomik joystik uzoq o'yin seanslari uchun mo'ljallangan va har qanday sharoitda aniq nazoratni ta'minlaydi. Sony Playstation va kompyuterlar uchun mos keladi, u har qanday geymer uchun noyob tajriba taqdim etadi.",
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
          description: "Dyson Super Soch quritgichi kompaniyasining taniqli premium fen mashinasining 100% to'liq analogidir. Har qanday uzunlik va zichlikdagi sochlarni xavfsiz parvarish qilishni ta'minlaydigan tez quritish funksiyasiga ega zamonaviy va zamonaviy sochlarini fen mashinasi. Elektron boshqaruv paneli mukammal natijaga erishish uchun isitish va puflash tezligi uchun ideal parametrlarni tanlash imkonini beradi.",
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
          description: "Elektr asbobi DA-12-2 modelining analogidir, farqi: tezliklar soni 1. Rezinali tutqich ish paytida asbobni qo'lda qulay va ishonchli ushlab turishni ta'minlaydi. Tez bo'shatilgan chuck ish aksessuarlarini almashtirishni osonlashtiradi. Turli ishlarni bajarish qulayligi uchun bir tezlikli vites qutisi. Qaytariladigan mexanizm mahkamlagichlarning tiqilib qolishi, echilishi yoki bo'shashishi holatlarida matkapni materialdan tezda olib tashlash uchun mo'ljallangan. Aylanish tezligini sozlash orqali asbob kerakli material qalinligiga moslashtirilishi mumkin. Model ishonchli litiy-ion batareyasi (Li-ion) bilan quvvatlanadi.",
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
      }
  ];

  // ID orqali productni topish
  const product = products.find(p => p.id === productId);

  if (product) {
      // Detailist page
      document.getElementById('modalTitle').textContent = product.productName;
      document.getElementById('modalBrand').textContent = product.brand;
      document.getElementById('modalDescription').textContent = product.description;

      //Narx malumoti
      const discountedPrice = product.price * (1 - product.discount / 100);
      document.getElementById('modalCurrentPrice').textContent = `$${discountedPrice.toFixed(2)}`;

      if (product.discount > 0) {
          document.getElementById('modalOriginalPrice').textContent = `$${product.price.toFixed(2)}`;
          document.getElementById('modalDiscount').textContent = `-${product.discount}%`;
      } else {
          document.getElementById('modalOriginalPrice').textContent = '';
          document.getElementById('modalDiscount').textContent = '';
      }

      // Reyting malumotlar
      document.getElementById('modalStars').innerHTML =
          '★'.repeat(Math.floor(product.rating)) +
          '☆'.repeat(5 - Math.floor(product.rating));
      document.getElementById('modalReviews').textContent = `(${product.reviews} baholar)`;

      // boshqa malumotlar
      document.getElementById('modalSold').textContent = `${product.sold} dona sotilgan`;
      document.getElementById('modalDelivery').innerHTML = `
          <i class="ri-truck-line"></i> Yetkazib berish: ${product.deliveryTime} | ${product.region}
      `;

      // Set up rasmlari
      const thumbnailsContainer = document.getElementById('thumbnails');
      thumbnailsContainer.innerHTML = '';

      // rasmlar yaratish qismi
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

      // Main image qismi
      if (product.images.length > 0) {
          const mainImg = document.getElementById('mainImage');
          mainImg.src = product.images[0];
          mainImg.onerror = function () {
              this.src = 'https://images.uzum.uz/cvuc0ak7fd1p445sm7n0/original.jpg';
          };
      }
  } else {
      // Product topilmadi
      document.querySelector('.product-container').innerHTML = `
          <div style="padding: 40px; text-align: center;">
              <h2>Mahsulot topilmadi</h2>
              <p>Iltimos, boshqa mahsulot tanlang yoki qayta urinib ko'ring.</p>
              <a href="index.html" style="color: var(--primary); text-decoration: none;">Bosh sahifaga qaytish</a>
          </div>
      `;
  }

  // Card qushish funksionalligi
  document.querySelector('.add-to-cart').addEventListener('click', () => {
      if (product) {
          alert(`${product.productName} savatchaga qo'shildi!`);
      }
  });








