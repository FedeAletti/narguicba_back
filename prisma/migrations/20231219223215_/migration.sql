/*
  Warnings:

  - You are about to drop the column `estrellas` on the `comentario` table. All the data in the column will be lost.
  - Added the required column `id_comentario` to the `publicacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comentario` DROP COLUMN `estrellas`;

-- AlterTable
ALTER TABLE `publicacion` ADD COLUMN `id_comentario` INTEGER NOT NULL,
    MODIFY `descripcion` VARCHAR(191) NULL,
    MODIFY `foto` VARCHAR(191) NULL DEFAULT 'Foto x default';

-- AddForeignKey
ALTER TABLE `publicacion` ADD CONSTRAINT `publicacion_id_comentario_fkey` FOREIGN KEY (`id_comentario`) REFERENCES `comentario`(`id_comentario`) ON DELETE RESTRICT ON UPDATE CASCADE;
