/*
  Warnings:

  - You are about to alter the column `oldPrice` on the `watch` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `watch` MODIFY `oldPrice` INTEGER NULL,
    MODIFY `description` VARCHAR(1000) NOT NULL;
