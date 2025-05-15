// UI Helper Functions
function showModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("show");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("show");
  }
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

// Navigation
function navigateTo(pageId) {
  // Update active page
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(`${pageId}-page`).classList.add("active");

  // Update active nav item
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelector(`[data-page="${pageId}"]`).classList.add("active");
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Đóng modal khi bấm ra ngoài
window.onclick = function (event) {
  const modal = document.getElementById("product-modal");
  if (event.target === modal) {
    closeModal("product-modal");
  }
};

// Gắn sự kiện nút mở modal
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-product-btn").addEventListener("click", () => {
    openModal("product-modal");
  });
});

// Form Helpers
function getFormData(form) {
  const formData = new FormData(form);
  const data = {};
  for (let [key, value] of formData.entries()) {
    if (
      key === "price" ||
      key === "stockQuantity" ||
      key === "minStockLevel" ||
      key === "quantity"
    ) {
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  }
  return data;
}

function resetForm(form) {
  form.reset();
}

// Populate category dropdowns
function populateCategoryDropdowns() {
  const categorySelects = document.querySelectorAll('select[name="category"]');
  const categoryOptions = store.categories
    .map(
      (category) => `<option value="${category.name}">${category.name}</option>`
    )
    .join("");

  categorySelects.forEach((select) => {
    select.innerHTML =
      '<option value="">Select a category</option>' + categoryOptions;
  });
}

// Populate product dropdowns
function populateProductDropdowns() {
  const productSelects = document.querySelectorAll('select[name="productId"]');
  const productOptions = store.products
    .map(
      (product) =>
        `<option value="${product.id}">${product.name} (Stock: ${product.stockQuantity})</option>`
    )
    .join("");

  productSelects.forEach((select) => {
    select.innerHTML =
      '<option value="">Select a product</option>' + productOptions;
  });
}

// Initialize UI elements
document.addEventListener("DOMContentLoaded", () => {
  populateCategoryDropdowns();
  populateProductDropdowns();

  // Navigation event listeners
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(e.currentTarget.dataset.page);
    });
  });
});
