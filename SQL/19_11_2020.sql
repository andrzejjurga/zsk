USE northwind_mysql;
-- 1
SELECT 
    products.ProductName AS 'Nazwa napoju',
    ROUND(SUM(`order details`.UnitPrice * `order details`.Quantity * (1 - `order details`.Discount)), 2) AS 'Łączna kwota zamówień'
FROM
    products
	JOIN
    `order details` ON products.ProductID = `order details`.ProductID
	JOIN
    categories ON products.CategoryID = categories.CategoryID
WHERE
    categories.CategoryName = 'Beverages'
GROUP BY products.ProductName;

SELECT 
    ROUND(SUM(`order details`.UnitPrice * `order details`.Quantity * (1 - `order details`.Discount)),
            2) AS 'kwota za napoje'
FROM
    `order details`
		JOIN
    products ON products.ProductID = `order details`.ProductID
		JOIN
    categories ON products.CategoryID = categories.CategoryID
WHERE
    categories.CategoryName = 'Beverages';

-- 2 
SELECT 
	year(OrderDate) AS 'rok' , month(OrderDate) AS 'miesiąc', ROUND(SUM(`order details`.Quantity * `order details`.UnitPrice * (1 - `order details`.Discount))) AS 'Łączna sprzedaż'
FROM 
	orders
INNER JOIN 
	`order details` ON `order details`.OrderID = orders.OrderID
WHERE
	year(OrderDate) = 2012
GROUP BY month(OrderDate);






