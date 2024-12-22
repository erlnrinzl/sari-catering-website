-- CreateTable
CREATE TABLE `Customer` (
    `customerID` VARCHAR(191) NOT NULL,
    `customerName` VARCHAR(100) NOT NULL,
    `customerGender` ENUM('Male', 'Female') NOT NULL,
    `customerDOB` DATE NULL,
    `customerEmail` VARCHAR(20) NULL,
    `customerPhone` VARCHAR(20) NOT NULL,
    `customerAddress` VARCHAR(300) NOT NULL,
    `customerType` ENUM('Personal', 'HomeCatering', 'Corporate') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`customerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Corporate` (
    `id` VARCHAR(191) NOT NULL,
    `customerID` VARCHAR(191) NOT NULL,
    `taxNumber` CHAR(16) NOT NULL DEFAULT '0000000000000000',
    `contractNumber` VARCHAR(191) NOT NULL,
    `contractDate` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `contractEndDate` DATE NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Corporate_customerID_key`(`customerID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HomeCatering` (
    `id` VARCHAR(191) NOT NULL,
    `customerID` VARCHAR(191) NOT NULL,
    `subscriptionNumber` VARCHAR(191) NOT NULL,
    `subscriptionStatus` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `HomeCatering_customerID_key`(`customerID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PresetSchedule` (
    `presetID` CHAR(6) NOT NULL,
    `deliveryDay` ENUM('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday') NOT NULL,
    `customerID` CHAR(6) NOT NULL,

    PRIMARY KEY (`presetID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Staff` (
    `staffID` VARCHAR(191) NOT NULL,
    `staffName` VARCHAR(100) NOT NULL,
    `staffGender` ENUM('Male', 'Female') NOT NULL,
    `staffDOB` DATE NULL,
    `staffEmail` VARCHAR(20) NOT NULL,
    `staffPhone` VARCHAR(20) NOT NULL,
    `staffAddress` VARCHAR(300) NULL,
    `hireDate` DATE NOT NULL,
    `endDate` DATE NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `staffPosition` ENUM('Staff', 'Manager', 'DeliveryStaff', 'Admin') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`staffID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manager` (
    `staffID` VARCHAR(191) NOT NULL,
    `salesApproval` BIGINT NOT NULL,

    PRIMARY KEY (`staffID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `staffID` CHAR(6) NOT NULL,
    `salesRecord` BIGINT NOT NULL,

    UNIQUE INDEX `Admin_staffID_key`(`staffID`),
    PRIMARY KEY (`staffID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeliveryStaff` (
    `staffID` CHAR(6) NOT NULL,
    `vehicleNumber` VARCHAR(7) NOT NULL,

    UNIQUE INDEX `DeliveryStaff_staffID_key`(`staffID`),
    PRIMARY KEY (`staffID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `orderID` CHAR(17) NOT NULL,
    `orderDate` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deliveryDateRequest` DATETIME NOT NULL,
    `totalAmount` BIGINT NOT NULL,
    `orderStatus` ENUM('PENDING', 'CANCELLED', 'PROCESSED', 'COMPLETED') NOT NULL,
    `paymentStatus` ENUM('UNPAID', 'DP', 'PAID') NOT NULL,
    `customerID` CHAR(6) NULL,
    `staffID` CHAR(6) NULL,

    UNIQUE INDEX `Order_orderID_key`(`orderID`),
    PRIMARY KEY (`orderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Billing` (
    `billingID` CHAR(5) NOT NULL,
    `billingDate` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `billingStatus` ENUM('PAID', 'UNPAID') NOT NULL,
    `billingType` ENUM('DP', 'TERMIN_1', 'TERMIN_2', 'FINAL_PAYMENT', 'FULL') NOT NULL,
    `orderID` CHAR(17) NOT NULL,

    UNIQUE INDEX `Billing_billingID_key`(`billingID`),
    PRIMARY KEY (`billingID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `paymentID` CHAR(5) NOT NULL,
    `paymentDate` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `paymentType` ENUM('CASH', 'TRANSFER') NOT NULL,
    `billingID` CHAR(5) NOT NULL,

    UNIQUE INDEX `Payment_paymentID_key`(`paymentID`),
    UNIQUE INDEX `Payment_billingID_key`(`billingID`),
    PRIMARY KEY (`paymentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeliverySchedule` (
    `deliveryID` CHAR(14) NOT NULL,
    `deliveryAddress` VARCHAR(300) NOT NULL,
    `actualDeliveryDate` DATE NOT NULL,
    `deliveryStatus` ENUM('SCHEDULED', 'DELIVERED', 'POSTPONED') NOT NULL,
    `orderID` CHAR(17) NOT NULL,
    `deliveryStaffID` CHAR(6) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `DeliverySchedule_deliveryID_key`(`deliveryID`),
    UNIQUE INDEX `DeliverySchedule_orderID_key`(`orderID`),
    PRIMARY KEY (`deliveryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderDetail` (
    `orderID` CHAR(17) NOT NULL,
    `menuID` CHAR(5) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`orderID`, `menuID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Menu` (
    `menuID` CHAR(5) NOT NULL,
    `menuName` VARCHAR(100) NOT NULL,
    `menuDesc` VARCHAR(500) NOT NULL,
    `menuPrice` BIGINT NOT NULL,
    `menuType` ENUM('FOOD', 'DRINK') NOT NULL,
    `menuCategoryID` CHAR(5) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Menu_menuID_key`(`menuID`),
    PRIMARY KEY (`menuID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MenuCategory` (
    `menuCategoryID` CHAR(5) NOT NULL,
    `categoryName` VARCHAR(50) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `MenuCategory_menuCategoryID_key`(`menuCategoryID`),
    PRIMARY KEY (`menuCategoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recipe` (
    `menuID` CHAR(5) NOT NULL,
    `materialID` CHAR(5) NOT NULL,
    `quantityUsed` INTEGER NOT NULL,

    PRIMARY KEY (`menuID`, `materialID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Material` (
    `materialID` CHAR(5) NOT NULL,
    `materialName` VARCHAR(100) NOT NULL,
    `unit` VARCHAR(50) NOT NULL,
    `stockQuantity` INTEGER NOT NULL,
    `minimunStock` INTEGER NOT NULL,
    `materialCategoryID` CHAR(5) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Material_materialID_key`(`materialID`),
    PRIMARY KEY (`materialID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MaterialCategory` (
    `materialCategoryID` CHAR(5) NOT NULL,
    `materialCategoryName` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `MaterialCategory_materialCategoryID_key`(`materialCategoryID`),
    PRIMARY KEY (`materialCategoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `supplierID` CHAR(5) NOT NULL,
    `supplierName` VARCHAR(100) NOT NULL,
    `supplierPhone` VARCHAR(20) NOT NULL,
    `supplierEmail` VARCHAR(20) NULL,
    `supplierAddress` VARCHAR(300) NOT NULL,
    `supplierWebsite` VARCHAR(50) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Supplier_supplierID_key`(`supplierID`),
    PRIMARY KEY (`supplierID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MaterialSupplier` (
    `materialID` CHAR(5) NOT NULL,
    `supplierID` CHAR(5) NOT NULL,
    `closestExpirationDate` DATE NOT NULL,
    `newestSupplyDate` DATE NOT NULL,

    PRIMARY KEY (`materialID`, `supplierID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Corporate` ADD CONSTRAINT `Corporate_customerID_fkey` FOREIGN KEY (`customerID`) REFERENCES `Customer`(`customerID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HomeCatering` ADD CONSTRAINT `HomeCatering_customerID_fkey` FOREIGN KEY (`customerID`) REFERENCES `Customer`(`customerID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PresetSchedule` ADD CONSTRAINT `PresetSchedule_customerID_fkey` FOREIGN KEY (`customerID`) REFERENCES `HomeCatering`(`customerID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manager` ADD CONSTRAINT `Manager_staffID_fkey` FOREIGN KEY (`staffID`) REFERENCES `Staff`(`staffID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_staffID_fkey` FOREIGN KEY (`staffID`) REFERENCES `Staff`(`staffID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryStaff` ADD CONSTRAINT `DeliveryStaff_staffID_fkey` FOREIGN KEY (`staffID`) REFERENCES `Staff`(`staffID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customerID_fkey` FOREIGN KEY (`customerID`) REFERENCES `Customer`(`customerID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_staffID_fkey` FOREIGN KEY (`staffID`) REFERENCES `Staff`(`staffID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Billing` ADD CONSTRAINT `Billing_orderID_fkey` FOREIGN KEY (`orderID`) REFERENCES `Order`(`orderID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_billingID_fkey` FOREIGN KEY (`billingID`) REFERENCES `Billing`(`billingID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliverySchedule` ADD CONSTRAINT `DeliverySchedule_orderID_fkey` FOREIGN KEY (`orderID`) REFERENCES `Order`(`orderID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliverySchedule` ADD CONSTRAINT `DeliverySchedule_deliveryStaffID_fkey` FOREIGN KEY (`deliveryStaffID`) REFERENCES `Staff`(`staffID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_menuCategoryID_fkey` FOREIGN KEY (`menuCategoryID`) REFERENCES `MenuCategory`(`menuCategoryID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Material` ADD CONSTRAINT `Material_materialCategoryID_fkey` FOREIGN KEY (`materialCategoryID`) REFERENCES `MaterialCategory`(`materialCategoryID`) ON DELETE SET NULL ON UPDATE CASCADE;
