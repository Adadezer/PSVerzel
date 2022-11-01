-- DropForeignKey
ALTER TABLE `Vehicles` DROP FOREIGN KEY `Vehicles_userId_fkey`;

-- AlterTable
ALTER TABLE `Vehicles` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Vehicles` ADD CONSTRAINT `Vehicles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
