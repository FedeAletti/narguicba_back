/*
  Warnings:

  - Added the required column `stock` to the `compra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `compra` ADD COLUMN `stock` INTEGER NOT NULL;
