document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Không reload trang

    const user = username.value.trim();
    const pass = password.value.trim();

    // Kiểm tra đơn giản (thay bằng API nếu có)
    if (user === "admin" && pass === "123456") {
      messageDiv.style.color = "green";
      messageDiv.textContent = "Đăng nhập thành công! Chuyển hướng...";
      setTimeout(() => {
        window.location.href = "../templates/main.html";
      }, 1000);
    } else {
      messageDiv.style.color = "red";
      messageDiv.textContent = "Sai tên đăng nhập hoặc mật khẩu!";
    }
  });
});
