/*
  Warnings:

  - The primary key for the `compra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_item` on the `compra` table. All the data in the column will be lost.
  - You are about to drop the column `id_producto` on the `compra` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `compra` table. All the data in the column will be lost.
  - You are about to drop the `recomendacion` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[numero_orden]` on the table `compra` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fehca` to the `compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero_orden` to the `compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio_Final` to the `compra` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `compra` DROP FOREIGN KEY `compra_id_producto_fkey`;

-- DropForeignKey
ALTER TABLE `recomendacion` DROP FOREIGN KEY `recomendacion_id_producto_fkey`;

-- AlterTable
ALTER TABLE `compra` DROP PRIMARY KEY,
    DROP COLUMN `id_item`,
    DROP COLUMN `id_producto`,
    DROP COLUMN `stock`,
    ADD COLUMN `fehca` VARCHAR(191) NOT NULL,
    ADD COLUMN `numero_orden` INTEGER NOT NULL,
    ADD COLUMN `precio_Final` DOUBLE NOT NULL,
    MODIFY `id_compra` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_compra`);

-- DropTable
DROP TABLE `recomendacion`;

-- CreateTable
CREATE TABLE `orden` (
    `id_item` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_orden` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `id_producto` INTEGER NOT NULL,
    `stock` INTEGER NOT NULL,
    `precio` DOUBLE NOT NULL,

    PRIMARY KEY (`id_item`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `compra_numero_orden_key` ON `compra`(`numero_orden`);

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `orden_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `orden_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;
