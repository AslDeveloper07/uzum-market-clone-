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

let isSignUp = false;
let isForgotPassword = false;

function validateEmail(email) {
  const re = /^[a-zA-Z]+@gmail\.com$/;
  return re.test(email);
}

function validatePassword(password) {
  return /^\d+$/.test(password);
}

function toggleModal() {
  authModal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  if (authModal.classList.contains("hidden")) {
    if (isForgotPassword) {
      resetForm();
    }
    authForm.reset();
    updateProfileFromStorage();
  }
}

function resetForm() {
  isForgotPassword = false;
  formFields.innerHTML = `
        <div class="name-group" id="nameFields" style="display: ${
          isSignUp ? "flex" : "none"
        }">
            <div class="input-group">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <input type="text" class="input" id="nameInput" placeholder="Name" ${
                  isSignUp ? "required" : ""
                }>
            </div>

            <div class="input-group">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <input type="text" class="input" id="nicknameInput" placeholder="Nickname" ${
                  isSignUp ? "required" : ""
                }>
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

  const nicknameInput = document.getElementById("nicknameInput");
  if (nicknameInput) {
    nicknameInput.addEventListener("input", function () {
      const nickname = nicknameInput.value;
      profileText.innerText = nickname;
      localStorage.setItem("userNickname", nickname);
    });
  }

  submitBtn.textContent = isSignUp ? "Sign Up" : "Sign In";
  errorMessage.style.display = "none";
  options.style.display = "flex";

  updateProfileFromStorage();
}

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

profileBtn.addEventListener("click", toggleModal);

toggleForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (isForgotPassword) return;

  isSignUp = !isSignUp;
  submitBtn.textContent = isSignUp ? "Sign Up" : "Sign In";
  toggleForm.textContent = isSignUp ? "Sign In" : "Sign Up";

  // NameFields ni yangilash
  const nameFields = document.getElementById("nameFields");
  if (nameFields) {
    nameFields.style.display = isSignUp ? "flex" : "none";
  }
});

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

  const cancelBtn = document.createElement("a");
  cancelBtn.className = "cancel-btn";
  cancelBtn.textContent = "";
  cancelBtn.addEventListener("click", function (e) {
    e.preventDefault();
    resetForm();
  });

  formFields.appendChild(cancelBtn);
});

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
  const newPassword = authForm.querySelectorAll('input[type="password"]')[0]
    .value;
  const confirmPassword = authForm.querySelectorAll('input[type="password"]')[1]
    .value;

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

  const nameFields = document.getElementById("nameFields");
  if (nameFields) {
    nameFields.style.display = "none";
  }
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

  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: `Successfull!!`,
    text: `Sizning ma'lumotlaringiz muvaffaqiyatli saqlandi!!`,
    showConfirmButton: false,
    timer: 3000,
    background: "#6F00FF",
    color: "#fff",
  });

  toggleModal();
  authForm.reset();

  isSignUp = false;
  submitBtn.textContent = "Sign In";
  toggleForm.textContent = "Sign Up";

  const nameFields = document.getElementById("nameFields");
  if (nameFields) {
    nameFields.style.display = "none";
  }

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
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `Successfull!!`,
      title: `Ma'lumotlar muvaffaqiyatli deb tasdiqlandi!`,
      showConfirmButton: false,
      timer: 3000,
      background: "#6F00FF",
      color: "#fff",
    });
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

overlay.addEventListener("click", toggleModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !authModal.classList.contains("hidden")) {
    if (isForgotPassword) {
      resetForm();
    } else {
      toggleModal();
    }
  }
});

window.addEventListener("load", function () {
  updateProfileFromStorage();
});
