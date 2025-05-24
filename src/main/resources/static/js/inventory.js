// inventory-inout.js - quick search filter for inventory in/out table

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const tableBody = document.getElementById("inoutTableBody");

  searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();

    [...tableBody.rows].forEach((row) => {
      const name = row.dataset.name || "";
      const code = row.dataset.code || "";
      const type = row.dataset.type || "";

      if (
        name.includes(filter) ||
        code.includes(filter) ||
        type.includes(filter)
      ) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});
