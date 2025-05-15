document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("movementForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const movement = {
      type: document.getElementById("type").value,
      product: document.getElementById("product").value,
      quantity: parseInt(document.getElementById("quantity").value),
      reason: document.getElementById("reason").value,
    };

    // Tạm lưu vào localStorage
    const movements = JSON.parse(localStorage.getItem("movements") || "[]");
    movements.push(movement);
    localStorage.setItem("movements", JSON.stringify(movements));

    alert("Movement saved!");
    window.location.href = "movements.html";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("add-movement-btn");
  btn.addEventListener("click", () => {
    window.location.href =
      "D:InventoryManagementsrcmain\resources\templatesmovements.html"; // hoặc "../templates/recordmovement.html" nếu nằm trong templates/
  });
});
