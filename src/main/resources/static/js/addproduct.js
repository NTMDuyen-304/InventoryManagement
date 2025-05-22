document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");
  const cancelBtn = document.getElementById("cancelBtn");

  // Xử lý khi ấn nút Cancel
  cancelBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to cancel?")) {
      window.location.href = "../templates/products.html";
    }
  });

  // Xử lý khi submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const product = {
      name: document.getElementById("name").value,
      sku: document.getElementById("sku").value,
      category: document.getElementById("category").value,
      price: parseFloat(document.getElementById("price").value),
      stock: parseInt(document.getElementById("stock").value),
      minStock: parseInt(document.getElementById("minStock").value),
    };

    console.log("Product added:", product);

    // Tạm thời lưu vào localStorage để giả lập thêm sản phẩm
    const productList = JSON.parse(localStorage.getItem("products") || "[]");
    productList.push(product);
    localStorage.setItem("products", JSON.stringify(productList));

    alert("Product saved successfully!");
    window.location.href = "../templates/products.html";
  });
});
