// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize pages
  initializeProductsPage();
  initializeMovementsPage();
  updateDashboard();

  // Set initial page
  navigateTo("dashboard");
});
