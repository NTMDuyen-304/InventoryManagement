// Stock Movements Page Functionality
function initializeMovementsPage() {
  const addButton = document.getElementById("add-movement-btn");
  const movementForm = document.getElementById("movement-form");
  const searchInput = document.getElementById("movement-search");
  const typeFilter = document.getElementById("movement-type-filter");

  // Event Listeners
  addButton.addEventListener("click", () => {
    populateProductDropdowns(); // Refresh product list
    showModal("movement-modal");
  });

  movementForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = getFormData(movementForm);
    addMovement(formData);
    closeModal("movement-modal");
    resetForm(movementForm);
    renderMovementsTable();
    updateDashboard();
  });

  searchInput.addEventListener("input", renderMovementsTable);
  typeFilter.addEventListener("change", renderMovementsTable);

  // Initial render
  renderMovementsTable();
}

function renderMovementsTable() {
  const tbody = document.querySelector("#movements-table tbody");
  const searchTerm = document
    .getElementById("movement-search")
    .value.toLowerCase();
  const typeFilter = document.getElementById("movement-type-filter").value;

  // Filter and sort movements
  let filteredMovements = store.movements
    .filter((movement) => {
      const product = getProduct(movement.productId);
      const matchesSearch =
        product?.name.toLowerCase().includes(searchTerm) ||
        false ||
        movement.reason.toLowerCase().includes(searchTerm);
      const matchesType = !typeFilter || movement.type === typeFilter;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Render table rows
  tbody.innerHTML = filteredMovements
    .map((movement) => {
      const product = getProduct(movement.productId);
      return `
            <tr>
                <td>${formatDate(movement.date)}</td>
                <td>${product ? product.name : "Unknown Product"}</td>
                <td>
                    <span class="movement-type ${movement.type}">
                        ${
                          movement.type.charAt(0).toUpperCase() +
                          movement.type.slice(1)
                        }
                    </span>
                </td>
                <td>${movement.quantity}</td>
                <td>${movement.reason}</td>
            </tr>
        `;
    })
    .join("");
}
