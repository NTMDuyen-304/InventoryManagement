CREATE TABLE Product (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    quantity INTEGER
);

CREATE TABLE InventoryLog (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_id INTEGER NOT NULL,
    action VARCHAR(10) CHECK (action IN ('IMPORT', 'EXPORT')),
    amount INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_product
        FOREIGN KEY (product_id)
        REFERENCES Product(id)
        ON DELETE CASCADE
);

CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    display_name VARCHAR(50),
    title VARCHAR(50)
);
