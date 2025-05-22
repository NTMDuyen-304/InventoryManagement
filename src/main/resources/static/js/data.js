// Data store
const store = {
  products: [],
  movements: [],
  categories: [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Furniture" },
    { id: "3", name: "Office Supplies" },
    { id: "4", name: "Clothing" },
  ],
};

// Generate unique IDs
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Product operations
function addProduct(product) {
  const newProduct = {
    id: generateId(),
    ...product,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  store.products.push(newProduct);
  saveToLocalStorage();
  return newProduct;
}

function updateProduct(id, updates) {
  const index = store.products.findIndex((p) => p.id === id);
  if (index !== -1) {
    store.products[index] = {
      ...store.products[index],
      ...updates,
      updatedAt: new Date(),
    };
    saveToLocalStorage();
    return store.products[index];
  }
  return null;
}

function deleteProduct(id) {
  store.products = store.products.filter((p) => p.id !== id);
  saveToLocalStorage();
}

function getProduct(id) {
  return store.products.find((p) => p.id === id);
}

// Movement operations
function addMovement(movement) {
  const newMovement = {
    id: generateId(),
    ...movement,
    date: new Date(),
  };
  store.movements.push(newMovement);

  // Update product stock
  const product = getProduct(movement.productId);
  if (product) {
    const quantity =
      movement.type === "incoming" ? movement.quantity : -movement.quantity;
    updateProduct(product.id, {
      stockQuantity: product.stockQuantity + quantity,
    });
  }

  saveToLocalStorage();
  return newMovement;
}

// Stats and filters
function getDashboardStats() {
  return {
    totalProducts: store.products.length,
    lowStockItems: store.products.filter(
      (p) => p.stockQuantity <= p.minStockLevel
    ).length,
    totalValue: store.products.reduce(
      (sum, p) => sum + p.price * p.stockQuantity,
      0
    ),
  };
}

function getLowStockProducts() {
  return store.products.filter((p) => p.stockQuantity <= p.minStockLevel);
}

function getRecentMovements(limit = 5) {
  return [...store.movements]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

// Local storage operations
function saveToLocalStorage() {
  localStorage.setItem(
    "inventoryData",
    JSON.stringify({
      products: store.products,
      movements: store.movements,
    })
  );
}

function loadFromLocalStorage() {
  const data = localStorage.getItem("inventoryData");
  if (data) {
    const parsed = JSON.parse(data);
    store.products = parsed.products.map((p) => ({
      ...p,
      createdAt: new Date(p.createdAt),
      updatedAt: new Date(p.updatedAt),
    }));
    store.movements = parsed.movements.map((m) => ({
      ...m,
      date: new Date(m.date),
    }));
  }
}

// Danh sách category giả lập
const categories = ["Electronics", "Books", "Clothing", "Furniture"];

// Hàm tải danh mục vào dropdown
function loadCategoryOptions(selectElement) {
  selectElement.innerHTML = '<option value="">Select a category</option>';
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    selectElement.appendChild(option);
  });
}

// Initialize data
loadFromLocalStorage();
