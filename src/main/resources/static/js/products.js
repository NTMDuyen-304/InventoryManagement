// Products Page Functionality
function initializeProductsPage() {
  const addButton = document.getElementById("add-product-btn");
  const productForm = document.getElementById("product-form");
  const searchInput = document.getElementById("product-search");
  const categoryFilter = document.getElementById("category-filter");

  // Event Listeners
  addButton.addEventListener("click", () => showModal("product-modal"));

  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = getFormData(productForm);
    addProduct(formData);
    closeModal("product-modal");
    resetForm(productForm);
    renderProductsTable();
    updateDashboard();
  });

  searchInput.addEventListener("input", renderProductsTable);
  categoryFilter.addEventListener("change", renderProductsTable);

  // Initial render
  renderProductsTable();
}

function renderProductsTable() {
  const tbody = document.querySelector("#products-table tbody");
  const searchTerm = document
    .getElementById("product-search")
    .value.toLowerCase();
  const categoryFilter = document.getElementById("category-filter").value;

  // Filter products
  let filteredProducts = store.products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.sku.toLowerCase().includes(searchTerm);
    const matchesCategory =
      !categoryFilter || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Render table rows
  tbody.innerHTML = filteredProducts
    .map(
      (product) => `
        <tr>
            <td>
                <div class="flex items-center">
                    <div>
                        <div class="font-medium">${product.name}</div>
                        <div class="text-sm text-gray-500">${product.sku}</div>
                    </div>
                </div>
            </td>
            <td>${product.category}</td>
            <td>
                <span class="${
                  product.stockQuantity <= product.minStockLevel
                    ? "text-red-600"
                    : "text-green-600"
                }">
                    ${product.stockQuantity}
                </span>
            </td>
            <td>${formatCurrency(product.price)}</td>
            <td>
                <button onclick="deleteProduct('${
                  product.id
                }'); renderProductsTable(); updateDashboard();"
                    class="btn btn-secondary">Delete</button>
            </td>
        </tr>
    `
    )
    .join("");
}
cancelBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to cancel?")) {
    window.location.href =
      "D:InventoryManagementsrcmain\resources\templatesproducts.html";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ... lưu vào localStorage

  alert("Product saved successfully!");
  window.location.href =
    "D:InventoryManagementsrcmain\resources\templatesproducts.html";
});
