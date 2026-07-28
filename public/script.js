document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const role = document.getElementById("role").value;

      if (!username || !password || !role) {
        alert("Please fill all fields");
        return;
      }

      // Redirect based on role
      if (role === "user" || role === "volunteer") {
        window.location.href = "schedule.html";
      } else if (role === "ngo") {
        window.location.href = "ngo.html";
      }
    });
  }

  // NGO product card click redirect
  document.querySelectorAll(".product .btn, .product").forEach(el => {
    el.addEventListener("click", () => {
      window.location.href = "product.html";
    });
  });

  // Button hover effect
  document.querySelectorAll("button, .btn").forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "none";
    });
  });
});
