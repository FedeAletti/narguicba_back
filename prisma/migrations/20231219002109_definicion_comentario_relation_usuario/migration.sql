/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `foto` VARCHAR(191) NOT NULL DEFAULT 'Foto de una hooka';

-- CreateTable
CREATE TABLE `comentario` (
    `id_comentario` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `estrellas` VARCHAR(191) NULL,

    PRIMARY KEY (`id_comentario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `usuario_email_key` ON `usuario`(`email`);

-- AddForeignKey
ALTER TABLE `comentario` ADD CONSTRAINT `comentario_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
