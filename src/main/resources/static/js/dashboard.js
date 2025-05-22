// Dashboard Page Functionality
function updateDashboard() {
    // Update stats
    const stats = getDashboardStats();
    document.getElementById('total-products').textContent = stats.totalProducts;
    document.getElementById('low-stock').textContent = stats.lowStockItems;
    document.getElementById('total-value').textContent = formatCurrency(stats.totalValue);
    
    // Update recent movements
    const recentMovements = getRecentMovements();
    const movementsList = document.getElementById('recent-movements-list');
    movementsList.innerHTML = recentMovements.map(movement => {
        const product = getProduct(movement.productId);
        return `
            <div class="movement-item">
                <span class="movement-type ${movement.type}">
                    ${movement.type.charAt(0).toUpperCase() + movement.type.slice(1)}
                </span>
                <div>
                    <div class="font-medium">${product ? product.name : 'Unknown Product'}</div>
                    <div class="text-sm text-gray-500">
                        ${movement.quantity} units • ${formatDate(movement.date)}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Update low stock products
    const lowStockProducts = getLowStockProducts();
    const lowStockList = document.getElementById('low-stock-list');
    lowStockList.innerHTML = lowStockProducts.map(product => `
        <div class="low-stock-item">
            <div>
                <div class="font-medium">${product.name}</div>
                <div class="text-sm text-gray-500">SKU: ${product.sku}</div>
            </div>
            <span class="stock-warning">${product.stockQuantity} left</span>
        </div>
    `).join('');
}