-- Dữ liệu cho bảng Product
INSERT INTO Product (name, category, quantity) VALUES ('Bút bi Thiên Long', 'Văn phòng phẩm', 150);
INSERT INTO Product (name, category, quantity) VALUES ('Vở Campus', 'Văn phòng phẩm', 300);
INSERT INTO Product (name, category, quantity) VALUES ('Giấy A4', 'Văn phòng phẩm', 500);
INSERT INTO Product (name, category, quantity) VALUES ('Chuột Logitech M185', 'Thiết bị điện tử', 50);
INSERT INTO Product (name, category, quantity) VALUES ('Bàn phím cơ Akko', 'Thiết bị điện tử', 30);
INSERT INTO Product (name, category, quantity) VALUES ('USB 32GB Kingston', 'Thiết bị điện tử', 100);
INSERT INTO Product (name, category, quantity) VALUES ('Ổ cứng SSD 500GB', 'Thiết bị điện tử', 40);
INSERT INTO Product (name, category, quantity) VALUES ('Tai nghe Sony WH-1000XM4', 'Âm thanh', 20);
INSERT INTO Product (name, category, quantity) VALUES ('Loa Bluetooth JBL', 'Âm thanh', 25);
INSERT INTO Product (name, category, quantity) VALUES ('Máy in HP LaserJet', 'Thiết bị điện tử', 15);
INSERT INTO Product (name, category, quantity) VALUES ('Băng keo trong', 'Văn phòng phẩm', 200);
INSERT INTO Product (name, category, quantity) VALUES ('Kẹp giấy lớn', 'Văn phòng phẩm', 120);
INSERT INTO Product (name, category, quantity) VALUES ('Bìa nhựa A4', 'Văn phòng phẩm', 250);
INSERT INTO Product (name, category, quantity) VALUES ('Máy tính Casio FX580VN', 'Thiết bị điện tử', 60);
INSERT INTO Product (name, category, quantity) VALUES ('Cáp sạc Lightning', 'Phụ kiện', 80);
INSERT INTO Product (name, category, quantity) VALUES ('Sạc dự phòng Anker', 'Phụ kiện', 35);
INSERT INTO Product (name, category, quantity) VALUES ('Túi đựng laptop', 'Phụ kiện', 45);
INSERT INTO Product (name, category, quantity) VALUES ('Giấy note vàng', 'Văn phòng phẩm', 300);
INSERT INTO Product (name, category, quantity) VALUES ('Bảng trắng mini', 'Văn phòng phẩm', 70);
INSERT INTO Product (name, category, quantity) VALUES ('Bút dạ quang', 'Văn phòng phẩm', 190);

-- Dữ liệu cho InventoryLog (IMPORT)
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (1, 'IMPORT', 100, CURRENT_TIMESTAMP - INTERVAL '20 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (2, 'IMPORT', 200, CURRENT_TIMESTAMP - INTERVAL '18 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (3, 'IMPORT', 500, CURRENT_TIMESTAMP - INTERVAL '17 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (4, 'IMPORT', 60, CURRENT_TIMESTAMP - INTERVAL '15 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (5, 'IMPORT', 30, CURRENT_TIMESTAMP - INTERVAL '14 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (6, 'IMPORT', 100, CURRENT_TIMESTAMP - INTERVAL '13 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (7, 'IMPORT', 50, CURRENT_TIMESTAMP - INTERVAL '12 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (8, 'IMPORT', 20, CURRENT_TIMESTAMP - INTERVAL '11 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (9, 'IMPORT', 30, CURRENT_TIMESTAMP - INTERVAL '10 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (10, 'IMPORT', 10, CURRENT_TIMESTAMP - INTERVAL '9 days');

-- EXPORT logs
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (1, 'EXPORT', 50, CURRENT_TIMESTAMP - INTERVAL '7 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (2, 'EXPORT', 60, CURRENT_TIMESTAMP - INTERVAL '6 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (3, 'EXPORT', 100, CURRENT_TIMESTAMP - INTERVAL '5 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (4, 'EXPORT', 10, CURRENT_TIMESTAMP - INTERVAL '5 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (5, 'EXPORT', 5, CURRENT_TIMESTAMP - INTERVAL '4 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (6, 'EXPORT', 25, CURRENT_TIMESTAMP - INTERVAL '3 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (7, 'EXPORT', 15, CURRENT_TIMESTAMP - INTERVAL '3 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (8, 'EXPORT', 5, CURRENT_TIMESTAMP - INTERVAL '2 days');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (9, 'EXPORT', 10, CURRENT_TIMESTAMP - INTERVAL '1 day');
INSERT INTO InventoryLog (product_id, action, amount, created_at) VALUES (10, 'EXPORT', 2, CURRENT_TIMESTAMP);

INSERT INTO account (id, username, password, display_name, title) VALUES
    (1, 'admin1', 'password123', 'Administrator One', 'Admin'),
    (2, 'user1', 'pass456', 'User One', 'User'),
    (3, 'user2', 'pass789', 'User Two', 'User'),
    (4, 'admin2', 'admin789', 'Administrator Two', 'Admin'),
    (5, 'user3', 'user123', 'User Three', 'User')
ON CONFLICT (id) DO NOTHING;