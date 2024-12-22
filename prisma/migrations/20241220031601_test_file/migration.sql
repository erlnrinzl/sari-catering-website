/*
  Warnings:

  - You are about to alter the column `deliveryDateRequest` on the `order` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `deliveryDateRequest` DATETIME NOT NULL;
