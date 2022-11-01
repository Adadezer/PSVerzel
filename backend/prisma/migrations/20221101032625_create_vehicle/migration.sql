/*
  Warnings:

  - Made the column `userId` on table `Vehicles` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Vehicles` DROP FOREIGN KEY `Vehicles_userId_fkey`;

-- AlterTable
ALTER TABLE `Vehicles` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Vehicles` ADD CONSTRAINT `Vehicles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
