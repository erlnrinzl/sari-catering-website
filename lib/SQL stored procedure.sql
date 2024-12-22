DELIMITER $$

CREATE FUNCTION generate_custom_id(prefix VARCHAR(255), start_value SMALLINT, padding_length SMALLINT) 
RETURNS VARCHAR(255)
DETERMINISTIC
BEGIN
    DECLARE new_value SMALLINT;
    DECLARE formatted_id VARCHAR(255);
    
    -- Get the maximum numeric value from the ID column
    SELECT MAX(CAST(SUBSTRING(id, LENGTH(prefix) + 1) AS UNSIGNED)) 
    INTO new_value 
    FROM Product 
    WHERE id LIKE CONCAT(prefix, '%');

    -- Handle the case where there are no existing IDs
    IF new_value IS NULL THEN
        SET new_value = start_value;
    ELSE
        SET new_value = new_value + 1;
    END IF;

    -- Format the ID with the prefix and padded numeric value
    SET formatted_id = CONCAT(prefix, LPAD(new_value, padding_length, '0'));

    RETURN formatted_id;
END$$

DELIMITER ;


-- --------------------------------divider--------------------------------------------------

CREATE FUNCTION generate_order_id(customerID VARCHAR(255))
RETURN CHAR(12)
DETERMINISTIC
BEGIN
  DECLARE new_value VARCHAR(255);
  DECLARE formatted_id VARCHAR(255);

  -- get the last id 
  SELECT MAX(CAST(SUBSTRING(id, 12) AS UNSIGNED))
  INTO new_value
  FROM Order
  WHERE Order.orderDate = CURRENT_DATE()
  
  -- handle the case where there are no existing IDs
  IF new_value IS NULL THEN
    SET new_value = 1;
  ELSE
    SET new_value += 1;
  END IF;

  -- Format the ID with the prefix and padded numeric value
  SET formatted_id = CONCAT('OR-', DATE_FORMAT(CURRENT_DATE(), '%Y%m%d'), '-', LPAD(1, 4, '0'));

  RETURN formatted_id;
END$$

DELIMITER;
